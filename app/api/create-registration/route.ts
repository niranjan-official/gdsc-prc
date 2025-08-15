import { NextRequest, NextResponse } from 'next/server'

// Mock Firebase storage - replace with actual Firebase implementation
const mockCreateRegistration = async (registrationData: any) => {
  // Simulate database storage
  // In real implementation, add document to Firebase collection "algorand-students"
  
  const registration = {
    ...registrationData,
    payment_status: 'pending',
    createdAt: new Date().toISOString(),
    id: Math.random().toString(36).substr(2, 9) // Mock ID
  }
  
  // Simulate success
  return { success: true, id: registration.id }
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
    const result = await mockCreateRegistration(registrationData)
    
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
