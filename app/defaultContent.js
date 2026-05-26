export const defaultContent = {
  brand: {
    name: 'Yard Loop', tagline: 'One Plan. All Year. Total Peace of Mind.', phone: '402-235-6168', email: 'info@yard-loop.com', ownerEmail: '', supportEmail: '', address: '', serviceArea: 'Omaha / Council Bluffs metro', domain: 'https://www.yard-loop.com',
    logoText: 'YL', logoImage: '/yard-loop-logo-transparent.png',
    // Core palette
    primary: '#071a2f', green: '#2f7d32', lime: '#9fd45a', gold: '#d9a441', cream: '#f6f2e8', ink: '#0d1f30',
    // Fonts
    headingFont: 'Outfit', bodyFont: 'DM Sans',
    // Text colors
    textHeading: '#071a2f', textBody: '#1e3a4f', textMuted: '#3a5266', textOnDark: '#ffffff', textSubOnDark: '#d4eaf8',
    // Buttons
    btnBg: '#2f7d32', btnText: '#ffffff', btnHover: '#1e5c20',
    // Nav
    navBg: 'rgba(255,255,255,.97)', navText: '#0c223f', navLinkHover: '#2f7d32',
    // Alert
    alertBg: '#2f7d32', alertText: '#ffffff',
    // Footer
    footerBg: '#04101d', footerText: '#ffffff', footerLink: '#c8dfe8',
    // Sections
    heroBg: '#f3fdf0', bandBg: '#071a2f', cardBg: '#ffffff', pageBg: '#061524',
    // Accents
    accent: '#2f7d32', highlight: '#9fd45a', border: 'rgba(7,26,47,.09)',
    gaId: ''  // Google Analytics G-XXXXXXXXXX — paste here or set in admin
  },
  adminMode: 'simple',
  alertEnabled: true,
  alert: 'Now building founding Yard Loop plans in the Omaha / Council Bluffs metro.',
  pages: {
    home:{enabled:true,state:'published',showInNav:false}, services:{enabled:true,state:'published',showInNav:true}, howItWorks:{enabled:true,state:'published',showInNav:true}, pricing:{enabled:true,state:'published',showInNav:true}, estimate:{enabled:true,state:'published',showInNav:true}, gallery:{enabled:true,state:'published',showInNav:true}, legal:{enabled:true,state:'published',showInNav:false}, contact:{enabled:true,state:'published',showInNav:false}, customer:{enabled:false,state:'hidden',showInNav:false}, contractor:{enabled:true,state:'published',showInNav:false}, referrals:{enabled:false,state:'hidden',showInNav:false}, packages:{enabled:false,state:'hidden',showInNav:false}, analytics:{enabled:true,state:'admin',showInNav:false}, reviews:{enabled:true,state:'published',showInNav:false}, seasonal:{enabled:false,state:'hidden',showInNav:false}
  },
  modules: { estimator:true, legal:true, leads:true, stripe:false, contracts:true, marginProtection:true, reviewAutomation:false, photoProof:false, customerPortal:false, contractorPortal:true, referrals:false, packages:false, seasonalCampaigns:false, routeDensity:false, analytics:true },
  hero: { eyebrow:'Managed exterior home maintenance', headline:'Premium exterior home care, handled in one simple monthly plan.', subheadline:'Yard Loop brings mowing, gutters, windows, washing, mulch, and seasonal exterior care into one clean monthly plan — organized for you, managed by us, and designed for total peace of mind.', primaryCta:'Build My Yard Loop Plan', secondaryCta:'See How It Works', image:'/yard-loop-logo-transparent.png', backgroundImage:'', overlayTitle:'One company to call. One plan to manage.', overlayItems:['No chasing multiple contractors','Predictable monthly planning','Seasonal exterior care organized for you'] },
  trust:['Locally built for Omaha / Council Bluffs','Subscription-style exterior care','Trusted local pros coordinated for you','Simple monthly planning'],
  painHeadline:'Stop managing five different exterior chores every season.',
  problem:['Mower no-shows','Gutters forgotten until there is a problem','Window cleaning keeps getting pushed off','Power washing and mulch become weekend projects'],
  splitHeadline:'Yard Loop is not selling one chore. It is selling the end of exterior-home hassle.',
  splitText:'The homeowner gets one plan, one monthly rhythm, and one company to contact. Yard Loop handles the organization behind the scenes.',
  promise:[{title:'One exterior plan',text:'Pick the services that fit your home. Yard Loop turns them into one organized plan instead of scattered one-off jobs.',image:''},{title:'We coordinate the work',text:'We help line up local pros, timing, reminders, and seasonal rhythm so the homeowner does not have to chase everyone.',image:''},{title:'All-year peace of mind',text:'Your property stays sharp without your weekends being eaten by exterior maintenance.',image:''}],
  included:[{icon:'🌱',title:'Mowing Plans',text:'Recurring mowing coordination based on your yard size, season, and preferred care level.',image:''},{icon:'🍂',title:'Gutter Cleaning',text:'Planned gutter cleaning so it does not become an emergency after a storm.',image:''},{icon:'🪟',title:'Window Cleaning',text:'Exterior window cleaning built into a yearly maintenance rhythm.',image:''},{icon:'💦',title:'Power Washing',text:'Annual or add-on cleaning for concrete, siding, decks, patios, and high-visibility areas.',image:''},{icon:'🌿',title:'Mulch Refresh',text:'Annual mulch refresh options to keep curb appeal clean and finished.',image:''},{icon:'🛡️',title:'Outdoor Insect Control',text:'Optional seasonal exterior insect-control add-ons for comfort around the home.',image:''}],
  how:[{step:'01',title:'Tell us about your property',text:'Yard size, home size, windows, gutters, driveway, and services you want handled.'},{step:'02',title:'We build the plan',text:'We turn your needs into a simple monthly plan using a clear point-based structure.'},{step:'03',title:'Local pros do the work',text:'Yard Loop coordinates trusted local providers and keeps the work on track.'},{step:'04',title:'You stop worrying about it',text:'One plan, one company to contact, and a cleaner property all year.'}],
  pointPricing: {
    eyebrow: 'Point-based pricing',
    headline: 'Easy for customers. Controlled by you in admin.',
    steps: [
      { num:'01', title:'Choose property size', text:'Small, medium, or large controls base price and price per point.' },
      { num:'02', title:'Select services', text:'Each service and frequency has an editable point value.' },
      { num:'03', title:'Auto-calculate plan', text:'Base price + points + upgrades = monthly subscription and annual value.' }
    ]
  },
  pricing:{headline:'Simple point-based pricing built around your property.',text:'Pick a property size, choose services, and Yard Loop calculates an estimated monthly subscription using base price plus selected service points.',note:'Online estimates are preliminary until property details are reviewed.',rangeLabel:'Plans are built from',rangeValue:'Base + Points',rangeNote:'You control base prices, point values, and price-per-point inside admin.'},
  estimator:{headline:'Build a preliminary Yard Loop estimate',subheadline:'Choose a property tier and services. The estimate updates automatically and sends into your lead dashboard.',disclaimer:'Online estimates are preliminary and based on customer-provided information. Final pricing may change after property review, satellite measurement, in-person inspection, service-provider feedback, or discovery of conditions affecting difficulty, time, safety, access, or cost.',correction:'Yard Loop may correct pricing if property size, access, service scope, obstacles, measurements, or selected services differ from information submitted.',marginTarget:35, showRetailValue:true,
    tiers:[{id:'small',name:'Small',yardRange:'<5,000 sq ft yard',homeRange:'<2,000 sq ft home',basePrice:149,pricePerPoint:25,mowingUpgrade:45,enabled:true},{id:'medium',name:'Medium',yardRange:'5,000–10,000 sq ft yard',homeRange:'2,000–3,500 sq ft home',basePrice:199,pricePerPoint:35,mowingUpgrade:60,enabled:true},{id:'large',name:'Large',yardRange:'10,000–20,000 sq ft yard',homeRange:'3,500–5,000 sq ft home',basePrice:299,pricePerPoint:50,mowingUpgrade:85,enabled:true}],
    services:[{id:'gutters2',name:'Gutter Cleaning',frequency:'2x/year',points:2,contractorCost:70,enabled:true},{id:'gutters1',name:'Gutter Cleaning',frequency:'1x/year',points:1,contractorCost:40,enabled:true},{id:'windows2',name:'Exterior Window Cleaning',frequency:'2x/year',points:3,contractorCost:120,enabled:true},{id:'windows1',name:'Exterior Window Cleaning',frequency:'1x/year',points:1.5,contractorCost:70,enabled:true},{id:'housewash',name:'House Wash',frequency:'1x/year',points:3,contractorCost:130,enabled:true},{id:'driveway',name:'Driveway/Concrete Wash',frequency:'1x/year',points:2,contractorCost:80,enabled:true},{id:'deck',name:'Deck Wash',frequency:'1x/year',points:2,contractorCost:80,enabled:true},{id:'mulch',name:'Mulching',frequency:'1x/year',points:4,contractorCost:160,enabled:true},{id:'insects6',name:'Outdoor Insect Control',frequency:'6 apps/year',points:3,contractorCost:120,enabled:true},{id:'insects3',name:'Outdoor Insect Control',frequency:'3 apps/year',points:1.5,contractorCost:70,enabled:true},{id:'fertweed',name:'Fertilizer/Weed Control',frequency:'5 apps/year',points:3,contractorCost:120,enabled:true},{id:'shrub2',name:'Shrub Trimming',frequency:'2x/year',points:2,contractorCost:85,enabled:true},{id:'shrub1',name:'Shrub Trimming',frequency:'1x/year',points:1,contractorCost:45,enabled:true},{id:'aeration',name:'Aeration',frequency:'1x/year',points:1,contractorCost:50,enabled:true},{id:'sprinkler',name:'Sprinkler Blowout',frequency:'1x/year',points:1,contractorCost:50,enabled:true}]
  },
  legal:{headline:'Yard Loop Legal & Service Terms',subheadline:'Clear terms for subscription exterior maintenance — written to be fair to homeowners and protective of Yard Loop.',effectiveDate:'[INSERT DATE]',sections:[
    {title:'Terms of Service',body:'By enrolling in Yard Loop services, using our website, submitting a quote request, approving an estimate, or authorizing recurring billing, Customer agrees to these Terms of Service. Yard Loop provides recurring exterior home maintenance coordination services, including lawn mowing, gutter cleaning, exterior window cleaning, mulching, pressure washing, outdoor insect control, fertilizer/weed control, shrub trimming, aeration, sprinkler blowouts, and related exterior maintenance. Services may be performed by Yard Loop employees, subcontractors, or third-party service providers selected by Yard Loop. Services are scheduled based on seasonality, weather, contractor availability, property conditions, route density, safety, and operational requirements.'},
    {title:'Subscription & Annualized Service Balance',body:'Yard Loop monthly subscription pricing is based on an annualized service plan divided into predictable monthly payments. Monthly billing does not guarantee an equal number of visits every month. Some services are seasonal, weather-dependent, route-dependent, or completed at specific times of year. Customer understands service frequency may vary by month while the overall plan is designed to provide the selected services over the service year.'},
    {title:'Recurring Billing Consent',body:'By submitting payment information, Customer authorizes Yard Loop to charge the selected payment method on a recurring monthly basis until cancelled under this policy. Customer is responsible for maintaining valid payment information. Failed or declined payments may result in service suspension, late fees, collection activity, or cancellation. Customer agrees to contact Yard Loop first to resolve billing disputes before initiating chargebacks.'},
    {title:'Estimate Disclaimer & Pricing Correction',body:'Online estimates are preliminary and based on customer-provided information. Final pricing may change after property review, satellite measurement, in-person inspection, service-provider feedback, or discovery of conditions affecting service difficulty, time, safety, access, material use, or cost. Yard Loop may correct pricing if property size, access, service scope, obstacles, measurements, or selected services differ from information submitted.'},
    {title:'Cancellation Policy',body:'Customers may cancel recurring services with at least 30 days written notice by email, written communication, customer portal, or approved online cancellation form. Yard Loop will not require customers to cancel through a method that is unreasonably harder than the method used to enroll. Services and billing may continue during the 30-day notice period. Completed services, dispatched visits, prepaid seasonal services, material purchases, custom work, deposits, and administrative setup fees may be non-refundable.'},
    {title:'Weather, Scheduling & Access',body:'Service dates are estimated and not guaranteed. Yard Loop may reschedule, delay, combine, or modify visits due to weather, storms, excessive heat, safety conditions, equipment failure, labor shortages, holidays, route optimization, or operational needs. Weather-related delays do not constitute breach of service. Customer must provide safe and reasonable property access, including unlocked gates, secured animals, clear work areas, and disclosure of hazards.'},
    {title:'Damage Claims & Liability Limits',body:'Any claim for property damage must be submitted in writing within 7 calendar days of service. Failure to notify Yard Loop within 7 days may waive the claim. Yard Loop is not responsible for pre-existing damage, normal wear and tear, hidden hazards, improperly marked obstacles, irrigation systems, buried utilities, discoloration, weather-related lawn stress, or pre-existing surface conditions. To the fullest extent permitted by law, Yard Loop total liability shall not exceed the amount paid by Customer during the previous three months of service.'},
    {title:'Privacy Policy',body:'Yard Loop may collect customer name, address, phone, email, payment details, property information, service preferences, website activity, and communications. Information may be used to schedule services, process payments, improve operations, communicate with customers, provide support, send service or marketing messages, and improve website performance. Information may be shared with subcontractors, payment processors, scheduling providers, and operational partners as needed to perform services. Yard Loop does not sell personal customer information to third-party marketers.'}
  ]},
  contractor: {
    heroEyebrow: 'Contractor partners',
    heroHeadline: 'Partner With Yard Loop',
    heroSubtext: 'Join a growing exterior home maintenance platform serving the Omaha & Council Bluffs metro. Build a reliable recurring route with a company that handles the customer side so you can focus on the work.',

    benefitsHeadline: 'Why contractors choose Yard Loop',
    benefitsText: 'Yard Loop organizes recurring residential exterior maintenance routes and coordinates the customer relationship so contractors can focus on delivering great work. We handle billing, scheduling communication, and customer management.',
    benefits: [
      { title: 'Recurring route work', text: 'Grouped recurring properties in neighborhoods so you spend less time driving and more time working.' },
      { title: 'We handle the customer', text: 'Yard Loop owns the customer relationship, billing, and communication. You focus on the job.' },
      { title: 'Bi-weekly payouts', text: 'Approved work is paid on a bi-weekly basis after service verification.' },
      { title: 'Growing platform', text: 'As Yard Loop grows, contractors with strong performance receive more recurring opportunities.' }
    ],

    howHeadline: 'How the Yard Loop contractor partnership works',
    how: [
      { title: 'Apply and get approved', text: 'Submit your application. Yard Loop reviews your services, coverage area, insurance, and experience.' },
      { title: 'Receive recurring work', text: 'Approved contractors receive recurring residential service assignments grouped by neighborhood and route zone.' },
      { title: 'Complete and document', text: 'Complete services to Yard Loop quality standards. Submit completion photos when required prior to payment approval.' },
      { title: 'Get paid bi-weekly', text: 'Approved payouts are processed bi-weekly after service verification and account standing confirmation.' }
    ],

    expectationsHeadline: 'Yard Loop contractor standards',
    expectations: [
      { title: 'Independent Contractor Status', text: 'Contractors are independent and solely responsible for their own taxes, insurance, licensing, equipment, labor, transportation, fuel, and operational expenses. No employer-employee relationship is created.' },
      { title: 'Insurance & Licensing', text: 'Contractors must maintain all required business licenses, registrations, and general liability insurance at all times. Proof of insurance and W9 documentation may be required before receiving work.' },
      { title: 'Professionalism Standards', text: 'Contractors must represent themselves professionally — respectful communication, appropriate appearance, safe equipment operation, and proper care of customer property. Misconduct of any kind is not tolerated.' },
      { title: 'Communication Expectations', text: 'Contractors must maintain reliable communication regarding scheduling, delays, weather issues, property concerns, or damages. Timely response during operating hours is expected.' },
      { title: 'Quality Standards', text: 'All work must be completed thoroughly, safely, and consistently in a manner that reflects positively on the Yard Loop brand. Repeated complaints or poor workmanship may result in removal.' },
      { title: 'Completion Photo Requirements', text: 'Before-and-after or completion photos may be required for certain services prior to payment approval. Photos must clearly document completed work and overall property condition.' },
      { title: 'Damage Reporting', text: 'Any property damage, customer concern, injury, or incident during service must be reported to Yard Loop as soon as reasonably possible. Failure to report may result in immediate removal from the network.' },
      { title: 'Customer Relationship Protection', text: 'Contractors agree not to directly solicit or independently service Yard Loop customers outside the Yard Loop platform during the active business relationship without written authorization.' },
      { title: 'No Guaranteed Volume', text: 'Yard Loop does not guarantee a minimum number of jobs, revenue, route size, or work volume. Opportunities fluctuate based on seasonality, demand, performance, and operational needs.' },
      { title: 'Right to Remove', text: 'Yard Loop reserves the right to reduce, suspend, or discontinue contractor work opportunities at its discretion for quality, communication, professionalism, insurance, or policy concerns.' }
    ],

    insuranceHeadline: 'Insurance & Independent Contractor Requirements',
    insuranceBullets: [
      'Maintain general liability insurance at all times while performing services',
      'Maintain all required local and state business licenses and registrations',
      'Provide proof of insurance and W9 documentation before receiving assignments',
      'Yard Loop may request to be listed as additional insured when reasonably available',
      'Solely responsible for all taxes, payroll, equipment, fuel, and operational costs'
    ],
    independentContractorText: 'Contractors are independent and not employees, partners, franchisees, or agents of Yard Loop. Nothing in this agreement creates an employer-employee relationship. Contractor understands that Yard Loop owns and manages the customer relationship, billing, and subscription structure.',

    payHeadline: 'Payment & Route Structure',
    payText: 'Yard Loop is focused on building long-term recurring residential service routes. As we grow, reliable contractors receive increased recurring work opportunities within designated service areas.',
    payBullets: [
      'Bi-weekly payout processing for approved completed work',
      'Payment subject to service verification and completion documentation',
      'Grouped recurring route properties to reduce travel and improve efficiency',
      'Contractors manage their own labor, equipment, crew, and field operations',
      'Payment timing may vary based on service verification or dispute resolution'
    ],
    payDisclaimer: 'Yard Loop does not guarantee a minimum number of jobs, revenue amount, route size, or work volume. Work opportunities may fluctuate based on seasonality, customer demand, contractor performance, and operational needs. Our goal is mutually beneficial long-term partnerships built on reliability, professionalism, and quality service.',

    qualityHeadline: 'Brand representation matters',
    qualityText: 'Contractor performance directly impacts the Yard Loop brand and customer experience. We hold our contractor partners to clear, fair standards — and in return we work to build a platform that sends you consistent, organized, recurring work.',
    qualityPills: ['Recurring routes','Bi-weekly pay','We handle customers','Professional standards','Completion documentation','Growing platform'],

    application: {
      headline: 'Apply to become a Yard Loop contractor partner',
      subheadline: 'Tell us about your services, coverage area, and experience. We review every application and reach out to qualified contractors.',
      buttonText: 'Submit Application',
      disclaimer: 'Submitting an application does not guarantee work assignments. Yard Loop reviews all applications and contacts qualified contractors. All contractors must meet insurance, licensing, and professionalism standards before receiving work.',
      serviceOptions: ['Lawn Mowing','Gutter Cleaning','Window Cleaning','Power Washing','Mulching','Outdoor Insect Control','Fertilizer / Weed Control','Shrub Trimming','Aeration','Sprinkler Blowout','Other exterior services']
    }
  },
  stripe:{enabled:false,testMode:true,publishableKey:'',secretKeyStatus:'Not configured',successUrl:'https://www.yard-loop.com/thank-you',cancelUrl:'https://www.yard-loop.com/estimate',monthlyProductName:'Yard Loop Monthly Plan',notConfiguredMessage:'Payments are not active yet. Configure Stripe keys and turn payments ON before showing checkout buttons.'},
  launchChecklist:[{item:'Phone links use tap-to-call',done:true},{item:'Email links use mailto',done:true},{item:'Estimator is visible only when enabled',done:true},{item:'Legal pages are visible only when enabled',done:true},{item:'Stripe hidden until configured',done:true},{item:'Admin password moved to Vercel environment variable',done:false},{item:'Vercel KV connected for CMS/leads',done:false},{item:'Vercel Blob connected for image uploads',done:false},{item:'Domain connected',done:false},{item:'Google Business/review link added',done:false}],
  leadStatuses:['New','Contacted','Quoted','Follow Up','Won','Lost'],
  offer:{headline:'Founding customer offer',text:'Become one of the first homes in the Yard Loop route and help shape the service before the full public launch.',button:'Ask About Founding Pricing'},
  testimonials:[{name:'',location:'',quote:'',enabled:false}],
  serviceArea:['Council Bluffs','Omaha','Carter Lake','Bellevue','Papillion','La Vista','Elkhorn','Gretna','Bennington','Surrounding neighborhoods'],
  gallery:[{label:'Fresh curb appeal',image:'',caption:'Use this space for finished lawn, mulch, or front-of-home photos.'},{label:'Clean exterior surfaces',image:'',caption:'Show pressure washing, windows, siding, decks, or concrete.'},{label:'Seasonal maintenance',image:'',caption:'Show service photos that prove Yard Loop keeps things moving all year.'}],
  faq:[{q:'How does Yard Loop pricing work?',a:'Yard Loop uses a point-based pricing model. You choose property size and services, and the estimator calculates a preliminary monthly subscription price.'},{q:'Does monthly billing guarantee the same number of visits every month?',a:'No. Yard Loop is an annualized exterior maintenance plan divided into monthly payments. Some services are seasonal and weather-dependent.'},{q:'Can I cancel?',a:'Yes. Customers may cancel with 30 days written notice using email, written notice, customer portal, or an approved online cancellation form.'}],
  pageHeroes:{services:{eyebrow:'What Yard Loop coordinates',headline:'Build a plan around the outside chores you want handled.',subtext:'Every plan is custom.'},howItWorks:{eyebrow:'The process',headline:'Simple for the homeowner. Organized by Yard Loop.',subtext:'From quote to a clean property all year.'},pricing:{eyebrow:'Transparent pricing',headline:'Point-based pricing that is easy to explain.',subtext:'Base property price plus selected service points.'},gallery:{eyebrow:'Work photos',headline:'Real work. Real homes. Real results.',subtext:'Add real job photos from admin.'},contact:{eyebrow:'Get started',headline:'Get your Yard Loop plan started.',subtext:'Tell us about your property.'}},
  contactPage:{heroEyebrow:'Get started',heroHeadline:'Get your Yard Loop plan started.',heroSubtext:'Tell us about your property and what you want handled.',formHeadline:'Request a Free Custom Quote',formSubtext:'Name and phone are required. Everything else helps us build a better plan.',formButtonText:'Send My Request →',formSuccessHeadline:'Got it — we will be in touch!',formSuccessText:'Usually same day. If you need us right now, call or text us directly.',responseTimeText:'We respond same day when possible.',formNote:'No spam. No obligation.'},
  finalCta:{headline:'Ready to stop chasing exterior contractors?',text:'Let Yard Loop build a simple plan for your home so your outside maintenance does not keep falling back on you.',button:'Request My Plan'},
  seo:{title:'Yard Loop | Managed Exterior Home Maintenance',description:'One monthly plan for lawn care, gutters, windows, power washing, mulch, and exterior home maintenance in Omaha and Council Bluffs.'},
  leadEmailTo:'info@yard-loop.com', leadEmailSubject:'New Yard Loop Quote Request', googleReviewUrl:'', googleMapsUrl:'',
  bgColors: {
    hero:'', pain:'', split:'', band:'', services:'', pricing:'', testimonials:'', finalCta:'',
    nav:'', footer:'', pageHero:'', cards:'', alert:'', contactForm:'', gallery:'', estimator:''
  },
  textStyles: {},
  socialLinks:[{label:'Facebook',url:'',enabled:false},{label:'Instagram',url:'',enabled:false},{label:'TikTok',url:'',enabled:false},{label:'YouTube',url:'',enabled:false},{label:'X / Twitter',url:'',enabled:false},{label:'LinkedIn',url:'',enabled:false},{label:'Nextdoor',url:'',enabled:false}]
}

