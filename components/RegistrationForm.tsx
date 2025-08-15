"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { GridBackground } from '@/components/ui/GridBackground'
import { DotBackground } from '@/components/ui/DotBackground'
import { Spotlight } from '@/components/ui/spotlight-new'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface RegistrationData {
  name: string
  email: string
  hasRegNo: string | undefined
  regNo: string | null
  year: string
  batch: string
  foodPreference: string
}

interface RegistrationResponse {
  exists: boolean
}

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [data, setData] = useState<RegistrationData>({
    name: '',
    email: '',
    hasRegNo: undefined,
    regNo: null,
    year: '',
    batch: '',
    foodPreference: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [registrationComplete, setRegistrationComplete] = useState(false)
  const [existingRegistration, setExistingRegistration] = useState<RegistrationResponse | null>(null)

  const currentYear = new Date().getFullYear()

  const questions = [
    {
      id: 'name',
      question: "What's your name?",
      type: 'text',
      placeholder: 'Enter your full name'
    },
    {
      id: 'email',
      question: "What's your email?",
      type: 'email',
      placeholder: 'Enter your email address'
    },
    {
      id: 'hasRegNo',
      question: "Do you have a college registration number?",
      type: 'choice',
      options: ['Yes', 'No']
    }
  ]

  const yearOptions = ['First', 'Second']
  const batchOptions = [
    { value: 'cs', label: 'CSE' },
    { value: 'ca', label: 'CS AI' },
    { value: 'csot', label: 'CSOT' }
  ]

  const foodOptions = ['Veg', 'Non-Veg']

  useEffect(() => {
    // Check if user already has a registration
    if (data.email && currentStep === 2) {
      checkExistingRegistration()
    }
  }, [data.email, currentStep])

  const checkExistingRegistration = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/check-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.email })
      })
      
      const result: RegistrationResponse = await response.json()
      setExistingRegistration(result)
      
      if (result.exists) {
        setRegistrationComplete(true)
      }
    } catch (error) {
      console.error('Error checking registration:', error)
    } finally {
      setLoading(false)
    }
  }

  const validateRegNo = (regNo: string): { isValid: boolean; year?: number; batch?: string; error?: string } => {
    const regex = /^prc(\d{2})(cs|ca|csot)(\d{3})$/i
    const match = regNo.match(regex)
    
    if (!match) {
      return { isValid: false, error: 'Invalid registration number format. Expected: prc<year><batch><id>' }
    }
    
    const [, yearSuffix, batch, regId] = match
    const joiningYear = 2000 + parseInt(yearSuffix)
    // Inclusive academic year calculation: prc25 => Year 1, prc22 => Year 4
    const studentYear = (currentYear - joiningYear) + 1
    
    // Only Year 1 and Year 2 allowed when reg no is provided
    if (studentYear < 1 || studentYear > 2) {
      return { isValid: false, error: 'Only Year 1 and Year 2 students are allowed' }
    }
    
    if (!['cs', 'ca', 'csot'].includes(batch.toLowerCase())) {
      return { isValid: false, error: 'Invalid batch. Only cs, ca, and csot are allowed' }
    }
    
    return { isValid: true, year: studentYear, batch: batch.toLowerCase() }
  }

  const handleInputChange = (value: string) => {
    setData(prev => ({ ...prev, [questions[currentStep].id]: value }))
  }

  const handleRegNoInput = (regNo: string) => {
    setData(prev => ({ ...prev, regNo }))
    
    // Clear error when user starts typing
    if (regNo.length < 10) {
      setError(null)
      return
    }
    
    if (regNo.length >= 10) {
      const validation = validateRegNo(regNo)
      if (validation.isValid) {
        // Map year numbers to display text
        const yearText = validation.year === 1 ? 'First' : 
                        validation.year === 2 ? 'Second' : 
                        validation.year === 3 ? 'Third' : 'Fourth'
        
        setData(prev => ({ 
          ...prev, 
          regNo,
          year: yearText,
          batch: validation.batch!
        }))
        setError(null)
      } else {
        setError(validation.error!)
        // Clear the year and batch if validation fails
        setData(prev => ({ 
          ...prev, 
          year: '',
          batch: ''
        }))
      }
    }
  }

  const handleNext = () => {
    // Scroll to top when next button is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    // Step 0 -> 1, Step 1 -> 2
    if (currentStep === 0 || currentStep === 1) {
      setCurrentStep(prev => prev + 1)
      return
    }

    // Step 2: Branch based on hasRegNo selection
    if (currentStep === 2) {
      if (data.hasRegNo === 'Yes') {
        // With reg no, skip manual year/batch and go to food preference
        setCurrentStep(4)
      } else {
        // Without reg no, go to manual year/batch
        setCurrentStep(3)
      }
      return
    }

    // Step 3 (manual year/batch) -> Step 4 (food)
    if (currentStep === 3) {
      setCurrentStep(4)
      return
    }
  }

  const handleBack = () => {
    // If on food step and the user has a reg no, skip the manual year/batch step
    if (currentStep === 4 && data.hasRegNo === 'Yes') {
      setCurrentStep(2)
      return
    }
    setCurrentStep(prev => Math.max(0, prev - 1))
  }

  const handleSubmit = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('/api/create-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      if (response.ok) {
        // Registration successful - redirect to external payment website
        // You can replace this URL with your actual external payment gateway
        window.location.href = 'https://your-payment-gateway.com'
      } else {
        const errorData = await response.json()
        setError(errorData.error || 'Registration failed. Please try again.')
      }
    } catch (error) {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  const renderQuestion = () => {
    const question = questions[currentStep]
    
    if (currentStep === 0 || currentStep === 1) {
      return (
        <div className="space-y-4">
          <input
            type={question.type}
            placeholder={question.placeholder}
            value={data[question.id as keyof RegistrationData] as string}
            onChange={(e) => handleInputChange(e.target.value)}
            className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-neutral-500 focus:ring-2 focus:ring-neutral-500/20 transition-all"
          />
        </div>
      )
    }
    
    if (currentStep === 2) {
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {question.options?.map((option) => (
              <button
                key={option}
                onClick={() => handleInputChange(option)}
                className={`p-4 rounded-lg border transition-all ${
                  data.hasRegNo === option
                    ? 'border-neutral-500 bg-neutral-700/50'
                    : 'border-neutral-700 hover:border-neutral-600'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          
          {/* Show registration number input only after selecting "Yes" */}
          {data.hasRegNo === 'Yes' && (
            <div className="mt-4 pt-4 border-t border-neutral-700">
              <label className="block text-sm font-medium text-neutral-300 mb-2">Enter your registration number</label>
              <input
                type="text"
                placeholder="e.g., prc22cs037"
                value={data.regNo || ''}
                onChange={(e) => handleRegNoInput(e.target.value)}
                className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-neutral-500 focus:ring-2 focus:ring-neutral-500/20 transition-all"
              />
              <p className="text-xs text-neutral-400 mt-1">Format: prc&lt;year&gt;&lt;batch&gt;&lt;id&gt; (e.g., prc22cs037)</p>
            </div>
          )}
        </div>
      )
    }
    
    if (currentStep === 3) {
      return (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">Select your year</label>
            <select
              value={data.year}
              onChange={(e) => setData(prev => ({ ...prev, year: e.target.value }))}
              className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-neutral-500 focus:ring-2 focus:ring-neutral-500/20"
            >
              <option value="">Select year</option>
              {yearOptions.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">Select your batch</label>
            <select
              value={data.batch}
              onChange={(e) => setData(prev => ({ ...prev, batch: e.target.value }))}
              className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-neutral-500 focus:ring-2 focus:ring-neutral-500/20"
            >
              <option value="">Select batch</option>
              {batchOptions.map(batch => (
                <option key={batch.value} value={batch.value}>{batch.label}</option>
              ))}
            </select>
          </div>
        </div>
      )
    }
    
    if (currentStep === 4) {
      return (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">Food preference</label>
            <div className="grid grid-cols-2 gap-8">
              {foodOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setData(prev => ({ ...prev, foodPreference: option }))}
                  className={`p-4 rounded-lg border transition-all ${
                    data.foodPreference === option
                      ? 'border-neutral-500 bg-neutral-700/50'
                      : 'border-neutral-700 hover:border-neutral-600'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )
    }
    
    return null
  }

  const canProceed = () => {
    if (currentStep === 0) return data.name.trim().length > 0
    if (currentStep === 1) return data.email.trim().length > 0
    if (currentStep === 2) {
      if (data.hasRegNo === 'Yes') {
        // If user has regNo, check if it's valid and meets restrictions
        if (data.regNo) {
          const validation = validateRegNo(data.regNo)
          return validation.isValid
        }
        return false // Can't proceed if they haven't entered regNo yet
      }
      return data.hasRegNo !== undefined // Can proceed if they chose "No"
    }
    if (currentStep === 3) return data.year && data.batch
    if (currentStep === 4) return data.foodPreference
    return false
  }

  const getVisibleStepInfo = () => {
    // Compute a user-friendly step number and total steps based on the chosen path
    const usingRegNo = data.hasRegNo === 'Yes'
    const total = usingRegNo ? 4 : 5
    let displayStep = 1
    if (!usingRegNo) {
      // Path: 0->1, 1->2, 2->3, 3->4, 4->5
      displayStep = currentStep + 1
    } else {
      // Path: 0->1, 1->2, 2->3, 4->4
      if (currentStep <= 2) displayStep = currentStep + 1
      else if (currentStep === 4) displayStep = 4
    }
    return { displayStep, total }
  }

  const getProgressPercentage = () => {
    const { displayStep, total } = getVisibleStepInfo()
    return (displayStep / total) * 100
  }

  if (registrationComplete) {
    return (
      <DotBackground shadow>
        <div className="text-center space-y-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
          <h2 className="text-2xl font-bold text-white">Registration Complete!</h2>
          <p className="text-neutral-300">You have already registered for this event.</p>
        </div>
      </DotBackground>
    )
  }



  return (
    <DotBackground shadow>
      <Spotlight />
      <div className="relative z-10 w-full max-sm:px-6">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-neutral-400 mb-2">
            {(() => { const { displayStep, total } = getVisibleStepInfo(); return (
              <>
                <span>Step {displayStep} of {total}</span>
                <span>{Math.round(getProgressPercentage())}%</span>
              </>
            ) })()}
          </div>
          <div className="w-full bg-neutral-800 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${getProgressPercentage()}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {questions[currentStep]?.question || 
               (currentStep === 3 ? 'Select your details' : 
                currentStep === 4 ? 'Food preference' : '')}
            </h2>
            
            {renderQuestion()}
          </motion.div>
        </AnimatePresence>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400"
          >
            {error}
          </motion.div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            containerClassName="rounded-xl"
            as="button"
            className={`dark:bg-black bg-white text-black dark:text-white ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={currentStep === 0 ? undefined : handleBack}
          >
            Back
          </Button>
          
          {currentStep < 4 ? (
            <Button
              containerClassName="rounded-xl"
              as="button"
              className={`dark:bg-black bg-white text-black dark:text-white ${!canProceed() ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={canProceed() ? handleNext : undefined}
            >
              Next
            </Button>
          ) : (
            <Button
              containerClassName="rounded-xl"
              as="button"
              className={`dark:bg-black bg-white text-black dark:text-white ${!canProceed() || loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={!canProceed() || loading ? undefined : handleSubmit}
            >
              {loading ? (
                <div className="flex items-center">
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </div>
              ) : (
                'Go to Payment'
              )}
            </Button>
          )}
        </div>
      </div>
    </DotBackground>
  )
}

export default RegistrationForm
