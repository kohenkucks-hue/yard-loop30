export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { defaultContent } from '../../defaultContent'
import { hasBlobToken, readJsonBlob, writeJsonBlob } from '../../lib/blobJson'

const KEY = 'yard-loop-cms.json'
const DEFAULT_PASSWORD = 'Kohenmichael2!'
function getPassword(){ return process.env.ADMIN_PASSWORD || DEFAULT_PASSWORD }

export async function GET(){
  const saved = await readJsonBlob(KEY, defaultContent)
  return NextResponse.json(saved || defaultContent, { headers: { 'Cache-Control':'no-store, no-cache, must-revalidate, proxy-revalidate', 'Pragma':'no-cache', 'Expires':'0' } })
}

export async function POST(req){
  const pass = req.headers.get('x-admin-password')
  if(pass !== getPassword()) return NextResponse.json({ error:'Wrong admin password.' },{ status:401 })

  try {
    if(!hasBlobToken()) return NextResponse.json({ error:'Vercel Blob is not connected. Add BLOB_READ_WRITE_TOKEN in Vercel.' },{ status:500 })
    const body = await req.json()
    await writeJsonBlob(KEY, body)
    try {
      revalidatePath('/', 'layout')
      revalidatePath('/services')
      revalidatePath('/gallery')
      revalidatePath('/pricing')
      revalidatePath('/how-it-works')
      revalidatePath('/contact')
      revalidatePath('/estimate')
    } catch {}
    return NextResponse.json({ ok:true, savedAt: new Date().toISOString() }, { headers: { 'Cache-Control':'no-store, no-cache, must-revalidate, proxy-revalidate', 'Pragma':'no-cache', 'Expires':'0' } })
  } catch(e) {
    return NextResponse.json({ error:'Save failed: ' + e.message },{ status:500 })
  }
}
