import React,{useEffect,useState} from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import Process from './components/Process.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import About from './components/About.jsx';
import Catalog from './components/Catalog.jsx';
import Testimonials from './components/Testimonials.jsx';
import QuotePage from './components/QuotePage.jsx';
import AboutPage from './components/AboutPage.jsx';
import DoorsPage from './components/DoorsPage.jsx';
import WindowsPage from './components/WindowsPage.jsx';
import MamparasPage from './components/MamparasPage.jsx';
import RoofsPage from './components/RoofsPage.jsx';
import MirrorsPage from './components/MirrorsPage.jsx';
import CatalogPage from './components/CatalogPage.jsx';
import PrivacyPage from './components/PrivacyPage.jsx';
import ComplaintsPage from './components/ComplaintsPage.jsx';
import TestimonialsPage from './components/TestimonialsPage.jsx';
export default function App(){
 const [route,setRoute]=useState(()=>window.location.hash);const [catalogRequest,setCatalogRequest]=useState(null);
 const isQuote=route.startsWith('#/cotizar');const isAbout=route==='#/nosotros';const isDoors=route==='#/puertas';const isWindows=route==='#/ventanas';const isMamparas=route==='#/mamparas';const isRoofs=route==='#/techos';const isMirrors=route==='#/espejos';const isTestimonials=route==='#/testimonios';const isComplaints=route==='#/libro-de-reclamaciones';const isPrivacy=route==='#/tratamiento-de-datos';const isCatalog=route==='#/catalogo';const isInner=isCatalog||isPrivacy||isComplaints||isQuote||isAbout||isDoors||isWindows||isMamparas||isRoofs||isMirrors||isTestimonials;const service=new URLSearchParams(route.split('?')[1]||'').get('servicio')||'';
 useEffect(()=>{const navigate=()=>setRoute(window.location.hash);window.addEventListener('hashchange',navigate);return()=>window.removeEventListener('hashchange',navigate)},[]);
 useEffect(()=>{document.title=isCatalog?'Catálogo · Herleon':isPrivacy?'Tratamiento de datos personales · Herleon':isComplaints?'Libro de Reclamaciones · Herleon':isQuote?'Cotiza tu proyecto · Herleon':isAbout?'Nosotros · Herleon':isDoors?'Puertas · Herleon':isWindows?'Ventanas · Herleon':isMamparas?'Mamparas · Herleon':isRoofs?'Techos sol y sombra · Herleon':isMirrors?'Espejos · Herleon':isTestimonials?'Testimonios · Herleon':'Herleon · Espacios que se viven mejor';if(isInner){window.scrollTo({top:0,behavior:'instant'})}else{const id=route.slice(1);if(id)requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'}))}},[route,isCatalog,isPrivacy,isComplaints,isQuote,isAbout,isDoors,isWindows,isMamparas,isRoofs,isMirrors,isTestimonials,isInner]);
 const open=(service='')=>{const hash='#/cotizar'+(service?'?servicio='+encodeURIComponent(service):'');if(window.location.hash===hash)window.scrollTo({top:0,behavior:'smooth'});else window.location.hash=hash;};
 const select=id=>setCatalogRequest({id});
 return <div className={isInner?'quote-route':'home-route'}><a className="skip" href="#main" onClick={e=>{e.preventDefault();const main=document.getElementById('main');main?.focus();main?.scrollIntoView({behavior:'smooth'})}}>Ir al contenido</a><Header onQuote={()=>open()} onSelectCategory={select}/><main id="main" tabIndex={-1}>{isCatalog?<CatalogPage/>:isPrivacy?<PrivacyPage/>:isComplaints?<ComplaintsPage/>:isQuote?<QuotePage key={route} initialService={service} initialDetail={new URLSearchParams(route.split('?')[1]||'').get('detalle')||''}/>:isAbout?<AboutPage/>:isDoors?<DoorsPage/>:isWindows?<WindowsPage/>:isMamparas?<MamparasPage/>:isRoofs?<RoofsPage/>:isMirrors?<MirrorsPage/>:isTestimonials?<TestimonialsPage/>:<><Hero/><Catalog onQuote={open} selectionRequest={catalogRequest}/><About/><Testimonials/><Process onQuote={()=>open()}/></>}</main><Footer onQuote={()=>open()} onSelectCategory={select}/><FloatingWhatsApp/></div>
}
