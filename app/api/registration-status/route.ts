import { NextResponse } from 'next/server'
import { db } from '@/firebase/config'
import { collection, getCountFromServer } from 'firebase/firestore'

export async function GET() {
  try {
    const registrationsRef = collection(db, 'algorand-students')
    const snapshot = await getCountFromServer(registrationsRef)
    const count = snapshot.data().count
    const closed = count >= 100
    return NextResponse.json({ count, closed })
  } catch (error) {
    console.error('Error fetching registration status:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}


