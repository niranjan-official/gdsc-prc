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
    const requiredFields = ['name', 'email', 'year', 'batch', 'foodPreference']
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
