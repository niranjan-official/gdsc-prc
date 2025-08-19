import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/firebase/config'
import { collection, addDoc } from 'firebase/firestore'

const createRegistration = async (registrationData: any) => {
  try {
    const registrationsRef = collection(db, 'algorand-students')
    
    const registration = {
      ...registrationData,
      payment_status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    const docRef = await addDoc(registrationsRef, registration)
    
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Firebase write error:', error)
    throw error
  }
}

export async function POST(request: NextRequest) {
  try {
    const registrationData = await request.json()
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'mobile', 'year', 'batch', 'foodPreference', 'linkedinProfile', 'githubProfile', 'pythonTypescriptKnowledge', 'web3Knowledge']
    for (const field of requiredFields) {
      if (!registrationData[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        )
      }
    }

    // Check if user already exists
    const { db } = await import('@/firebase/config')
    const { collection, query, where, getDocs } = await import('firebase/firestore')
    
    const registrationsRef = collection(db, 'algorand-students')
    const q = query(registrationsRef, where('email', '==', registrationData.email))
    const querySnapshot = await getDocs(q)
    
    if (!querySnapshot.empty) {
      return NextResponse.json(
        { error: 'User already registered with this email' },
        { status: 409 }
      )
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(registrationData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate mobile number format (basic validation for Indian numbers)
    const mobileRegex = /^[6-9]\d{9}$/
    if (!mobileRegex.test(registrationData.mobile)) {
      return NextResponse.json(
        { error: 'Invalid mobile number format. Please enter a valid 10-digit Indian mobile number' },
        { status: 400 }
      )
    }

    // Validate LinkedIn profile URL
    const linkedinRegex = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/
    if (!linkedinRegex.test(registrationData.linkedinProfile)) {
      return NextResponse.json(
        { error: 'Invalid LinkedIn profile URL format' },
        { status: 400 }
      )
    }

    // Validate GitHub profile URL
    const githubRegex = /^https?:\/\/(www\.)?github\.com\/[a-zA-Z0-9-]+\/?$/
    if (!githubRegex.test(registrationData.githubProfile)) {
      return NextResponse.json(
        { error: 'Invalid GitHub profile URL format' },
        { status: 400 }
      )
    }

    // Validate Python/TypeScript knowledge (should not be empty)
    if (!registrationData.pythonTypescriptKnowledge.trim()) {
      return NextResponse.json(
        { error: 'Python/TypeScript knowledge description is required' },
        { status: 400 }
      )
    }

    // Validate web3 knowledge level
    const validWeb3Levels = ['Zero', 'Basic', 'Intermediate', 'Advanced']
    if (!validWeb3Levels.includes(registrationData.web3Knowledge)) {
      return NextResponse.json(
        { error: 'Invalid web3 knowledge level selection' },
        { status: 400 }
      )
    }
    
    // Validate year and batch
    const validYears = ['First', 'Second']
    const validBatches = ['cs', 'ca', 'csot']
    
    if (!validYears.includes(registrationData.year)) {
      return NextResponse.json(
        { error: 'Invalid year selection' },
        { status: 400 }
      )
    }
    
    if (!validBatches.includes(registrationData.batch)) {
      return NextResponse.json(
        { error: 'Invalid batch selection' },
        { status: 400 }
      )
    }
    
    // Validate food preference
    const validFoodPreferences = ['Veg', 'Non-Veg']
    if (!validFoodPreferences.includes(registrationData.foodPreference)) {
      return NextResponse.json(
        { error: 'Invalid food preference' },
        { status: 400 }
      )
    }
    
    // If registration number is provided, validate it
    if (registrationData.regNo) {
      const currentYear = new Date().getFullYear()
      const regex = /^prc(\d{2})(cs|ca|csot)(\d{3})$/i
      const match = registrationData.regNo.match(regex)
      
      if (!match) {
        return NextResponse.json(
          { error: 'Invalid registration number format' },
          { status: 400 }
        )
      }
      
      const [, yearSuffix, batch, regId] = match
      const joiningYear = 2000 + parseInt(yearSuffix)
      const studentYear = currentYear - joiningYear
      
      if (studentYear > 2) {
        return NextResponse.json(
          { error: 'Only Year 1 and Year 2 students are allowed' },
          { status: 400 }
        )
      }
      
      if (!['cs', 'ca', 'csot'].includes(batch.toLowerCase())) {
        return NextResponse.json(
          { error: 'Invalid batch in registration number' },
          { status: 400 }
        )
      }
    }
    
    // Create registration in Firebase
    const result = await createRegistration(registrationData)
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Registration created successfully',
        id: result.id
      })
    } else {
      return NextResponse.json(
        { error: 'Failed to create registration' },
        { status: 500 }
      )
    }
    
  } catch (error) {
    console.error('Error creating registration:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
