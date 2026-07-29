import { Product } from '../types';

// CONFIGURACIÓN DE CONTACTO Y REDES SOCIALES
// Reemplazá estos valores con tus datos reales para activar los enlaces directos.
export const BRAND_CONFIG = {
  name: 'CREALIA',
  instagram: 'crealia___', // Tu usuario de Instagram (ej. @crealia___)
  whatsappNumber: '5491161917678', // Tu número de WhatsApp con código de país sin el "+" para el link de wa.me
  whatsappDisplay: '+54 9 11 6191-7678', // Formato estético para mostrar al usuario
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
    pricePlaceholder: '$18.000',
    image: '/images/collar_halo.jpg',
    details: ['Largo regulable', 'Sutil y confortable', 'Diseño exclusivo con dijes colgantes'],
    dimensions: '38,5 cm'
  },
  {
    id: 'collar-calypso',
    name: 'Collar Calypso',
    category: 'necklace',
    description: 'Collar plateado con dije de sol, inspirado en una estética celestial.',
    pricePlaceholder: '$16.000',
    image: '/images/collar_calypso.jpg',
    details: ['Dije de sol grabado', 'Estética minimalista', 'Largo intermedio ideal para layering'],
    dimensions: '43 cm'
  },
  {
    id: 'collar-electra',
    name: 'Collar Electra',
    category: 'necklace',
    description: 'Collar largo plateado con dije de rayo, con una estética más intensa.',
    pricePlaceholder: '$18.000',
    image: '/images/collar_electra.jpg',
    details: ['Cadena más larga', 'Dije de rayo moderno', 'Aporta un toque de actitud y brillo'],
    dimensions: '46 cm'
  },
  {
    id: 'pulsera-syra',
    name: 'Pulsera Syra',
    category: 'bracelet',
    description: 'Pulsera plateada con dije central, simple y delicada.',
    pricePlaceholder: '$10.000',
    image: '/images/pulsera_syra.jpg',
    details: ['Cadena ultrafina', 'Dije geométrico pulido', 'Cierre seguro y regulable'],
    dimensions: '19 cm'
  },
  {
    id: 'collar-volans',
    name: 'Collar Volans',
    category: 'necklace',
    description: 'Collar plateado con dije de ala, liviano y simbólico.',
    pricePlaceholder: '$16.000',
    image: '/images/collar_volans.jpg',
    details: ['Dije de ala calada', 'Brillo sutil', 'Ideal para usar todos los días'],
    dimensions: '44 cm'
  },
  {
    id: 'collar-lunna',
    name: 'Collar Lunna',
    category: 'necklace',
    description: 'Collar plateado con dije de media luna, un amuleto delicado para tu día a día.',
    pricePlaceholder: '$18.000',
    image: '/images/collar_lunna.jpg',
    details: ['Dije de luna pulido', 'Estilo celestial y moderno', 'Ajustable a tu medida'],
    dimensions: '41 cm'
  },
  {
    id: 'pulsera-astra',
    name: 'Pulsera Astra',
    category: 'bracelet',
    description: 'Pulsera plateada adornada con sutiles destellos de estrellas.',
    pricePlaceholder: '$10.000',
    image: '/images/pulsera_astra.jpg',
    details: ['Estrellitas colgantes', 'Movimiento delicado', 'Ideal para combinar con el Collar Halo'],
    dimensions: '19 cm'
  },
  {
    id: 'collar-alaska',
    name: 'Collar Alaska',
    category: 'necklace',
    description: 'Collar plateado con dije facetado de diseño geométrico, elegante e imponente.',
    pricePlaceholder: '$20.000',
    image: '/images/collar_alaska.jpg',
    details: ['Dije geométrico exclusivo', 'Cadena reforzada sutil', 'Gran brillo y textura'],
    dimensions: '47 cm'
  },
  {
    id: 'pulsera-nova',
    name: 'Pulsera Nova',
    category: 'bracelet',
    description: 'Pulsera plateada con esferas sutiles que atrapan la luz con delicadeza.',
    pricePlaceholder: '$10.000',
    image: '/images/pulsera_nova.jpg',
    details: ['Esferas minimalistas', 'Diseño moderno y ligero', 'Cierre de mosquetón seguro'],
    dimensions: '19 cm'
  },
  {
    id: 'collar-noctis',
    name: 'Collar Noctis',
    category: 'necklace',
    description: 'Collar plateado inspirado en el cielo nocturno, misterioso y elegante.',
    pricePlaceholder: '$20.000',
    image: '/images/collar_noctis.jpg',
    details: ['Diseño inspirado en la noche', 'Terminación pulida espejo', 'Cadena de alta calidad'],
    dimensions: '67,5 cm'
  },
  {
    id: 'collar-love',
    name: 'Collar Love',
    category: 'necklace',
    description: 'Collar plateado con un delicado dije de corazón, un clásico con impronta minimalista.',
    pricePlaceholder: '$16.000',
    image: '/images/collar_love.jpg',
    details: ['Dije de corazón sutil', 'Largo clásico regulable', 'Perfecto para llevar siempre con vos'],
    dimensions: '42,5 cm'
  },
  {
    id: 'pulsera-travel',
    name: 'Pulsera Travel',
    category: 'bracelet',
    description: 'Pulsera delicada y ligera, con un diseño ideal para acompañarte a todos lados.',
    pricePlaceholder: '$10.000',
    image: '/images/pulsera_travel.jpg',
    details: ['Cierre seguro y regulable', 'Diseño sutil y versátil', 'Ideal para layering'],
    dimensions: '18 cm'
  },
  {
    id: 'pulsera-stars',
    name: 'Pulsera Stars',
    category: 'bracelet',
    description: 'Pulsera dorada adornada con delicados destellos de estrellas.',
    pricePlaceholder: '$10.000',
    image: '/images/pulsera_stars.jpg',
    details: ['Detalles de estrellas brillantes', 'Tono dorado cálido', 'Combinación perfecta para cualquier look'],
    dimensions: '18 cm'
  },
  {
    id: 'collar-volt',
    name: 'Collar Volt',
    category: 'necklace',
    description: 'Collar con un toque de actitud y brillo distintivo, moderno e imponente.',
    pricePlaceholder: '$16.000',
    image: '/images/collar_volt.jpg',
    details: ['Diseño contemporáneo', 'Aporta luz y textura', 'Ideal para usar solo o en capas'],
    dimensions: '42 cm'
  },
  {
    id: 'collar-cruzia',
    name: 'Collar Cruzia',
    category: 'necklace',
    forMen: true,
    description: 'Collar largo con dije de cruz estilizada, atemporal y elegante.',
    pricePlaceholder: '$18.000',
    image: '/images/collar_cruiza.jpg',
    details: ['Largo especial de presencia', 'Terminación pulida brillante', 'Diseño sobrio y distinguido'],
    dimensions: '62 cm'
  },
  {
    id: 'pulsera-roma',
    name: 'Pulsera Roma',
    category: 'bracelet',
    forMen: true,
    description: 'Pulsera de eslabón fino y diseño equilibrado, sobria y cómoda.',
    pricePlaceholder: '$10.000',
    image: '/images/pulsera_roma.jpg',
    details: ['Eslabón fino pulido', 'Confortable para el uso diario', 'Cierre seguro'],
    dimensions: '20 cm'
  },
  {
    id: 'pulsera-atlas',
    name: 'Pulsera Atlas',
    category: 'bracelet',
    forMen: true,
    description: 'Pulsera de eslabones con mayor presencia y estructura moderna.',
    pricePlaceholder: '$10.000',
    image: '/images/pulsera_atlas.jpg',
    details: ['Eslabón con carácter', 'Diseño firme y elegante', 'Aporta un estilo único'],
    dimensions: '19 cm'
  },
  {
    id: 'pulsera-marea',
    name: 'Pulsera Marea',
    category: 'bracelet',
    description: 'Pulsera dorada destacada por su clásico y elegante cierre marinero.',
    pricePlaceholder: '$10.000',
    image: '/images/pulsera_marea.jpg',
    details: ['Cierre marinero distintivo', 'Tono dorado atemporal', 'Diseño fino y versátil'],
    dimensions: '18 cm'
  },
  {
    id: 'collar-heart',
    name: 'Collar Heart',
    category: 'necklace',
    description: 'Collar delicado con dije de corazón, un clásico atemporal y romántico.',
    pricePlaceholder: '$16.000',
    image: '/images/collar_heart.jpg',
    details: ['Dije de corazón romántico', 'Terminación pulida de alto brillo', 'Diseño delicado e ideal para regalar'],
    dimensions: '38 cm'
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
