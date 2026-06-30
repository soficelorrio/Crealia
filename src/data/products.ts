import { Product } from '../types';

// CONFIGURACIÓN DE CONTACTO Y REDES SOCIALES
// Reemplazá estos valores con tus datos reales para activar los enlaces directos.
export const BRAND_CONFIG = {
  name: 'CREALIA',
  instagram: 'crealia___', // Tu usuario de Instagram (ej. @crealia___)
  whatsappNumber: '5491123456789', // Tu número de WhatsApp con código de país sin el "+" (ej. 5491123456789)
  email: 'hola@crealiajoyas.com', // Tu correo electrónico de contacto
  defaultMessage: '¡Hola! Estoy visitando la web y me gustaría hacer una consulta.',
  productInquiryMessage: (productName: string) => 
    `¡Hola! Estoy interesada en la joya "${productName}" y me gustaría consultar su disponibilidad y precio.`
};

export const PRODUCTS: Product[] = [
  {
    id: 'collar-halo',
    name: 'Collar Halo',
    category: 'necklace',
    description: 'Collar plateado con dijes de estrellas, delicado y luminoso.',
    pricePlaceholder: '$15.000',
    image: '/src/assets/images/collar_halo.png',
    details: ['Largo regulable', 'Material hipoalergénico', 'Diseño exclusivo con dijes colgantes']
  },
  {
    id: 'collar-calypso',
    name: 'Collar Calypso',
    category: 'necklace',
    description: 'Collar plateado con dije de sol, inspirado en una estética celestial.',
    pricePlaceholder: '$12.000',
    image: '/src/assets/images/collar_calypso.png',
    details: ['Dije de sol grabado', 'Estética minimalista', 'Largo intermedio ideal para layering']
  },
  {
    id: 'collar-electra',
    name: 'Collar Electra',
    category: 'necklace',
    description: 'Collar largo plateado con dije de rayo, con una estética más intensa.',
    pricePlaceholder: '$15.000',
    image: '/src/assets/images/collar_electra.png',
    details: ['Cadena más larga', 'Dije de rayo moderno', 'Aporta un toque de actitud y brillo']
  },
  {
    id: 'pulsera-syra',
    name: 'Pulsera Syra',
    category: 'bracelet',
    description: 'Pulsera plateada con dije central, simple y delicada.',
    pricePlaceholder: '$8.500',
    image: '/src/assets/images/pulsera_syra.png',
    details: ['Cadena ultrafina', 'Dije geométrico pulido', 'Cierre seguro y regulable']
  },
  {
    id: 'collar-volans',
    name: 'Collar Volans',
    category: 'necklace',
    description: 'Collar plateado con dije de ala, liviano y simbólico.',
    pricePlaceholder: '$12.000',
    image: '/src/assets/images/collar_volans.png',
    details: ['Dije de ala calada', 'Brillo sutil', 'Ideal para usar todos los días']
  },
  {
    id: 'collar-lunna',
    name: 'Collar Lunna',
    category: 'necklace',
    description: 'Collar plateado con dije de media luna, un amuleto delicado para tu día a día.',
    pricePlaceholder: '$15.000',
    image: '/src/assets/images/collar_minimalista_1782774011460.jpg',
    details: ['Dije de luna pulido', 'Estilo celestial y moderno', 'Ajustable a tu medida']
  },
  {
    id: 'pulsera-astra',
    name: 'Pulsera Astra',
    category: 'bracelet',
    description: 'Pulsera plateada adornada con sutiles destellos de estrellas.',
    pricePlaceholder: '$8.500',
    image: '/src/assets/images/pulsera_astra.png',
    details: ['Estrellitas colgantes', 'Movimiento delicado', 'Ideal para combinar con el Collar Halo']
  },
  {
    id: 'collar-alaska',
    name: 'Collar Alaska',
    category: 'necklace',
    description: 'Collar plateado con dije facetado de diseño geométrico, elegante e imponente.',
    pricePlaceholder: '$18.000',
    image: '/src/assets/images/joyas_detalle_1782771929275.jpg',
    details: ['Dije geométrico exclusivo', 'Cadena reforzada sutil', 'Gran brillo y textura']
  },
  {
    id: 'pulsera-nova',
    name: 'Pulsera Nova',
    category: 'bracelet',
    description: 'Pulsera plateada con esferas sutiles que atrapan la luz con delicadeza.',
    pricePlaceholder: '$8.500',
    image: '/src/assets/images/pulsera_nova.png',
    details: ['Esferas minimalistas', 'Diseño moderno y ligero', 'Cierre de mosquetón seguro']
  },
  {
    id: 'collar-noctis',
    name: 'Collar Noctis',
    category: 'necklace',
    description: 'Collar plateado inspirado en el cielo nocturno, misterioso y elegante.',
    pricePlaceholder: '$18.000',
    image: '/src/assets/images/collar_estilo_1782771909040.jpg',
    details: ['Diseño inspirado en la noche', 'Terminación pulida espejo', 'Cadena de alta calidad']
  },
  {
    id: 'collar-love',
    name: 'Collar Love',
    category: 'necklace',
    description: 'Collar plateado con un delicado dije de corazón, un clásico con impronta minimalista.',
    pricePlaceholder: '$15.000',
    image: '/src/assets/images/collar_love.png',
    details: ['Dije de corazón sutil', 'Largo clásico regulable', 'Perfecto para llevar siempre con vos']
  }
];

export const CARE_ITEMS = [
  {
    id: 'care-1',
    iconName: 'DropletOff',
    title: 'Evitá Líquidos',
    description: 'Evitá el contacto con agua de mar, pileta, perfumes, cremas y productos de limpieza.'
  },
  {
    id: 'care-2',
    iconName: 'Box',
    title: 'Guardado Seco',
    description: 'Guardá tus joyas en su bolsita o en un joyero seco, libre de humedad y luz directa.'
  },
  {
    id: 'care-3',
    iconName: 'Sparkles',
    title: 'Limpieza Delicada',
    description: 'Limpiá tus piezas suavemente usando un paño de microfibra o algodón seco.'
  },
  {
    id: 'care-4',
    iconName: 'ShieldAlert',
    title: 'Evitá Golpes',
    description: 'Manipulá con suavidad para evitar tirones fuertes, golpes o caídas que puedan marcar el metal.'
  }
];

export const STEPS = [
  {
    number: 1,
    title: 'Elegí tus favoritas',
    description: 'Explorá nuestro catálogo y seleccioná los collares o pulseras que mejor expresen tu personalidad.'
  },
  {
    number: 2,
    title: 'Consultanos directo',
    description: 'Hacé clic en "Consultar" para abrir un chat directo por WhatsApp o visitá nuestro Instagram.'
  },
  {
    number: 3,
    title: 'Coordinamos pago y envío',
    description: 'Te confirmamos stock al instante y coordinamos el método de pago (transferencia, etc.) y la entrega.'
  },
  {
    number: 4,
    title: 'Recibí tu joya',
    description: 'Preparada con mucho amor, tu joya llega lista para lucir o para sorprender con un regalo especial.'
  }
];
