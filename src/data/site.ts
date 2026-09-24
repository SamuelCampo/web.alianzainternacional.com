// Contenido editable de la landing. Los valores entre [corchetes] están pendientes.

export const site = {
  brand: 'Alianza Internacional',
  legalName: 'Comercial Slim 2018, C.A.',
  rif: 'J-41235189-3',
  address: 'Av. Urdaneta, esq. Madrices a Ibarras, Edif. Alfa Beta, PB, Local 03, Caracas, Distrito Capital 1010',
  title: 'Compra hoy con 45% de inicial y paga a cuotas',
  description:
    'Llévatelo hoy con solo el 45% de inicial. Paga el resto en 4 cuotas semanales o 2 quincenales por Pago Móvil o transferencia.',
  contact: {
    email: 'alianzatecnica2025@gmail.com',
    whatsapp: '+58 424-4444141',
    social: '[REDES SOCIALES]',
  },
  /** URL que recibe el formulario de tiendas (p. ej. Formspree o tu API). Vacío = desactivado. */
  partnerFormAction: '',
};

/** Enlace directo al chat de WhatsApp (canal oficial y de soporte). */
export const whatsappUrl = `https://wa.me/${site.contact.whatsapp.replace(/\D/g, '')}`;

export const nav = [
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#calculadora', label: 'Calcula tu plan' },
  { href: '#tiendas', label: 'Tiendas' },
  { href: '#preguntas', label: 'Preguntas' },
];

export const calculatorPrices = [70, 150, 320];

export const stores = [
  { initials: 'N', name: 'Nova Tech', tagline: 'Tecnología y accesorios', tone: 'dark' },
  { initials: 'C', name: 'Casa Viva', tagline: 'Hogar y decoración', tone: 'green' },
  { initials: 'TH', name: 'Tech Haven', tagline: 'Tecnología para tu día a día', tone: 'blue' },
] as const;

export const products = [
  { name: 'Audífonos inalámbricos', store: 'Nova Tech', price: 150 },
  { name: 'Reloj de mano', store: 'Tech Haven', price: 70 },
  { name: 'Smartwatch deportivo', store: 'Tech Haven', price: 320 },
  { name: 'Cafetera eléctrica', store: 'Casa Viva', price: 90 },
];

export const faqs: { q: string; a: string; pending?: string }[] = [
  { q: '¿Qué necesito para registrarme?', a: 'Tu nombre, correo, teléfono y una contraseña. Aceptas los términos y la política de privacidad y ya puedes comprar.' },
  { q: '¿Cuánto pago de inicial?', a: 'Siempre el 45% del precio a cuotas. El 55% restante lo divides en cuotas iguales.' },
  { q: '¿Semanal o quincenal: cuál me conviene?', a: 'Pagas lo mismo en total. Semanal son 4 cuotas más pequeñas; quincenal son 2 cuotas más grandes. Elige según cuándo cobras.' },
  { q: '¿Cómo pago?', a: 'Por Pago Móvil o transferencia, con los datos que te muestra la app. Luego subes el comprobante y lo revisamos.' },
  { q: '¿Cuándo envían mi producto?', a: 'Cuando aprobamos tu inicial, tu pedido pasa a preparación y despacho. Puedes seguir su estado en la app.' },
  { q: '¿Qué tasa de cambio usan?', a: 'Los precios están en USD y ves el monto en bolívares con la tasa del día. La tasa aplicada queda guardada en cada pago.', pending: '[Por confirmar: tasa al reportar o al aprobar]' },
  { q: '¿Cuándo vence mi primera cuota?', a: '', pending: '[Por confirmar: 7 o 15 días después de aprobar la inicial]' },
  { q: '¿Puedo adelantar cuotas?', a: '', pending: '[Por confirmar: recomendado sí, sin penalización]' },
  { q: '¿Qué pasa si me atraso?', a: '', pending: '[Por definir en las políticas de crédito y cobro]' },
];
