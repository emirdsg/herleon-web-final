import React,{useEffect,useRef,useState} from 'react';
import {ArrowRight,FileText,PanelsTopLeft,CalendarCheck,ShieldCheck} from 'lucide-react';
const story='Herleon nace de la unión de los apellidos Hernández y León, especializándose en la instalación de vidrios y aluminios para transformar espacios con estética, seguridad y funcionalidad. Para combatir la informalidad del sector, operamos con rigurosidad técnica y respaldamos cada proyecto mediante procesos estandarizados.';
const facts=[
 {Icon:FileText,title:'100%',text:'Contratos Formales y Facturados'},
 {Icon:PanelsTopLeft,title:'+12 Años',text:'De Experiencia Comprobada'},
 {Icon:CalendarCheck,title:'Cero Retrasos',text:'En cronogramas aprobados'},
 {Icon:ShieldCheck,title:'Certificada',text:'Garantía Post-Venta por Escrito'}
];
export default function About(){const factsRef=useRef(null);const [factsVisible,setFactsVisible]=useState(false);
useEffect(()=>{if(!('IntersectionObserver' in window)){setFactsVisible(true);return;}const observer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){setFactsVisible(true);observer.disconnect();}},{threshold:.25});if(factsRef.current)observer.observe(factsRef.current);return()=>observer.disconnect();},[]);
return <section className="about-reference" id="nosotros" aria-labelledby="about-title"><div className="about-reference-wrap"><div className="about-reference-grid"><div className="about-reference-copy"><span className="about-reference-eyebrow">SOBRE NOSOTROS</span><h2 id="about-title">Solidez, experiencia y<br className="about-title-break"/> tradición familiar</h2><p>{story}</p><a className="about-reference-button" href="#/nosotros">Conoce más sobre nosotros <ArrowRight size={18}/></a></div><div className="about-reference-visual"><img className="about-reference-image" src="/assets/ingeniero-herleon.png" alt="Profesional con casco y camisa de Herleon junto a una estructura de vidrio" loading="lazy" width="853" height="606"/></div></div><dl ref={factsRef} className={`about-facts ${factsVisible?"is-visible":""}`}>{facts.map(({Icon,title,text},index)=><div className="about-fact" key={title} style={{"--fact-delay":`${index*90}ms`}}><span className="about-fact-icon"><Icon size={23} strokeWidth={1.8} aria-hidden="true"/></span><div className="about-fact-copy"><dt>{title}</dt><dd>{text}</dd></div></div>)}</dl></div></section>}
