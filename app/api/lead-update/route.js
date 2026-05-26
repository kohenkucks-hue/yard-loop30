export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { hasBlobToken, readJsonBlob, writeJsonBlob } from '../../lib/blobJson'

const DEFAULT_PASSWORD = 'Kohenmichael2!'
function getPassword(){ return process.env.ADMIN_PASSWORD || DEFAULT_PASSWORD }
const LEADS_KEY = 'yard-loop-leads.json'

async function readLeads(){
  const leads = await readJsonBlob(LEADS_KEY, [])
  return Array.isArray(leads) ? leads : []
}

export async function POST(req){
  const pass = req.headers.get('x-admin-password')
  if(pass !== getPassword()) return NextResponse.json({ error:'Wrong password.' },{ status:401 })
  if(!hasBlobToken()) return NextResponse.json({ error:'Vercel Blob not connected.' },{ status:500 })

  const { id, patch } = await req.json()
  const leads = await readLeads()
  const updated = leads.map(l => l.id===id ? {...l,...patch} : l)
  await writeJsonBlob(LEADS_KEY, updated)
  return NextResponse.json({ ok:true })
}
