export const contact = {
 whatsapp: '51904195280',
 whatsappDisplay: '+51 904 195 280',
 instagram: 'https://www.instagram.com/herleon.peru/',
 facebook: 'https://www.facebook.com/herleon.peru/',
};
export function whatsappLink(message='Hola, Herleon. Quisiera información sobre sus servicios.') {
 return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
