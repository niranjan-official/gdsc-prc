import { NextRequest, NextResponse } from 'next/server'

// Mock Firebase check - replace with actual Firebase implementation
const mockCheckRegistration = async (email: string) => {
  // Simulate database check
  // In real implementation, query Firebase collection "algorand-students"
  
  // Mock data for testing
  const mockRegistrations = [
    {
      email: 'test@example.com',
      payment_status: 'pending'
    },
    {
      email: 'paid@example.com',
      payment_status: 'success'
    }
  ]
  
  const existing = mockRegistrations.find(reg => reg.email === email)
  return existing || null
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }
    
    // Check if email exists in Firebase collection "algorand-students"
    const existingRegistration = await mockCheckRegistration(email)
    
    if (existingRegistration) {
      return NextResponse.json({
        exists: true,
        payment_status: existingRegistration.payment_status
      })
    }
    
    return NextResponse.json({
      exists: false
    })
    
  } catch (error) {
    console.error('Error checking registration:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
