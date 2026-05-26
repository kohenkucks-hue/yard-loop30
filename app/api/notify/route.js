export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const lead = await req.json()
    const apiKey = process.env.RESEND_API_KEY
    const notifyEmail = process.env.NOTIFY_EMAIL || process.env.ADMIN_EMAIL || 'info@yard-loop.com'

    if (!apiKey) {
      // No email configured - silently succeed so lead still saves
      return NextResponse.json({ ok: true, note: 'No RESEND_API_KEY set — email not sent.' })
    }

    const isContractor = lead.leadType === 'contractor'
    const subject = isContractor
      ? `New Contractor Application — ${lead.company || lead.name}`
      : `New Yard Loop Lead — ${lead.name} ${lead.phone ? `(${lead.phone})` : ''}`

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><style>
body{font-family:system-ui,sans-serif;background:#f5f9fc;margin:0;padding:20px}
.card{background:white;border-radius:16px;padding:28px;max-width:600px;margin:auto;box-shadow:0 4px 18px rgba(0,0,0,.08)}
h1{color:#071a2f;font-size:22px;margin:0 0 4px}
.badge{display:inline-block;padding:4px 12px;border-radius:999px;background:#e8f5e0;color:#2f7d32;font-weight:700;font-size:13px;margin-bottom:20px}
.row{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #f0f4f8}
.row:last-child{border:none}
.label{color:#7a90a2;font-size:13px;font-weight:600}
.val{color:#071a2f;font-size:14px;font-weight:700;text-align:right;max-width:320px}
.cta{display:inline-block;margin-top:20px;padding:12px 24px;background:#2f7d32;color:white;border-radius:999px;text-decoration:none;font-weight:700}
.footer{margin-top:24px;font-size:12px;color:#9ab0c0;text-align:center}
</style></head>
<body>
<div class="card">
  <div class="badge">${isContractor ? '🔧 Contractor Application' : '📋 New Lead'}</div>
  <h1>${subject}</h1>
  <div style="margin-top:20px">
    ${[
      lead.name && ['Name', lead.name],
      lead.company && ['Company', lead.company],
      lead.phone && ['Phone', `<a href="tel:${lead.phone}" style="color:#2f7d32">${lead.phone}</a>`],
      lead.email && ['Email', `<a href="mailto:${lead.email}" style="color:#2f7d32">${lead.email}</a>`],
      (lead.address || lead.serviceArea) && ['Address / Area', lead.address || lead.serviceArea],
      lead.tier && ['Property Tier', lead.tier],
      lead.monthly && ['Est. Monthly', `$${Number(lead.monthly).toLocaleString()}`],
      lead.annual && ['Est. Annual', `$${Number(lead.annual).toLocaleString()}`],
      lead.points && ['Points', lead.points],
      lead.selectedServices && ['Services', lead.selectedServices],
      lead.insured && ['Insured', lead.insured],
      lead.licensed && ['Licensed', lead.licensed],
      lead.years && ['Years in Business', lead.years],
      lead.crewSize && ['Crew Size', lead.crewSize],
      lead.availability && ['Availability', lead.availability],
      lead.equipment && ['Equipment Notes', lead.equipment],
      lead.message && ['Message', lead.message],
      lead.notes && ['Notes', lead.notes],
      lead.source && ['Source', lead.source],
    ].filter(Boolean).map(([label, val]) => `
    <div class="row"><span class="label">${label}</span><span class="val">${val}</span></div>`).join('')}
  </div>
  <a class="cta" href="https://www.yard-loop.com/admin">Open Admin Dashboard</a>
  <div class="footer">Yard Loop · ${new Date().toLocaleString()} · Auto-notification</div>
</div>
</body>
</html>`

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Yard Loop Leads <onboarding@resend.dev>',
        to: [notifyEmail],
        subject,
        html,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Email send failed:', err)
      return NextResponse.json({ ok: true, note: 'Lead saved. Email notification failed: ' + err })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('Notify error:', e)
    return NextResponse.json({ ok: true, note: 'Lead saved. Notification error: ' + e.message })
  }
}
