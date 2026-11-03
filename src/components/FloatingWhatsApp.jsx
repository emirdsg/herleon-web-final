import React from 'react';
import {whatsappLink} from '../config/contact.js';
import WhatsAppIcon from './WhatsAppIcon.jsx';
export default function FloatingWhatsApp(){return <a className="floating-whatsapp" aria-label="Consultar por WhatsApp" href={whatsappLink()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={30}/></a>}
