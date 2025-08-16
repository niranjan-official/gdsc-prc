import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/firebase/config'
import { collection, query, where, getDocs } from 'firebase/firestore'

interface RegistrationData {
  id: string
  payment_status?: 'pending' | 'success' | 'failed'
  [key: string]: any
}

const checkRegistration = async (email: string): Promise<RegistrationData | null> => {
  try {
    const registrationsRef = collection(db, 'algorand-students')
    const q = query(registrationsRef, where('email', '==', email))
    const querySnapshot = await getDocs(q)
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0]
      return {
        id: doc.id,
        ...doc.data()
      } as RegistrationData
    }
    
    return null
  } catch (error) {
    console.error('Firebase query error:', error)
    throw error
  }
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
    const existingRegistration = await checkRegistration(email)
    
    if (existingRegistration) {
      return NextResponse.json({
        exists: true,
        payment_status: existingRegistration.payment_status || 'pending'
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
