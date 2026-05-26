'use client'
import { useEffect, useState, useRef } from 'react'
import { defaultContent } from '../defaultContent'
import '../style.css'

const clone = x => JSON.parse(JSON.stringify(x))
const money = n => `$${Number(n||0).toLocaleString()}`
const FONTS = ['Outfit','Inter','Poppins','Raleway','Montserrat','Playfair Display','Lora','Oswald','DM Sans','Nunito','Roboto Slab','Source Serif 4','Mulish','Manrope','Plus Jakarta Sans']

// ── Styled Field with inline color+font picker ──────────────────
function RichField({ label, value, onChange, area=false, type='text', showStyle=false, styleKey='', styleData={}, onStyleChange=()=>{} }){
  const [open,setOpen]=useState(false)
  const s = styleData[styleKey] || {}
  return (
    <div style={{marginBottom:14}}>
      <div style={{display:'flex',alignItems:'center',gap:6,marginBottom:4}}>
        <span style={{fontSize:12,fontWeight:700,color:'#3a5266',flex:1}}>{label}</span>
        {showStyle && (
          <button onClick={()=>setOpen(o=>!o)} style={{fontSize:11,padding:'2px 8px',borderRadius:6,border:'1px solid #dde6ef',background:open?'#e8f0f8':'#f5f9fd',cursor:'pointer',color:'#3a5266',fontWeight:600}}>
            🎨 Style
          </button>
        )}
      </div>
      {open && showStyle && (
        <div style={{background:'#f0f5fb',borderRadius:10,padding:'10px 12px',marginBottom:8,border:'1px solid #dde6ef',display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:8}}>
          <p style={{gridColumn:'1/-1',fontSize:11,fontWeight:800,color:'#3a5266',margin:'0 0 2px'}}>You are styling: {label}</p>
          <label style={{fontSize:11,fontWeight:600,color:'#5a7080'}}>Color
            <div style={{display:'flex',alignItems:'center',gap:6,marginTop:3}}>
              <input type="color" value={s.color||'#071a2f'} onChange={e=>onStyleChange(styleKey,{...s,color:e.target.value})} style={{width:36,height:28,borderRadius:6,border:'1px solid #cdd8e3',cursor:'pointer',padding:2}}/>
              <span style={{fontFamily:'monospace',fontSize:10,color:'#7a90a2'}}>{s.color||'#071a2f'}</span>
            </div>
          </label>
          <label style={{fontSize:11,fontWeight:600,color:'#5a7080'}}>Font
            <select value={s.font||''} onChange={e=>onStyleChange(styleKey,{...s,font:e.target.value})} style={{display:'block',marginTop:3,fontSize:11,width:'100%',borderRadius:6,border:'1px solid #cdd8e3',padding:'3px 4px'}}>
              <option value="">Default</option>
              {FONTS.map(f=><option key={f} value={f} style={{fontFamily:f}}>{f}</option>)}
            </select>
          </label>
          <label style={{fontSize:11,fontWeight:600,color:'#5a7080'}}>Size
            <select value={s.size||''} onChange={e=>onStyleChange(styleKey,{...s,size:e.target.value})} style={{display:'block',marginTop:3,fontSize:11,width:'100%',borderRadius:6,border:'1px solid #cdd8e3',padding:'3px 4px'}}>
              <option value="">Default</option>
              {['12px','13px','14px','15px','16px','17px','18px','20px','22px','24px','28px','32px','36px','42px','48px','56px','64px','72px'].map(s=><option key={s}>{s}</option>)}
            </select>
          </label>
          {s.color && <div style={{gridColumn:'1/-1',padding:'6px 10px',borderRadius:8,background:s.color,color:'#fff',fontSize:12,textAlign:'center',fontFamily:s.font||'inherit',fontSize:s.size||'14px'}}>Preview text</div>}
        </div>
      )}
      {area
        ? <textarea value={value||''} onChange={e=>onChange(e.target.value)} style={{width:'100%',minHeight:72,borderRadius:8,border:'1px solid #dde6ef',padding:'8px 10px',fontSize:13,fontFamily:'inherit',resize:'vertical'}}/>
        : <input type={type} value={value??''} onChange={e=>onChange(type==='number'?Number(e.target.value):e.target.value)} style={{width:'100%',borderRadius:8,border:'1px solid #dde6ef',padding:'8px 10px',fontSize:13,fontFamily:'inherit'}}/>
      }
    </div>
  )
}

function Toggle({label,value,onChange}){
  return <label style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid #f0f4f8',gap:12}}>
    <span style={{fontSize:13,fontWeight:600,color:'#1e3a4f'}}>{label}</span>
    <button type="button" onClick={()=>onChange(!value)} style={{padding:'4px 14px',borderRadius:999,border:'none',cursor:'pointer',fontWeight:700,fontSize:12,background:value?'#2f7d32':'#cdd8e3',color:value?'white':'#5a7080',transition:'all .15s'}}>{value?'ON':'OFF'}</button>
  </label>
}

function Select({label,value,onChange,options}){
  return <label style={{display:'block',marginBottom:10}}>
    <span style={{fontSize:12,fontWeight:700,color:'#3a5266',display:'block',marginBottom:4}}>{label}</span>
    <select value={value} onChange={e=>onChange(e.target.value)} style={{width:'100%',borderRadius:8,border:'1px solid #dde6ef',padding:'8px 10px',fontSize:13}}>
      {options.map(o=><option key={o} value={o}>{o}</option>)}
    </select>
  </label>
}

function Card({title,hint,children,wide=false}){
  return <section style={{background:'white',borderRadius:18,border:'1px solid #e2eaf3',padding:'22px 24px',boxShadow:'0 4px 18px rgba(7,26,47,.06)',gridColumn:wide?'1/-1':'auto'}}>
    {title && <h2 style={{fontSize:16,fontWeight:800,color:'#071a2f',marginBottom:hint?4:14}}>{title}</h2>}
    {hint && <p style={{fontSize:12,color:'#7a90a2',marginBottom:14,lineHeight:1.5}}>{hint}</p>}
    {children}
  </section>
}


function HelpBox({title='What this area controls', children}){
  return <div style={{background:'#eef7ea',border:'1px solid #cfe7c7',borderRadius:14,padding:'12px 14px',marginBottom:16}}>
    <p style={{fontSize:12,fontWeight:900,color:'#2f7d32',margin:'0 0 6px',textTransform:'uppercase',letterSpacing:'.05em'}}>{title}</p>
    <div style={{fontSize:13,color:'#1e3a4f',lineHeight:1.55,fontWeight:600}}>{children}</div>
  </div>
}

function AdminGuide({tab}){
  const guide = {
    mockup:'Visual home-page editor. This shows the actual section names so you know whether you are changing the hero, pain section, pricing section, footer, or another part of the site.',
    hero:'Homepage top section. This controls the first headline, buttons, floating card, and hero/background images visitors see when they land on the site.',
    services:'Service and package wording. This controls the cards that explain mowing, gutters, windows, power washing, mulch, and other Yard Loop services.',
    'how it works':'Step-by-step explanation sections. This controls the process wording that tells customers how Yard Loop works.',
    pricing:'Pricing, points, estimator wording, and package explanations. Be careful here because customers use this to understand cost.',
    gallery:'Gallery photos, image URLs, captions, and testimonials. Use this when changing customer-facing pictures or before/after examples.',
    contact:'Contact page wording, form labels, success message, phone, email, and response-time language.',
    brand:'Global brand settings. This controls logo, main colors, site-wide fonts, navigation colors, footer colors, and Google Analytics.',
    leads:'Lead inbox. This is where quote requests and customer contact submissions show up.',
    pages:'Page visibility. Turn public pages on or off without deleting content.',
    advanced:'Advanced site settings. Only change these when you are sure because they can affect site behavior.'
  }
  return <HelpBox title={`You are editing: ${tab.toUpperCase()}`}>
    {guide[tab] || 'Use this tab to edit Yard Loop website content.'}<br/>
    <span style={{color:'#5a7080'}}>Tip: text boxes change wording. The 🎨 Style button changes that exact field’s color, font, and size. Image upload boxes change the specific picture named in the label.</span>
  </HelpBox>
}

function FieldNote({children}){
  return <p style={{fontSize:11,color:'#7a90a2',margin:'4px 0 8px',lineHeight:1.45,fontWeight:600}}>{children}</p>
}

function ImageUploadField({label, value, onChange, password, note, onUploaded}){
  const [uploading,setUploading]=useState(false)
  const [msg,setMsg]=useState('')
  async function handleFile(file){
    if(!file)return
    if(!password){ setMsg('❌ Enter admin password before uploading photos.'); return }
    setUploading(true); setMsg('Uploading image…')
    try{
      const form=new FormData(); form.append('file',file)
      const r=await fetch('/api/upload',{method:'POST',headers:{'x-admin-password':password},body:form})
      const d=await r.json().catch(()=>({}))
      if(!r.ok) throw new Error(d.error||'Upload failed')
      await onUploaded?.(d.url)
      onChange(d.url)
      setMsg('✅ Uploaded, placed in this field, and saved to Blob. Refresh the live page to see it.')
    }catch(e){ setMsg('❌ '+e.message) }
    setUploading(false)
  }
  return <div style={{marginBottom:16,padding:12,border:'1px solid #dde6ef',borderRadius:12,background:'#f8fbfd'}}>
    <span style={{fontSize:12,fontWeight:800,color:'#3a5266',display:'block',marginBottom:4}}>📷 {label}</span>
    {note&&<FieldNote>{note}</FieldNote>}
    {value&&<div style={{margin:'8px 0'}}><img src={value} alt={label} style={{maxWidth:'100%',maxHeight:160,borderRadius:10,border:'1px solid #e2eaf3',background:'#fff',objectFit:'contain'}}/></div>}
    <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap'}}>
      <label style={{background:'#2f7d32',color:'#fff',borderRadius:10,padding:'8px 12px',fontWeight:800,fontSize:12,cursor:'pointer',display:'inline-flex',alignItems:'center',gap:6}}>
        {uploading?'Uploading…':'Choose Photo'}
        <input type="file" accept="image/png,image/jpeg,image/jpg,image/webp,image/svg+xml" onChange={e=>{handleFile(e.target.files?.[0]); e.currentTarget.value=''}} style={{display:'none'}} />
      </label>
      <input value={value||''} onChange={e=>onChange(e.target.value)} placeholder="Or paste image URL here, then click Save to Blob" style={{flex:1,minWidth:220,borderRadius:8,border:'1px solid #dde6ef',padding:'8px 10px',fontSize:12}}/>
    </div>
    {msg&&<p style={{fontSize:12,fontWeight:700,color:msg.includes('❌')?'#dc2626':'#2f7d32',margin:'8px 0 0'}}>{msg}</p>}
  </div>
}

// ── Background Color Picker row ──────────────────────────────────
function BgPicker({label,value,onChange,preview}){
  return <div style={{display:'flex',alignItems:'center',gap:10,padding:'10px 0',borderBottom:'1px solid #f0f4f8'}}>
    <div style={{width:36,height:36,borderRadius:8,background:value||'#fff',border:'1px solid #dde6ef',flexShrink:0}}/>
    <span style={{flex:1,fontSize:13,fontWeight:600,color:'#1e3a4f'}}>{label}</span>
    <input type="color" value={value||'#ffffff'} onChange={e=>onChange(e.target.value)} style={{width:40,height:34,borderRadius:8,border:'1px solid #cdd8e3',cursor:'pointer',padding:2}}/>
    <span style={{fontFamily:'monospace',fontSize:11,color:'#7a90a2',minWidth:60}}>{value||'#ffffff'}</span>
  </div>
}

// ── Leads Tab ────────────────────────────────────────────────────
function LeadsTab({password}){
  const[leads,setLeads]=useState([])
  const[filter,setFilter]=useState('')
  const[loaded,setLoaded]=useState(false)
  function exportCSV(){
    if(!leads.length)return
    const headers=['Date','Name','Company','Phone','Email','Address','Tier','Monthly','Annual','Points','Services','Status','Notes','Source']
    const rows=leads.map(l=>[
      new Date(l.date||Date.now()).toLocaleDateString(),
      l.name||'',l.company||'',l.phone||'',l.email||'',
      l.address||l.serviceArea||'',l.tier||'',l.monthly||'',l.annual||'',
      l.points||'',l.selectedServices||'',l.status||'',
      (l.notes||'').replace(/,/g,';'),l.source||''
    ].map(v=>`"${v}"`).join(','))
    const csv=[headers.join(','),...rows].join('\n')
    const a=document.createElement('a')
    a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}))
    a.download=`yard-loop-leads-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }
  useEffect(()=>{
    if(password) fetch('/api/leads',{headers:{'x-admin-password':password}}).then(r=>r.json()).then(d=>{setLeads(d.leads||[]);setLoaded(true)})
  },[password])
  async function update(id,patch){
    await fetch('/api/lead-update',{method:'POST',headers:{'Content-Type':'application/json','x-admin-password':password},body:JSON.stringify({id,patch})})
    setLeads(l=>l.map(x=>x.id===id?{...x,...patch}:x))
  }
  async function del(id){
    if(!confirm('Delete lead?'))return
    await fetch('/api/leads',{method:'DELETE',headers:{'Content-Type':'application/json','x-admin-password':password},body:JSON.stringify({id})})
    setLeads(l=>l.filter(x=>x.id!==id))
  }
  const f=leads.filter(l=>!filter||JSON.stringify(l).toLowerCase().includes(filter.toLowerCase()))
  return <Card title="Leads / Quote Requests" hint="Estimator and contact form submissions. Update status and notes here." wide>
    <div style={{display:'flex',gap:8,marginBottom:16}}>
      <input placeholder="Search leads…" value={filter} onChange={e=>setFilter(e.target.value)} style={{flex:1,borderRadius:8,border:'1px solid #dde6ef',padding:'8px 12px',fontSize:13}}/>
      <button onClick={exportCSV} className="exportBtn">⬇ Export CSV</button>
    </div>
    {!loaded&&password&&<p style={{color:'#7a90a2',textAlign:'center',padding:24}}>Loading…</p>}
    {loaded&&f.length===0&&<p style={{color:'#7a90a2',textAlign:'center',padding:24}}>No leads yet.</p>}
    <div style={{display:'grid',gap:12}}>
    {f.map(l=><div key={l.id} style={{background:'#f8fbfd',border:'1px solid #e2eaf3',borderRadius:14,padding:'16px 18px'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:8}}>
        <div><b style={{fontSize:15,color:'#071a2f'}}>{l.name||'Unnamed'}</b><br/><small style={{color:'#7a90a2'}}>{new Date(l.date||Date.now()).toLocaleString()}</small></div>
        <button onClick={()=>del(l.id)} style={{background:'#fee2e2',color:'#dc2626',border:'none',borderRadius:8,padding:'4px 10px',cursor:'pointer',fontSize:12,fontWeight:700}}>Delete</button>
      </div>
      <p style={{fontSize:13,color:'#1e3a4f',marginBottom:6}}><a href={`tel:${l.phone}`} style={{color:'#2f7d32',fontWeight:700}}>{l.phone}</a>{l.email&&<> · <a href={`mailto:${l.email}`} style={{color:'#2f7d32'}}>{l.email}</a></>}</p>
      {l.address&&<p style={{fontSize:13,color:'#1e3a4f',marginBottom:6}}>{l.address}</p>}
      <p style={{fontSize:12,color:'#3a5266',marginBottom:10}}><b>Tier:</b> {l.tier||'—'} · <b>Points:</b> {l.points||0} · <b>Monthly:</b> {l.monthly?money(l.monthly):'—'} · <b>Annual:</b> {l.annual?money(l.annual):'—'}</p>
      <select value={l.status||'New'} onChange={e=>update(l.id,{status:e.target.value})} style={{borderRadius:8,border:'1px solid #dde6ef',padding:'6px 10px',fontSize:13,marginBottom:8,marginRight:8}}>
        {(defaultContent.leadStatuses||[]).map(s=><option key={s}>{s}</option>)}
      </select>
      <textarea placeholder="Internal notes…" value={l.notes||''} onChange={e=>update(l.id,{notes:e.target.value})} style={{width:'100%',borderRadius:8,border:'1px solid #dde6ef',padding:'7px 10px',fontSize:13,minHeight:52,resize:'vertical'}}/>
    </div>)}
    </div>
  </Card>
}

// ── Main Admin ───────────────────────────────────────────────────
export default function Admin(){
  const[content,setContent]=useState(defaultContent)
  const[password,setPassword]=useState('')
  const[tab,setTab]=useState('mockup')
  const[status,setStatus]=useState('')

  useEffect(()=>{
    fetch('/api/content?ts='+Date.now(),{cache:'no-store'}).then(r=>r.json()).then(d=>setContent(c=>({...defaultContent,...d})))
  },[])

  function set(path,val){
    setContent(p=>{
      const n=clone(p)
      let o=n
      path.slice(0,-1).forEach(k=>{o[k]??={};o=o[k]})
      o[path.at(-1)]=val
      return n
    })
  }

  // For per-field text styles stored in content.textStyles
  function setStyle(key,val){
    setContent(p=>{const n=clone(p);n.textStyles=n.textStyles||{};n.textStyles[key]=val;return n})
  }
  const ts = content.textStyles || {}

  // Background colors stored in content.bgColors
  function setBg(key,val){
    setContent(p=>{const n=clone(p);n.bgColors=n.bgColors||{};n.bgColors[key]=val;return n})
  }
  const bg = content.bgColors || {}

  async function save(){
    setStatus('Saving…')
    const r=await fetch('/api/content?ts='+Date.now(),{method:'POST',cache:'no-store',headers:{'Content-Type':'application/json','x-admin-password':password,'Cache-Control':'no-store'},body:JSON.stringify(content)})
    const d=await r.json().catch(()=>({}))
    setStatus(r.ok?'✅ Saved to Blob!':'❌ '+(d.error||'Save failed'))
    setTimeout(()=>setStatus(''),4000)
  }

  function backup(){
    const a=document.createElement('a')
    a.href=URL.createObjectURL(new Blob([JSON.stringify(content,null,2)],{type:'application/json'}))
    a.download='yard-loop-backup.json'
    a.click()
  }

  const TABS = ['mockup','hero','services','how it works','pricing','gallery','contact','brand','leads','pages','advanced']

  // Helper to make a rich field with style
  function RF(label, path, opts={}){
    const key = path.join('.')
    const val = path.reduce((o,k)=>o?.[k], content)
    return <RichField
      key={key}
      label={label}
      value={val}
      onChange={v=>set(path,v)}
      area={opts.area}
      type={opts.type}
      showStyle={opts.style!==false}
      styleKey={key}
      styleData={ts}
      onStyleChange={setStyle}
    />
  }


  function IMG(label, path, note=''){
    const key = path.join('.')
    const val = path.reduce((o,k)=>o?.[k], content)
    return <ImageUploadField key={key} label={label} value={val} onChange={v=>set(path,v)} password={password} note={note} onUploaded={async (url)=>{
      const n=clone(content)
      let o=n
      path.slice(0,-1).forEach(k=>{o[k]??={};o=o[k]})
      o[path.at(-1)]=url
      setContent(n)
      if(password){
        const sr=await fetch('/api/content?ts='+Date.now(),{method:'POST',cache:'no-store',headers:{'Content-Type':'application/json','x-admin-password':password,'Cache-Control':'no-store'},body:JSON.stringify(n)}); if(!sr.ok){const sd=await sr.json().catch(()=>({})); throw new Error(sd.error||'Image uploaded, but CMS save failed. Click Save to Blob.')} 
      }
    }}/>
  }

  return (
    <main style={{minHeight:'100vh',background:'linear-gradient(180deg,#f5faf2,#ffffff)',fontFamily:'DM Sans,sans-serif'}}>

      {/* Header */}
      <header style={{background:'linear-gradient(135deg,#061524,#0b2848 54%,#1d6228)',padding:'20px 5vw',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
        <div style={{display:'flex',alignItems:'center',gap:14}}>
          <img src={content.brand?.logoImage||'/yard-loop-logo.png'} alt="Yard Loop" style={{height:52,filter:'drop-shadow(0 4px 8px rgba(0,0,0,.3))'}}/>
          <div><h1 style={{color:'white',fontSize:20,fontWeight:800,margin:0}}>Yard Loop Admin</h1><p style={{color:'#9fd45a',fontSize:13,margin:0,fontWeight:600}}>Powered by Vercel Blob</p></div>
        </div>
        <a href="/" target="_blank" style={{background:'rgba(255,255,255,.15)',color:'white',padding:'8px 18px',borderRadius:10,fontWeight:700,fontSize:13,border:'1px solid rgba(255,255,255,.25)'}}>View Site ↗</a>
      </header>

      {/* Toolbar */}
      <div style={{background:'white',borderBottom:'1px solid #e2eaf3',padding:'12px 5vw',display:'flex',alignItems:'center',gap:10,flexWrap:'wrap',position:'sticky',top:0,zIndex:50,boxShadow:'0 2px 12px rgba(7,26,47,.06)'}}>
        <input type="password" placeholder="Admin password" value={password} onChange={e=>setPassword(e.target.value)} style={{borderRadius:8,border:'1px solid #dde6ef',padding:'8px 12px',fontSize:13,width:180}}/>
        <button onClick={save} style={{background:'linear-gradient(135deg,#2f7d32,#9fd45a)',color:'white',border:'none',borderRadius:10,padding:'9px 20px',fontWeight:800,fontSize:13,cursor:'pointer'}}>💾 Save to Blob</button>
        <button onClick={backup} style={{background:'#f0f5fb',color:'#3a5266',border:'1px solid #dde6ef',borderRadius:10,padding:'9px 16px',fontWeight:700,fontSize:13,cursor:'pointer'}}>⬇ Download Backup</button>
        {status&&<span style={{fontSize:13,fontWeight:700,color:status.includes('❌')?'#dc2626':'#2f7d32',marginLeft:4}}>{status}</span>}
      </div>

      {/* Tabs */}
      <div style={{padding:'0 5vw',background:'white',borderBottom:'1px solid #e2eaf3',display:'flex',gap:4,overflowX:'auto'}}>
        {TABS.map(t=><button key={t} onClick={()=>setTab(t)} style={{padding:'12px 16px',border:'none',background:'none',cursor:'pointer',fontWeight:tab===t?800:600,fontSize:13,color:tab===t?'#2f7d32':'#5a7080',borderBottom:tab===t?'2px solid #2f7d32':'2px solid transparent',whiteSpace:'nowrap',textTransform:'capitalize'}}>{t}</button>)}
      </div>

      <div style={{padding:'24px 5vw',display:'grid',gap:20,gridTemplateColumns:'repeat(auto-fill,minmax(400px,1fr))'}}>
        <div style={{gridColumn:'1/-1'}}><AdminGuide tab={tab}/></div>

      {/* ── MOCKUP TAB ─────────────────────────────────────────── */}
      {tab==='mockup'&&<>
        <Card title="🖼 Page Mockup — Home" hint="Edit text and homepage pictures inline. Click 🎨 Style next to any field to change its color, font, and size. Photo boxes below place pictures on the actual home page." wide>
          {/* Hero mockup */}
          <div style={{background:bg.hero||'#f3fdf0',borderRadius:14,padding:20,marginBottom:16,border:'1px solid #e2eaf3'}}>
            <p style={{fontSize:11,fontWeight:800,textTransform:'uppercase',letterSpacing:'.1em',color:'#9fd45a',marginBottom:8}}>HERO SECTION</p>
            {RF('Eyebrow text',['hero','eyebrow'],{style:true})}
            {RF('Main headline',['hero','headline'],{area:true,style:true})}
            {RF('Subheadline / description',['hero','subheadline'],{area:true,style:true})}
            {RF('Primary button text',['hero','primaryCta'],{style:true})}
            {RF('Secondary button text',['hero','secondaryCta'],{style:true})}
            {RF('Floating card title',['hero','overlayTitle'],{style:true})}
            {IMG('Homepage hero main picture',['hero','image'],'This changes the large picture/card on the Home screen hero section.')}
            {IMG('Homepage hero background picture',['hero','backgroundImage'],'This changes the full hero background image behind the top Home screen section.')}
          </div>
          {/* Pain section */}
          <div style={{background:bg.pain||'#f8fbf6',borderRadius:14,padding:20,marginBottom:16,border:'1px solid #e2eaf3'}}>
            <p style={{fontSize:11,fontWeight:800,textTransform:'uppercase',letterSpacing:'.1em',color:'#3a5266',marginBottom:8}}>PAIN SECTION</p>
            {RF('Pain section headline',['painHeadline'],{style:true})}
          </div>
          {/* Split section */}
          <div style={{background:bg.split||'#ffffff',borderRadius:14,padding:20,marginBottom:16,border:'1px solid #e2eaf3'}}>
            <p style={{fontSize:11,fontWeight:800,textTransform:'uppercase',letterSpacing:'.1em',color:'#3a5266',marginBottom:8}}>THE YARD LOOP MODEL SECTION</p>
            {RF('Section headline',['splitHeadline'],{area:true,style:true})}
            {RF('Section body text',['splitText'],{area:true,style:true})}
            <p style={{fontSize:11,fontWeight:800,textTransform:'uppercase',letterSpacing:'.1em',color:'#3a5266',margin:'14px 0 8px'}}>MODEL CARD PICTURES ON HOME SCREEN</p>
            {content.promise?.map((p,i)=><div key={i} style={{background:'rgba(255,255,255,.72)',borderRadius:10,padding:12,marginBottom:8}}>
              <p style={{fontSize:11,fontWeight:700,color:'#3a5266',marginBottom:6}}>Model card {i+1}: {p.title}</p>
              {IMG(`Home model card ${i+1} picture`,['promise',i,'image'],'This changes the small picture beside this Yard Loop model card on the Home screen.')}
            </div>)}
          </div>
          {/* Home service card pictures */}
          <div style={{background:bg.services||'#ffffff',borderRadius:14,padding:20,marginBottom:16,border:'1px solid #e2eaf3'}}>
            <p style={{fontSize:11,fontWeight:800,textTransform:'uppercase',letterSpacing:'.1em',color:'#3a5266',marginBottom:8}}>HOME SERVICE CARD PICTURES</p>
            <p style={{fontSize:12,color:'#5a7080',fontWeight:600,margin:'0 0 12px'}}>These change the service pictures on the actual Home screen under “What can be included.”</p>
            {content.included?.map((svc,i)=><div key={i} style={{background:'rgba(255,255,255,.72)',borderRadius:10,padding:12,marginBottom:8}}>
              <p style={{fontSize:11,fontWeight:700,color:'#3a5266',marginBottom:6}}>Service card {i+1}: {svc.title}</p>
              {IMG(`Home service card ${i+1} picture`,['included',i,'image'],'This changes this specific service card picture on the Home screen.')}
            </div>)}
          </div>

          {/* Point-based pricing */}
          <div style={{background:bg.pointPricing||'#f2f7f1',borderRadius:14,padding:20,marginBottom:16,border:'1px solid #e2eaf3'}}>
            <p style={{fontSize:11,fontWeight:800,textTransform:'uppercase',letterSpacing:'.1em',color:'#3a5266',marginBottom:8}}>POINT-BASED PRICING SECTION</p>
            {RF('Eyebrow',['pointPricing','eyebrow'],{style:true})}
            {RF('Headline',['pointPricing','headline'],{style:true})}
            {content.pointPricing?.steps?.map((s,i)=><div key={i} style={{background:'rgba(255,255,255,.7)',borderRadius:10,padding:12,marginBottom:8}}>
              <p style={{fontSize:11,fontWeight:700,color:'#3a5266',marginBottom:6}}>Step {i+1}</p>
              {RF(`Step ${i+1} number`,['pointPricing','steps',i,'num'],{style:true})}
              {RF(`Step ${i+1} title`,['pointPricing','steps',i,'title'],{style:true})}
              {RF(`Step ${i+1} text`,['pointPricing','steps',i,'text'],{area:true,style:true})}
            </div>)}
          </div>

          {/* Steps band */}
          <div style={{background:bg.band||'#071a2f',borderRadius:14,padding:20,marginBottom:16,border:'1px solid #e2eaf3'}}>
            <p style={{fontSize:11,fontWeight:800,textTransform:'uppercase',letterSpacing:'.1em',color:'#9fd45a',marginBottom:8}}>HOW IT WORKS BAND (dark background)</p>
            {content.how?.map((h,i)=><div key={i} style={{background:'rgba(255,255,255,.06)',borderRadius:10,padding:12,marginBottom:8}}>
              <p style={{fontSize:11,fontWeight:700,color:'#9fd45a',marginBottom:6}}>Step {i+1}</p>
              {RF(`Step ${i+1} title`,['how',i,'title'],{style:true})}
              {RF(`Step ${i+1} text`,['how',i,'text'],{area:true,style:true})}
            </div>)}
          </div>
          {/* Final CTA */}
          <div style={{background:bg.finalCta||'#0b2848',borderRadius:14,padding:20,border:'1px solid #e2eaf3'}}>
            <p style={{fontSize:11,fontWeight:800,textTransform:'uppercase',letterSpacing:'.1em',color:'#9fd45a',marginBottom:8}}>FINAL CTA (dark section)</p>
            {RF('CTA headline',['finalCta','headline'],{style:true})}
            {RF('CTA body text',['finalCta','text'],{area:true,style:true})}
            {RF('CTA button text',['finalCta','button'],{style:true})}
          </div>
        </Card>

        {/* Background color controls */}
        <Card title="🎨 Section Background Colors" hint="Change the background color of every section across the whole site." wide>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0 24px'}}>
            <div>
              <p style={{fontSize:12,fontWeight:800,color:'#3a5266',marginBottom:8,textTransform:'uppercase',letterSpacing:'.06em'}}>Home Page</p>
              <BgPicker label="Hero section" value={bg.hero||'#f3fdf0'} onChange={v=>setBg('hero',v)}/>
              <BgPicker label="Pain section" value={bg.pain||'#f8fbf6'} onChange={v=>setBg('pain',v)}/>
              <BgPicker label="Model / split section" value={bg.split||'#ffffff'} onChange={v=>setBg('split',v)}/>
              <BgPicker label="Point-based pricing section" value={bg.pointPricing||'#f2f7f1'} onChange={v=>setBg('pointPricing',v)}/>
              <BgPicker label="How it works band" value={bg.band||'#071a2f'} onChange={v=>setBg('band',v)}/>
              <BgPicker label="Services cards section" value={bg.services||'#ffffff'} onChange={v=>setBg('services',v)}/>
              <BgPicker label="Pricing section" value={bg.pricing||'#f8fbf6'} onChange={v=>setBg('pricing',v)}/>
              <BgPicker label="Testimonials section" value={bg.testimonials||'#ffffff'} onChange={v=>setBg('testimonials',v)}/>
              <BgPicker label="Final CTA section" value={bg.finalCta||'#0b2848'} onChange={v=>setBg('finalCta',v)}/>
            </div>
            <div>
              <p style={{fontSize:12,fontWeight:800,color:'#3a5266',marginBottom:8,textTransform:'uppercase',letterSpacing:'.06em'}}>Global</p>
              <BgPicker label="Navigation bar" value={bg.nav||'rgba(255,255,255,.97)'} onChange={v=>setBg('nav',v)}/>
              <BgPicker label="Footer" value={bg.footer||'#04101d'} onChange={v=>setBg('footer',v)}/>
              <BgPicker label="Page hero (inner pages)" value={bg.pageHero||'#061524'} onChange={v=>setBg('pageHero',v)}/>
              <BgPicker label="Cards / white cards" value={bg.cards||'#ffffff'} onChange={v=>setBg('cards',v)}/>
              <BgPicker label="Alert bar" value={bg.alert||'#2f7d32'} onChange={v=>setBg('alert',v)}/>
              <BgPicker label="Contact form background" value={bg.contactForm||'#ffffff'} onChange={v=>setBg('contactForm',v)}/>
              <BgPicker label="Gallery section" value={bg.gallery||'#f8fbf6'} onChange={v=>setBg('gallery',v)}/>
              <BgPicker label="Estimator section" value={bg.estimator||'#f8fbf6'} onChange={v=>setBg('estimator',v)}/>
            </div>
          </div>
          <div style={{marginTop:18,padding:'14px 16px',background:'#f0f5fb',borderRadius:12,border:'1px solid #dde6ef'}}>
            <p style={{fontSize:12,color:'#5a7080',fontWeight:600,margin:0}}>💡 After saving, these colors apply site-wide automatically. Hit <b>Save to Blob</b> above to push live.</p>
          </div>
        </Card>

        {/* Page mockup — Services */}
        <Card title="🖼 Page Mockup — Services" wide>
          <div style={{background:bg.pageHero||'#061524',borderRadius:14,padding:20,marginBottom:16}}>
            <p style={{fontSize:11,fontWeight:800,textTransform:'uppercase',letterSpacing:'.1em',color:'#9fd45a',marginBottom:8}}>PAGE HERO (dark)</p>
            {RF('Services eyebrow',['pageHeroes','services','eyebrow'],{style:true})}
            {RF('Services headline',['pageHeroes','services','headline'],{style:true})}
            {RF('Services subtext',['pageHeroes','services','subtext'],{style:true})}
          </div>
          <div style={{background:bg.services||'#fff',borderRadius:14,padding:20,border:'1px solid #e2eaf3'}}>
            <p style={{fontSize:11,fontWeight:800,textTransform:'uppercase',letterSpacing:'.1em',color:'#3a5266',marginBottom:8}}>SERVICE CARDS</p>
            {content.included?.slice(0,3).map((s,i)=><div key={i} style={{background:'#f8fbfd',borderRadius:10,padding:12,marginBottom:8}}>
              <p style={{fontSize:11,fontWeight:700,color:'#3a5266',marginBottom:6}}>Card {i+1}</p>
              {RF(`Card ${i+1} title`,['included',i,'title'],{style:true})}
              {RF(`Card ${i+1} text`,['included',i,'text'],{area:true,style:true})}
            </div>)}
            <p style={{fontSize:12,color:'#7a90a2',fontStyle:'italic'}}>Edit all {content.included?.length} cards in the Services tab →</p>
          </div>
        </Card>

        {/* Page mockup — Contact */}
        <Card title="🖼 Page Mockup — Contact" wide>
          <div style={{background:bg.pageHero||'#061524',borderRadius:14,padding:20,marginBottom:16}}>
            <p style={{fontSize:11,fontWeight:800,textTransform:'uppercase',letterSpacing:'.1em',color:'#9fd45a',marginBottom:8}}>PAGE HERO (dark)</p>
            {RF('Contact eyebrow',['contactPage','heroEyebrow'],{style:true})}
            {RF('Contact headline',['contactPage','heroHeadline'],{style:true})}
            {RF('Contact subtext',['contactPage','heroSubtext'],{area:true,style:true})}
          </div>
          <div style={{background:bg.contactForm||'#fff',borderRadius:14,padding:20,border:'1px solid #e2eaf3'}}>
            <p style={{fontSize:11,fontWeight:800,textTransform:'uppercase',letterSpacing:'.1em',color:'#3a5266',marginBottom:8}}>FORM</p>
            {RF('Form headline',['contactPage','formHeadline'],{style:true})}
            {RF('Form subtext',['contactPage','formSubtext'],{area:true,style:true})}
            {RF('Submit button text',['contactPage','formButtonText'],{style:true})}
            {RF('Success headline',['contactPage','formSuccessHeadline'],{style:true})}
            {RF('Success text',['contactPage','formSuccessText'],{area:true,style:true})}
          </div>
        </Card>

        {/* Page mockup — Footer */}
        <Card title="🖼 Page Mockup — Footer" wide>
          <div style={{background:bg.footer||'#04101d',borderRadius:14,padding:20}}>
            <p style={{fontSize:11,fontWeight:800,textTransform:'uppercase',letterSpacing:'.1em',color:'#9fd45a',marginBottom:8}}>FOOTER (dark)</p>
            {RF('Footer tagline',['brand','tagline'],{style:true})}
            {RF('Phone number',['brand','phone'],{style:true})}
            {RF('Email address',['brand','email'],{style:true})}
          </div>
        </Card>
      </>}

      {/* ── HERO TAB ──────────────────────────────────────────────*/}
      {tab==='hero'&&<>
        <Card title="Hero Section" hint="The first thing visitors see on the homepage." wide>
          {RF('Eyebrow',['hero','eyebrow'],{style:true})}
          {RF('Headline',['hero','headline'],{area:true,style:true})}
          {RF('Subheadline',['hero','subheadline'],{area:true,style:true})}
          {RF('Primary button',['hero','primaryCta'],{style:true})}
          {RF('Secondary button',['hero','secondaryCta'],{style:true})}
          {IMG('Hero main image',['hero','image'],'Changes the main picture in the top homepage hero area. Use JPG/WEBP for photos or PNG for graphics.')}
          {IMG('Hero background image',['hero','backgroundImage'],'Changes the background image behind the top hero section if that design is enabled.')}
        </Card>
        <Card title="Float Card" hint="The overlay card on the hero image.">
          {RF('Float card title',['hero','overlayTitle'],{style:true})}
          {content.hero?.overlayItems?.map((x,i)=>RF(`Item ${i+1}`,['hero','overlayItems',i],{style:true}))}
        </Card>
        <Card title="Trust Badges" hint="The checkmark badges below the hero buttons.">
          {content.trust?.map((t,i)=>RF(`Badge ${i+1}`,['trust',i],{style:true}))}
        </Card>
        <Card title="Alert Bar">
          <Toggle label="Show alert bar" value={!!content.alertEnabled} onChange={v=>set(['alertEnabled'],v)}/>
          {RF('Alert bar text',['alert'],{style:true})}
        </Card>
      </>}

      {/* ── SERVICES TAB ──────────────────────────────────────────*/}
      {tab==='services'&&<>
        <Card title="Pain Section" wide>
          {RF('Pain headline',['painHeadline'],{style:true})}
          {content.problem?.map((p,i)=>RF(`Problem ${i+1}`,['problem',i],{style:true}))}
        </Card>
        <Card title="Model Section" wide>
          {RF('Section headline',['splitHeadline'],{area:true,style:true})}
          {RF('Section body text',['splitText'],{area:true,style:true})}
        </Card>
        <Card title="Service Cards" wide>
          {content.included?.map((s,i)=><div key={i} style={{background:'#f8fbfd',borderRadius:12,padding:14,marginBottom:12}}>
            <p style={{fontSize:12,fontWeight:700,color:'#3a5266',marginBottom:8}}>Card {i+1}</p>
            {RF(`Icon`,['included',i,'icon'],{style:false})}
            {RF(`Title`,['included',i,'title'],{style:true})}
            {RF(`Text`,['included',i,'text'],{area:true,style:true})}
            {IMG(`Service card ${i+1} image`,['included',i,'image'],'Changes the photo/icon for this service card.')}
          </div>)}
        </Card>
        <Card title="Promise Cards" wide>
          {content.promise?.map((p,i)=><div key={i} style={{background:'#f8fbfd',borderRadius:12,padding:14,marginBottom:12}}>
            <p style={{fontSize:12,fontWeight:700,color:'#3a5266',marginBottom:8}}>Card {i+1}</p>
            {RF(`Title`,['promise',i,'title'],{style:true})}
            {RF(`Text`,['promise',i,'text'],{area:true,style:true})}
          </div>)}
        </Card>
      </>}

      {/* ── HOW IT WORKS TAB ──────────────────────────────────────*/}
      {tab==='how it works'&&<>
        <Card title="How It Works Steps" wide>
          {content.how?.map((h,i)=><div key={i} style={{background:'#f8fbfd',borderRadius:12,padding:14,marginBottom:12}}>
            <p style={{fontSize:12,fontWeight:700,color:'#3a5266',marginBottom:8}}>Step {i+1}</p>
            {RF('Step number',['how',i,'step'],{style:true})}
            {RF('Title',['how',i,'title'],{style:true})}
            {RF('Text',['how',i,'text'],{area:true,style:true})}
          </div>)}
        </Card>
        <Card title="FAQ" wide>
          {content.faq?.map((f,i)=><div key={i} style={{background:'#f8fbfd',borderRadius:12,padding:14,marginBottom:12}}>
            <p style={{fontSize:12,fontWeight:700,color:'#3a5266',marginBottom:8}}>FAQ {i+1}</p>
            {RF('Question',['faq',i,'q'],{style:true})}
            {RF('Answer',['faq',i,'a'],{area:true,style:true})}
          </div>)}
        </Card>
      </>}

      {/* ── PRICING TAB ───────────────────────────────────────────*/}
      {tab==='pricing'&&<>
        <Card title="Pricing Section Text" wide>
          {RF('Headline',['pricing','headline'],{style:true})}
          {RF('Body text',['pricing','text'],{area:true,style:true})}
          {RF('Disclaimer note',['pricing','note'],{area:true,style:true})}
          {RF('Range label',['pricing','rangeLabel'],{style:true})}
          {RF('Range value',['pricing','rangeValue'],{style:true})}
          {RF('Range note',['pricing','rangeNote'],{style:true})}
        </Card>
        <Card title="Estimator Text" wide>
          {RF('Headline',['estimator','headline'],{style:true})}
          {RF('Subheadline',['estimator','subheadline'],{area:true,style:true})}
          {RF('Disclaimer',['estimator','disclaimer'],{area:true,style:true})}
        </Card>
        <Card title="Pricing Tiers" wide>
          {content.estimator?.tiers?.map((t,i)=><div key={i} style={{background:'#f8fbfd',borderRadius:12,padding:14,marginBottom:12}}>
            <Toggle label="Enabled" value={!!t.enabled} onChange={v=>set(['estimator','tiers',i,'enabled'],v)}/>
            {RF('Tier name',['estimator','tiers',i,'name'],{style:true})}
            {RF('Yard range',['estimator','tiers',i,'yardRange'],{style:true})}
            {RF('Base monthly price',['estimator','tiers',i,'basePrice'],{type:'number',style:false})}
            {RF('Price per point',['estimator','tiers',i,'pricePerPoint'],{type:'number',style:false})}
          </div>)}
        </Card>
        <Card title="Final CTA Section" wide>
          {RF('CTA headline',['finalCta','headline'],{style:true})}
          {RF('CTA text',['finalCta','text'],{area:true,style:true})}
          {RF('CTA button',['finalCta','button'],{style:true})}
        </Card>
      </>}

      {/* ── GALLERY TAB ───────────────────────────────────────────*/}
      {tab==='gallery'&&<>
        <Card title="Gallery Page Hero" wide>
          {RF('Eyebrow',['pageHeroes','gallery','eyebrow'],{style:true})}
          {RF('Headline',['pageHeroes','gallery','headline'],{style:true})}
          {RF('Subtext',['pageHeroes','gallery','subtext'],{style:true})}
        </Card>
        <Card title="Gallery Photos" wide>
          {content.gallery?.map((g,i)=><div key={i} style={{background:'#f8fbfd',borderRadius:12,padding:14,marginBottom:12}}>
            <p style={{fontSize:12,fontWeight:700,color:'#3a5266',marginBottom:8}}>Photo {i+1}</p>
            {RF('Label',['gallery',i,'label'],{style:true})}
            {IMG(`Gallery photo ${i+1}`,['gallery',i,'image'],'Changes this gallery picture. Caption and label are edited below/above it.')}
            {RF('Caption',['gallery',i,'caption'],{area:true,style:true})}
          </div>)}
        </Card>
        <Card title="Testimonials" wide>
          {content.testimonials?.map((t,i)=><div key={i} style={{background:'#f8fbfd',borderRadius:12,padding:14,marginBottom:12}}>
            <Toggle label="Show this testimonial" value={!!t.enabled} onChange={v=>set(['testimonials',i,'enabled'],v)}/>
            {RF('Name',['testimonials',i,'name'],{style:true})}
            {RF('Location',['testimonials',i,'location'],{style:true})}
            {RF('Quote',['testimonials',i,'quote'],{area:true,style:true})}
          </div>)}
          <button onClick={()=>set(['testimonials'],[...(content.testimonials||[]),{name:'',location:'',quote:'',enabled:true}])} style={{background:'#e8f5e0',color:'#2f7d32',border:'1px solid #b8ddb0',borderRadius:10,padding:'8px 16px',fontWeight:700,fontSize:13,cursor:'pointer',marginTop:8}}>+ Add Testimonial</button>
        </Card>
      </>}

      {/* ── CONTACT TAB ───────────────────────────────────────────*/}
      {tab==='contact'&&<>
        <Card title="Contact Page" wide>
          {RF('Eyebrow',['contactPage','heroEyebrow'],{style:true})}
          {RF('Headline',['contactPage','heroHeadline'],{style:true})}
          {RF('Subtext',['contactPage','heroSubtext'],{area:true,style:true})}
          {RF('Form headline',['contactPage','formHeadline'],{style:true})}
          {RF('Form subtext',['contactPage','formSubtext'],{area:true,style:true})}
          {RF('Submit button',['contactPage','formButtonText'],{style:true})}
          {RF('Success headline',['contactPage','formSuccessHeadline'],{style:true})}
          {RF('Success text',['contactPage','formSuccessText'],{area:true,style:true})}
          {RF('Response time note',['contactPage','responseTimeText'],{style:true})}
          {RF('Form note',['contactPage','formNote'],{style:true})}
        </Card>
        <Card title="Business Info">
          {RF('Business name',['brand','name'],{style:false})}
          {RF('Phone',['brand','phone'],{style:false})}
          {RF('Email',['brand','email'],{style:false})}
          {RF('Owner Email',['brand','ownerEmail'],{style:false})}
          {RF('Support Email',['brand','supportEmail'],{style:false})}
          {RF('Domain',['brand','domain'],{style:false})}
          {RF('Google Review URL',['googleReviewUrl'],{style:false})}
        </Card>
      </>}

      {/* ── BRAND TAB ─────────────────────────────────────────────*/}
      {tab==='brand'&&<>
        <Card title="Business Info">
          {RF('Business name',['brand','name'],{style:false})}
          {RF('Tagline',['brand','tagline'],{style:true})}
          {IMG('Main Yard Loop logo',['brand','logoImage'],'Changes the logo used in the header and admin preview. PNG with transparent background is best.')}
        </Card>
        <Card title="Footer Contact + Social Links" hint="These fields control what shows in the website footer. Leave any link blank or turned off until the account is created." wide>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:14}}>
            {RF('Primary business email shown in footer',['brand','email'],{style:false})}
            {RF('Owner email shown in footer',['brand','ownerEmail'],{style:false})}
            {RF('Support / second email shown in footer',['brand','supportEmail'],{style:false})}
            {RF('Phone number shown in footer',['brand','phone'],{style:false})}
            {RF('Domain shown in footer',['brand','domain'],{style:false})}
            {RF('Service area text shown in footer',['brand','serviceArea'],{style:false})}
          </div>
          {RF('Optional address / office location text',['brand','address'],{style:false})}
          <div style={{marginTop:12,padding:'14px 16px',borderRadius:12,background:'#f7fbf5',border:'1px solid #dcebd5'}}>
            <p style={{fontSize:12,fontWeight:900,color:'#2f7d32',margin:'0 0 10px',textTransform:'uppercase',letterSpacing:'.05em'}}>Social media links</p>
            {(content.socialLinks||[]).map((item,i)=>(
              <div key={item.label || i} style={{display:'grid',gridTemplateColumns:'110px 1fr auto',gap:10,alignItems:'center',padding:'8px 0',borderBottom:'1px solid #e4efdc'}}>
                <b style={{fontSize:13,color:'#1e3a4f'}}>{item.label}</b>
                <input placeholder={`Paste ${item.label} URL when ready`} value={item.url||''} onChange={e=>set(['socialLinks',i,'url'],e.target.value)} style={{width:'100%',borderRadius:8,border:'1px solid #dde6ef',padding:'8px 10px',fontSize:13}}/>
                <Toggle label="Show" value={!!item.enabled} onChange={v=>set(['socialLinks',i,'enabled'],v)}/>
              </div>
            ))}
            <p style={{fontSize:12,color:'#7a90a2',margin:'10px 0 0'}}>Suggested for Yard Loop: Facebook, Instagram, TikTok, YouTube, X/Twitter, LinkedIn, and Nextdoor. They stay hidden until you turn Show ON and paste a link.</p>
          </div>
        </Card>
        <Card title="Full Color Palette" hint="Every color on the site. Changes apply everywhere instantly after saving." wide>
          {[
            {group:'Core Brand Colors'},
            {key:'primary',label:'Primary / Navy',def:'#071a2f'},
            {key:'green',label:'Green',def:'#2f7d32'},
            {key:'lime',label:'Lime / Highlight',def:'#9fd45a'},
            {key:'gold',label:'Gold / Stars',def:'#d9a441'},
            {key:'cream',label:'Cream',def:'#f6f2e8'},
            {key:'ink',label:'Ink / Base text',def:'#0d1f30'},
            {group:'Text Colors'},
            {key:'textHeading',label:'Heading text',def:'#071a2f'},
            {key:'textBody',label:'Body / paragraph text',def:'#1e3a4f'},
            {key:'textMuted',label:'Muted / caption text',def:'#3a5266'},
            {key:'textOnDark',label:'Text on dark sections',def:'#ffffff'},
            {key:'textSubOnDark',label:'Subtext on dark sections',def:'#d4eaf8'},
            {group:'Buttons'},
            {key:'btnBg',label:'Button background',def:'#2f7d32'},
            {key:'btnText',label:'Button text',def:'#ffffff'},
            {key:'btnHover',label:'Button hover',def:'#1e5c20'},
            {group:'Navigation'},
            {key:'navBg',label:'Nav background',def:'rgba(255,255,255,.97)'},
            {key:'navText',label:'Nav link text',def:'#0c223f'},
            {key:'navLinkHover',label:'Nav link hover',def:'#2f7d32'},
            {group:'Alert Bar'},
            {key:'alertBg',label:'Alert background',def:'#2f7d32'},
            {key:'alertText',label:'Alert text',def:'#ffffff'},
            {group:'Footer'},
            {key:'footerBg',label:'Footer background',def:'#04101d'},
            {key:'footerText',label:'Footer heading text',def:'#ffffff'},
            {key:'footerLink',label:'Footer links',def:'#c8dfe8'},
            {group:'Sections & Cards'},
            {key:'heroBg',label:'Hero background',def:'#f3fdf0'},
            {key:'bandBg',label:'Dark band background',def:'#071a2f'},
            {key:'cardBg',label:'Card background',def:'#ffffff'},
            {key:'pageBg',label:'Page hero background',def:'#061524'},
            {group:'Accents'},
            {key:'accent',label:'Eyebrow / accent color',def:'#2f7d32'},
            {key:'highlight',label:'Highlight / lime accent',def:'#9fd45a'},
            {key:'border',label:'Card border color',def:'rgba(7,26,47,.09)'},
          ].map((item,i)=>{
            if(item.group) return <p key={i} style={{fontSize:11,fontWeight:800,textTransform:'uppercase',letterSpacing:'.1em',color:'#7a90a2',marginTop:i===0?0:16,marginBottom:6,gridColumn:'1/-1'}}>{item.group}</p>
            const val = content.brand[item.key] || item.def
            return <div key={item.key} style={{display:'flex',alignItems:'center',gap:10,padding:'8px 0',borderBottom:'1px solid #f0f4f8'}}>
              <div style={{width:28,height:28,borderRadius:6,background:val,border:'1px solid #dde6ef',flexShrink:0}}/>
              <span style={{flex:1,fontSize:13,fontWeight:600,color:'#1e3a4f'}}>{item.label}</span>
              <input type="color" value={val.startsWith('rgba')||val.startsWith('linear')?'#ffffff':val} onChange={e=>set(['brand',item.key],e.target.value)} style={{width:38,height:30,borderRadius:6,border:'1px solid #cdd8e3',cursor:'pointer',padding:2}}/>
              <span style={{fontFamily:'monospace',fontSize:10,color:'#7a90a2',minWidth:58}}>{val}</span>
            </div>
          })}
        </Card>
        <Card title="Font Styles">
          <label style={{display:'block',marginBottom:14}}>
            <span style={{fontSize:12,fontWeight:700,color:'#3a5266',display:'block',marginBottom:6}}>Heading font</span>
            <select value={content.brand.headingFont||'Outfit'} onChange={e=>set(['brand','headingFont'],e.target.value)} style={{width:'100%',borderRadius:8,border:'1px solid #dde6ef',padding:'9px 12px',fontSize:14,fontFamily:content.brand.headingFont||'Outfit'}}>
              {FONTS.map(f=><option key={f} value={f} style={{fontFamily:f}}>{f}</option>)}
            </select>
          </label>
          <label style={{display:'block',marginBottom:14}}>
            <span style={{fontSize:12,fontWeight:700,color:'#3a5266',display:'block',marginBottom:6}}>Body font</span>
            <select value={content.brand.bodyFont||'DM Sans'} onChange={e=>set(['brand','bodyFont'],e.target.value)} style={{width:'100%',borderRadius:8,border:'1px solid #dde6ef',padding:'9px 12px',fontSize:14,fontFamily:content.brand.bodyFont||'DM Sans'}}>
              {FONTS.map(f=><option key={f} value={f} style={{fontFamily:f}}>{f}</option>)}
            </select>
          </label>
          <div style={{padding:'14px 16px',background:'#f3f8fd',borderRadius:12,border:'1px solid #dde6ef'}}>
            <p style={{fontFamily:content.brand.headingFont||'Outfit',fontSize:20,fontWeight:700,color:content.brand.textHeading||'#071a2f',marginBottom:6}}>Heading — {content.brand.headingFont||'Outfit'}</p>
            <p style={{fontFamily:content.brand.bodyFont||'DM Sans',fontSize:14,color:content.brand.textBody||'#1e3a4f',lineHeight:1.6}}>Body text — {content.brand.bodyFont||'DM Sans'}. The quick brown fox jumps over the lazy dog.</p>
          </div>
        </Card>
        <Card title="📊 Google Analytics" hint="Paste your G-XXXXXXXXXX ID below. Save to Blob and it activates immediately — no redeployment needed.">
          <div style={{marginBottom:12}}>
            <label style={{fontSize:12,fontWeight:700,color:'#3a5266',display:'block',marginBottom:6}}>Google Analytics Measurement ID</label>
            <input
              placeholder="G-XXXXXXXXXX"
              value={content.brand?.gaId||''}
              onChange={e=>set(['brand','gaId'],e.target.value.trim())}
              style={{width:'100%',borderRadius:8,border:'1px solid #dde6ef',padding:'9px 12px',fontSize:14,fontFamily:'monospace'}}
            />
          </div>
          {content.brand?.gaId
            ? <p style={{fontSize:12,color:'#2f7d32',fontWeight:700,margin:0}}>✅ Analytics active — ID: {content.brand.gaId}</p>
            : <div style={{background:'#f0f5fb',borderRadius:10,padding:'12px 14px',border:'1px solid #dde6ef'}}>
                <p style={{fontSize:12,color:'#5a7080',margin:'0 0 6px',fontWeight:700}}>How to get your ID:</p>
                <ol style={{fontSize:12,color:'#5a7080',margin:0,paddingLeft:18,lineHeight:1.8}}>
                  <li>Go to <b>analytics.google.com</b> and sign in</li>
                  <li>Create an account for Yard Loop if you don't have one</li>
                  <li>Click <b>Admin</b> → <b>Data Streams</b> → your website</li>
                  <li>Copy the <b>Measurement ID</b> (starts with G-)</li>
                  <li>Paste it above and hit <b>Save to Blob</b></li>
                </ol>
              </div>
          }
        </Card>
        <Card title="📧 Email Notifications" hint="Get an email every time someone fills out the contact form or estimator.">
          <div style={{background:'#f0f8e8',borderRadius:12,padding:'14px 16px',border:'1px solid #c8e6b0',marginBottom:12}}>
            <p style={{fontSize:13,fontWeight:700,color:'#2f7d32',margin:'0 0 6px'}}>How to enable lead email notifications:</p>
            <ol style={{fontSize:12,color:'#3a5266',margin:0,paddingLeft:18,lineHeight:1.8}}>
              <li>Go to <b>resend.com</b> and create a free account (3,000 emails/month free)</li>
              <li>Click <b>API Keys</b> → Create API Key → copy it</li>
              <li>Go to Vercel → your project → <b>Settings → Environment Variables</b></li>
              <li>Add <b>RESEND_API_KEY</b> = your key</li>
              <li>Add <b>NOTIFY_EMAIL</b> = {content.brand?.email||'your@email.com'}</li>
              <li>Redeploy — every new lead will email you instantly</li>
            </ol>
          </div>
          <p style={{fontSize:12,color:'#7a90a2',margin:0}}>Emails include the full lead details, estimated monthly and annual values, and a direct link back to this admin dashboard.</p>
        </Card>
        <Card title="SEO">
          {RF('Page title',['seo','title'],{style:false})}
          {RF('Meta description',['seo','description'],{area:true,style:false})}
        </Card>
      </>}

      {/* ── LEADS TAB ─────────────────────────────────────────────*/}
      {tab==='leads'&&<LeadsTab password={password}/>}

      {/* ── PAGES TAB ─────────────────────────────────────────────*/}
      {tab==='pages'&&<>
        <Card title="Page Visibility" hint="Show or hide any page. Toggle showInNav to control the navigation menu." wide>
          {Object.keys(content.pages||{}).map(k=>(
            <div key={k} style={{display:'grid',gridTemplateColumns:'1fr auto auto auto',gap:10,alignItems:'center',padding:'10px 0',borderBottom:'1px solid #f0f4f8'}}>
              <b style={{fontSize:13,color:'#1e3a4f',textTransform:'capitalize'}}>{k}</b>
              <Toggle label="Enabled" value={content.pages[k].enabled!==false} onChange={v=>set(['pages',k,'enabled'],v)}/>
              <Select label="State" value={content.pages[k].state||'published'} onChange={v=>set(['pages',k,'state'],v)} options={['published','draft','hidden','admin']}/>
              <Toggle label="In nav" value={!!content.pages[k].showInNav} onChange={v=>set(['pages',k,'showInNav'],v)}/>
            </div>
          ))}
        </Card>
      </>}

      {/* ── ADVANCED TAB ──────────────────────────────────────────*/}
      {tab==='advanced'&&<>
        <Card title="Full CMS JSON" hint="Direct JSON editing. Download a backup first." wide>
          <textarea value={JSON.stringify(content,null,2)} onChange={e=>{try{setContent(JSON.parse(e.target.value))}catch{}}} style={{width:'100%',minHeight:500,fontFamily:'monospace',fontSize:12,borderRadius:10,border:'1px solid #dde6ef',padding:14,resize:'vertical'}}/>
        </Card>
      </>}

      </div>
    </main>
  )
}
