import { unstable_noStore as noStore } from 'next/cache'
import { defaultContent } from '../defaultContent'
import { readJsonBlob } from './blobJson'

const CMS_KEY = 'yard-loop-cms.json'

function deepMerge(base, saved) {
  if (!saved || typeof saved !== 'object') return base
  if (Array.isArray(base) || Array.isArray(saved)) return saved ?? base
  const out = { ...base }
  for (const key of Object.keys(saved)) {
    const b = base?.[key]
    const s = saved[key]
    if (b && s && typeof b === 'object' && typeof s === 'object' && !Array.isArray(b) && !Array.isArray(s)) {
      out[key] = deepMerge(b, s)
    } else {
      out[key] = s
    }
  }
  return out
}

export async function getContent() {
  noStore()
  try {
    const saved = await readJsonBlob(CMS_KEY, null)
    return deepMerge(defaultContent, saved)
  } catch (error) {
    console.error('CMS content read failed:', error)
    return defaultContent
  }
}

export function isVisible(c, key) {
  const pages = c?.pages || {}
  return pages[key]?.state !== 'hidden' && pages[key]?.enabled !== false
}

export function publicPages(c) {
  const labels = { services:'Services', howItWorks:'How It Works', pricing:'Pricing', estimate:'Estimator', gallery:'Gallery', legal:'Legal', packages:'Packages', referrals:'Referrals', customer:'Customer Portal', contractor:'Contractor Portal' }
  const hrefs = { services:'/services', howItWorks:'/how-it-works', pricing:'/pricing', estimate:'/estimate', gallery:'/gallery', legal:'/legal', packages:'/packages', referrals:'/referrals', customer:'/customer', contractor:'/contractor' }
  return Object.keys(labels).filter(k => isVisible(c,k) && (c.pages?.[k]?.showInNav !== false)).map(k => ({ key:k, label: labels[k], href: hrefs[k] }))
}

export function styleVars(c) {
  const b = c.brand || defaultContent.brand
  return { '--navy':b.primary, '--green':b.green, '--lime':b.lime, '--gold':b.gold, '--cream':b.cream, '--ink':b.ink, '--fontHeading': b.headingFont || 'Outfit', '--fontBody': b.bodyFont || 'DM Sans' }
}
