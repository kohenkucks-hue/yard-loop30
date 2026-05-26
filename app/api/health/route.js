export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { hasBlobToken, readJsonBlob, writeJsonBlob } from '../../lib/blobJson'

export async function GET() {
  const blobToken = hasBlobToken()
  let blobRead = false
  let blobWrite = false
  let error = null

  if (blobToken) {
    try {
      const key = 'yard-loop-health.json'
      const data = { ok: true, checkedAt: new Date().toISOString() }
      await writeJsonBlob(key, data)
      blobWrite = true
      const readBack = await readJsonBlob(key, null)
      blobRead = Boolean(readBack?.ok)
    } catch (e) {
      error = e.message
    }
  }

  return NextResponse.json({
    ok: blobToken && blobRead && blobWrite,
    vercelBlobTokenPresent: blobToken,
    blobRead,
    blobWrite,
    error,
    message: blobToken ? 'Vercel Blob token found.' : 'Missing BLOB_READ_WRITE_TOKEN in Vercel Environment Variables.'
  })
}
