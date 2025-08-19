import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/firebase/config'
import { collection, getDocs, query, where } from 'firebase/firestore'

// GET /api/export-registrations?key=YOUR_SECRET
// Exports only successful registrations as an XLSX file with a clean table.
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const providedKey = searchParams.get('key')
    const requiredKey = process.env.EXPORT_SECRET

    if (requiredKey && providedKey !== requiredKey) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const registrationsRef = collection(db, 'algorand-students')
    const q = query(
      registrationsRef,
      where('payment_status', '==', 'success')
    )
    const snapshot = await getDocs(q)

    const batchLabel: Record<string, string> = { cs: 'CSE', ca: 'CS AI', csot: 'CSOT' }

    const formatDateTime = (iso?: string) => {
      if (!iso) return ''
      const d = new Date(iso)
      if (isNaN(d.getTime())) return iso
      const yyyy = d.getFullYear()
      const mm = String(d.getMonth() + 1).padStart(2, '0')
      const dd = String(d.getDate()).padStart(2, '0')
      const hh = String(d.getHours()).padStart(2, '0')
      const mi = String(d.getMinutes()).padStart(2, '0')
      return `${yyyy}-${mm}-${dd} ${hh}:${mi}`
    }

    type Row = {
      'S.No': number
      'Name': string
      'Email': string
      'Mobile': string
      'Registration Number': string
      'Year': string
      'Batch': string
      'Food Preference': string
      'LinkedIn': string
      'GitHub': string
      'Python/TS Knowledge': string
      'Web3 Knowledge': string
      'Payment Status': string
      'Created At': string
      'Updated At': string
    }

    const rows: Row[] = []
    let serial = 1
    snapshot.forEach(doc => {
      const data = doc.data() as Record<string, any>
      rows.push({
        'S.No': serial++,
        'Name': data.name || '',
        'Email': data.email || '',
        'Mobile': data.mobile || '',
        'Registration Number': data.regNo || '',
        'Year': data.year || '',
        'Batch': batchLabel[(data.batch || '').toLowerCase()] || (data.batch || ''),
        'Food Preference': data.foodPreference || '',
        'LinkedIn': data.linkedinProfile || '',
        'GitHub': data.githubProfile || '',
        'Python/TS Knowledge': data.pythonTypescriptKnowledge || '',
        'Web3 Knowledge': data.web3Knowledge || '',
        'Payment Status': data.payment_status || '',
        'Created At': formatDateTime(data.createdAt),
        'Updated At': formatDateTime(data.updatedAt)
      })
    })

    // Dynamically import sheetjs to keep route light and support ESM/CJS interop
    const xlsxMod: any = await import('xlsx')
    const XLSX = xlsxMod.default || xlsxMod
    const wb = XLSX.utils.book_new()
    const headerOrder: (keyof Row)[] = [
      'S.No',
      'Name',
      'Email',
      'Mobile',
      'Registration Number',
      'Year',
      'Batch',
      'Food Preference',
      'LinkedIn',
      'GitHub',
      'Python/TS Knowledge',
      'Web3 Knowledge',
      'Payment Status',
      'Created At',
      'Updated At'
    ]

    // Ensure consistent header order
    const ws = XLSX.utils.json_to_sheet(rows, { header: headerOrder as string[] })
    // Add autofilter and sensible column widths
    if (ws['!ref']) {
      ws['!autofilter'] = { ref: ws['!ref'] }
    }
    ws['!cols'] = [
      { wch: 6 },   // S.No
      { wch: 22 },  // Name
      { wch: 28 },  // Email
      { wch: 14 },  // Mobile
      { wch: 16 },  // Registration Number
      { wch: 10 },  // Year
      { wch: 10 },  // Batch
      { wch: 12 },  // Food Preference
      { wch: 34 },  // LinkedIn
      { wch: 28 },  // GitHub
      { wch: 26 },  // Python/TS Knowledge
      { wch: 16 },  // Web3 Knowledge
      { wch: 14 },  // Payment Status
      { wch: 18 },  // Created At
      { wch: 18 }   // Updated At
    ]

    XLSX.utils.book_append_sheet(wb, ws, 'Registrations')
    const buf: Buffer = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' }) as unknown as Buffer

    const today = new Date()
    const yyyy = today.getFullYear()
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const dd = String(today.getDate()).padStart(2, '0')
    const filename = `algorand-registrations-success-${yyyy}${mm}${dd}.xlsx`

    return new NextResponse(buf, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': `attachment; filename=${filename}`
      }
    })
  } catch (error) {
    console.error('Error exporting registrations:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}


