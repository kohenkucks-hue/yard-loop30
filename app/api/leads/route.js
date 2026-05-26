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

export async function GET(req){
  const pass = req.headers.get('x-admin-password')
  if(pass !== getPassword()) return NextResponse.json({ error:'Wrong password.' },{ status:401 })
  if(!hasBlobToken()) return NextResponse.json({ leads:[], note:'Vercel Blob not connected.' })
  const leads = await readLeads()
  return NextResponse.json({ leads })
}

export async function DELETE(req){
  const pass = req.headers.get('x-admin-password')
  if(pass !== getPassword()) return NextResponse.json({ error:'Wrong password.' },{ status:401 })
  if(!hasBlobToken()) return NextResponse.json({ error:'Vercel Blob not connected.' },{ status:500 })
  const { id } = await req.json()
  const leads = await readLeads()
  await writeJsonBlob(LEADS_KEY, leads.filter(l => l.id !== id))
  return NextResponse.json({ ok:true })
}
