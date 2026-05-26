export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import {
  hasBlobToken,
  readJsonBlob,
  writeJsonBlob
} from '../../../../lib/blobJson'

const LEADS_KEY = 'yard-loop-leads.json'

async function readLeads() {
  const leads = await readJsonBlob(LEADS_KEY, [])
  return Array.isArray(leads) ? leads : []
}

export async function POST(req) {
  const body = await req.json().catch(() => ({}))

  const lead = {
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
    ...body
  }

  try {
    if (!hasBlobToken()) {
      return NextResponse.json({
        ok: true,
        lead,
        note: 'Blob not connected. Lead accepted but not stored.'
      })
    }

    const leads = await readLeads()

    await writeJsonBlob(LEADS_KEY, [lead, ...leads])

    return NextResponse.json({
      ok: true,
      lead
    })

  } catch (e) {
    return NextResponse.json({
      ok: false,
      error: 'Lead accepted, but Blob save failed: ' + e.message,
      lead
    }, {
      status: 500
    })
  }
}
