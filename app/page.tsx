'use client';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Gauge, ScanLine, ClipboardCheck, CarFront, MapPin, Phone, MessageCircle, Star, ChevronRight } from 'lucide-react';

const phone = '918387967670';
const wa = `https://wa.me/${phone}?text=${encodeURIComponent('Hi PDI PRO, I want to book a pre-delivery car inspection in Udaipur. Please share availability and pricing.')}`;
const reviewUrl = 'https://share.google/50LG6aphhvR8XglW5';

const services = [
  { icon: ScanLine, title: 'Paint & body inspection', text: 'Paint thickness readings, repaint indicators, scratches, dents, panel gaps and finish checks.' },
  { icon: Gauge, title: 'Mechanical & diagnostics', text: 'OBD scan where supported, dashboard warnings, engine bay, fluid levels and visible leaks.' },
  { icon: CarFront, title: 'Interior & electronics', text: 'Seats, upholstery, infotainment, cameras, sensors, lights, windows, AC and controls.' },
  { icon: ClipboardCheck, title: 'Delivery checklist & report', text: 'A structured inspection, photos of observations and a clear report to discuss with the dealer.' },
  { icon: ShieldCheck, title: 'Road test & safety checks', text: 'When permitted, a short road test plus tyres, brakes, steering and basic safety checks.' },
  { icon: CheckCircle2, title: 'Delivery-day support', text: 'An independent set of eyes before you accept delivery—so you can ask informed questions.' },
];

const brands = ['Maruti Suzuki','Hyundai','Tata','Mahindra','Toyota','Kia','Honda','Volkswagen','Škoda','MG Motor','Renault','Nissan','Jeep','Citroën','BMW','Mercedes-Benz','Audi','Volvo','BYD','Isuzu','Force Motors','Other brand'];
const fuelTypes = ['Petrol','Diesel','CNG','Petrol + CNG','Electric (EV)','Hybrid','Plug-in Hybrid','Other'];
const areas = ['Udaipur','Nathdwara','Rajsamand','Chittorgarh','Mavli','Debari','Fatehnagar','Gogunda','Kapasan','Dungla','Salumbar','Nearby locations within ~100 km'];

export default function Home() {
  return (
    <main>
      <div className="topbar"><div className="wrap topbarInner"><span><MapPin size={14}/> Udaipur, Rajasthan · Service by appointment</span><a href={`tel:+${phone}`}><Phone size={14}/> +91 83879 67670</a></div></div>
      <header className="header"><div className="wrap nav">
        <a className="brand" href="#home" aria-label="PDI PRO home"><Image src="/pdi-pro-logo.png" alt="PDI PRO car inspection logo" width={164} height={64} priority /></a>
        <nav><a href="#services">Services</a><a href="#process">How it works</a><a href="#coverage">Service areas</a><a href="#reviews">Reviews</a></nav>
        <a className="btn btnSmall" href="#book">Book an inspection <ArrowUpRight size={16}/></a>
      </div></header>

      <section className="hero" id="home"><div className="wrap heroGrid">
        <div className="heroCopy"><div className="eyebrow"><span className="pulse"/> INDEPENDENT CAR INSPECTION · UDAIPUR</div>
          <h1>Before you take the keys, <em>check every detail.</em></h1>
          <p className="lead">Professional pre-delivery inspection (PDI) for your new car. We help you review the vehicle’s condition before delivery—with practical checks, photos and a detailed report.</p>
          <div className="heroActions"><a className="btn" href="#book">Book your PDI <ArrowUpRight size={18}/></a><a className="btn btnOutline" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Chat on WhatsApp</a></div>
          <div className="trustRow"><div className="trustIcon"><ShieldCheck size={20}/></div><div><b>Independent inspection</b><span>Know what to ask before accepting delivery</span></div><div className="trustDivider"/><div className="trustIcon"><ClipboardCheck size={20}/></div><div><b>Clear report</b><span>Findings documented for your reference</span></div></div>
        </div>
        <div className="heroVisual"><div className="visualGlow"/><div className="inspectionCard">
          <div className="cardTop"><span className="miniLogo">PDI<span>PRO</span></span><span className="status"><span/> INSPECTION PREVIEW</span></div>
          <div className="carIllustration"><div className="carHalo"/><CarFront size={150} strokeWidth={1.15}/></div>
          <div className="reportTitle"><div><small>PRE-DELIVERY INSPECTION</small><h3>Vehicle condition review</h3></div><span className="reportCheck"><CheckCircle2 size={22}/></span></div>
          <div className="checkRows"><div><span><CheckCircle2/> Exterior & paint</span><b>Checked</b></div><div><span><CheckCircle2/> Interior & electronics</span><b>Checked</b></div><div><span><CheckCircle2/> Tyres & safety items</span><b>Checked</b></div></div>
          <p className="sampleNote">Illustrative report preview · Actual findings depend on the vehicle inspected.</p>
        </div><div className="floatingTag"><ShieldCheck size={18}/><span><b>Make an informed choice</b><small>Inspect before delivery</small></span></div></div>
      </div></section>

      <section className="stats"><div className="wrap statsGrid"><div><strong>100+</strong><span>inspection checkpoints*</span></div><div><strong>All major</strong><span>brands & fuel types</span></div><div><strong>Local</strong><span>Udaipur-based service</span></div><div><strong>Photo-backed</strong><span>inspection observations</span></div></div><p className="finePrint">*Checkpoint count depends on vehicle type and inspection package.</p></section>

      <section className="section" id="services"><div className="wrap"><div className="sectionHead"><div><div className="eyebrow">WHAT WE CHECK</div><h2>More confidence at <em>car delivery.</em></h2></div><p>From paint finish to cabin electronics, our checks are designed to help you review your car carefully before accepting delivery.</p></div>
        <div className="serviceGrid">{services.map((s) => { const Icon = s.icon; return <article className="serviceCard" key={s.title}><div className="serviceIcon"><Icon size={22}/></div><h3>{s.title}</h3><p>{s.text}</p><a href="#book">Ask about this service <ChevronRight size={15}/></a></article> })}</div>
      </div></section>

      <section className="process section" id="process"><div className="wrap processGrid"><div><div className="eyebrow">SIMPLE PROCESS</div><h2>Your new car. <em>Checked with care.</em></h2><p className="sectionIntro">A simple, customer-friendly process that fits around your showroom’s delivery schedule.</p><a className="btn" href="#book">Schedule your inspection <ArrowUpRight size={18}/></a></div>
        <div className="steps"><article><span>01</span><div><h3>Share your car details</h3><p>Tell us the brand, model, variant, fuel type, showroom and expected delivery date.</p></div></article><article><span>02</span><div><h3>We inspect the vehicle</h3><p>We work through applicable checkpoints, subject to access and dealer permissions.</p></div></article><article><span>03</span><div><h3>Review the findings</h3><p>Get a report of observations and discuss any concerns with the dealership before acceptance.</p></div></article></div>
      </div></section>

      <section className="section brandSection"><div className="wrap"><div className="sectionHead"><div><div className="eyebrow">ALL MAJOR MAKES</div><h2>One inspection service for <em>many car brands.</em></h2></div><p>Hatchback, sedan, SUV, MUV, luxury vehicle or EV—ask us about the right checklist for your car.</p></div><div className="brandPills">{brands.map(b=><span key={b}>{b}</span>)}</div><div className="fuelLine"><b>Fuel types supported:</b> {fuelTypes.join(' · ')}<p>Share your exact model, variant and powertrain. Inspection items vary by vehicle and available access; no unsupported feature or diagnostic result is assumed.</p></div></div></section>

      <section className="section coverage" id="coverage"><div className="wrap coverageGrid"><div><div className="eyebrow">LOCAL SERVICE, PRACTICAL SUPPORT</div><h2>Serving Udaipur and <em>nearby Rajasthan.</em></h2><p className="sectionIntro">Based in Udaipur, PDI PRO primarily serves Udaipur, Nathdwara, Chittorgarh and nearby showroom locations—typically within around 100 km, subject to appointment and travel availability.</p><a className="btn" href={wa} target="_blank" rel="noreferrer">Check availability <MessageCircle size={17}/></a></div><div className="areaList">{areas.map((a,i)=><span key={a}><MapPin size={15}/>{a}</span>)}</div></div></section>

      <section className="section reviews" id="reviews"><div className="wrap reviewsGrid"><div><div className="eyebrow">CUSTOMER FEEDBACK</div><h2>Trust built on <em>clear communication.</em></h2><p className="sectionIntro">Read customer feedback on our Google business profile. We don’t publish unverified quotes or ratings here.</p><a className="btn btnOutline" href={reviewUrl} target="_blank" rel="noreferrer"><Star size={17}/> View Google reviews <ArrowUpRight size={16}/></a></div><div className="reviewPlaceholder"><div className="reviewStars">★★★★★</div><h3>Your experience matters</h3><p>Had your car inspected by PDI PRO? Share your genuine feedback to help other buyers make a confident decision.</p><a href={reviewUrl} target="_blank" rel="noreferrer">Open customer reviews <ArrowUpRight size={15}/></a><small>Google review destination supplied by the business owner. Displayed ratings and testimonials should be verified before publication.</small></div></div></section>

      <section className="section booking" id="book"><div className="wrap bookingGrid"><div className="bookingIntro"><div className="eyebrow">BOOK AN INSPECTION</div><h2>Tell us about your <em>new car.</em></h2><p>Share a few details and we’ll follow up to confirm availability, pricing and the inspection scope.</p><div className="contactLines"><a href="tel:+918387967670"><Phone size={18}/> +91 83879 67670</a><a href={wa} target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp us directly</a><span><MapPin size={18}/> Udaipur, Rajasthan 313001</span></div></div>
        <form className="bookingForm" action={`https://wa.me/${phone}`} method="get" target="_blank">
          <h3>Inspection enquiry</h3><p>Fields marked * are required.</p>
          <div className="formGrid"><label>Your name *<input name="name" required placeholder="Full name"/></label><label>Phone number *<input name="customerPhone" required inputMode="tel" placeholder="10-digit mobile"/></label><label>Car brand *<select name="brand" required defaultValue=""><option value="" disabled>Select brand</option>{brands.map(b=><option key={b}>{b}</option>)}</select></label><label>Model *<input name="model" required placeholder="e.g. Nexon, Creta, Swift"/></label><label>Variant<input name="variant" placeholder="e.g. ZXi+, SX(O), top variant"/></label><label>Fuel type *<select name="fuel" required defaultValue=""><option value="" disabled>Select fuel type</option>{fuelTypes.map(f=><option key={f}>{f}</option>)}</select></label><label>Showroom city *<select name="city" required defaultValue=""><option value="" disabled>Select city</option>{areas.map(a=><option key={a}>{a}</option>)}</select></label><label>Expected delivery date<input name="date" type="date"/></label><label className="full">Anything we should know?<textarea name="notes" rows={3} placeholder="Showroom name, delivery timing, preferred checks…"/></label></div>
          <button className="btn formSubmit" type="button" onClick={() => { const form = document.querySelector('form.bookingForm') as HTMLFormElement; if (!form.reportValidity()) return; const data = new FormData(form); const message = `Hi PDI PRO, I'd like to enquire about a car PDI.%0AName: ${encodeURIComponent(String(data.get('name')||''))}%0APhone: ${encodeURIComponent(String(data.get('customerPhone')||''))}%0ABrand: ${encodeURIComponent(String(data.get('brand')||''))}%0AModel: ${encodeURIComponent(String(data.get('model')||''))}%0AVariant: ${encodeURIComponent(String(data.get('variant')||''))}%0AFuel: ${encodeURIComponent(String(data.get('fuel')||''))}%0ACity: ${encodeURIComponent(String(data.get('city')||''))}%0ADelivery: ${encodeURIComponent(String(data.get('date')||''))}%0ANotes: ${encodeURIComponent(String(data.get('notes')||''))}`; window.open(`https://wa.me/${phone}?text=${message}`, '_blank', 'noopener,noreferrer'); }}>Send enquiry on WhatsApp <ArrowUpRight size={17}/></button>
          <small>Submitting opens WhatsApp with your details pre-filled. Please review and send the message to contact PDI PRO.</small>
        </form>
      </div></section>

      <footer className="footer"><div className="wrap footerMain"><a href="#home"><Image src="/pdi-pro-logo.png" alt="PDI PRO logo" width={140} height={55}/></a><p>Independent pre-delivery car inspection to help you make a more informed delivery-day decision.</p><div className="footerLinks"><a href="#services">Services</a><a href="#coverage">Service areas</a><a href="#book">Contact</a><a href={wa} target="_blank" rel="noreferrer">WhatsApp</a></div></div><div className="wrap footerBottom"><span>© {new Date().getFullYear()} PDI PRO. All rights reserved.</span><span>Udaipur, Rajasthan · +91 83879 67670</span></div></footer>
      <a className="floatingWhatsApp" href={wa} target="_blank" rel="noreferrer" aria-label="Chat with PDI PRO on WhatsApp"><MessageCircle size={23}/><span>Chat with us</span></a>
    </main>
  );
}