import { Product } from '../types';

import imgCollarHalo from '../assets/images/collar_halo.jpg';
import imgCollarCalypso from '../assets/images/collar_calypso.jpg';
import imgCollarElectra from '../assets/images/collar_electra.jpg';
import imgPulseraSyra from '../assets/images/pulsera_syra.jpg';
import imgCollarVolans from '../assets/images/collar_volans.jpg';
import imgCollarLunna from '../assets/images/collar_lunna.jpg';
import imgPulseraAstra from '../assets/images/pulsera_astra.jpg';
import imgCollarAlaska from '../assets/images/collar_alaska.jpg';
import imgPulseraNova from '../assets/images/pulsera_nova.jpg';
import imgCollarNoctis from '../assets/images/collar_noctis.jpg';
import imgCollarLove from '../assets/images/collar_love.jpg';

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
    pricePlaceholder: '$15.000',
    image: imgCollarHalo,
    details: ['Largo regulable', 'Material hipoalergénico', 'Diseño exclusivo con dijes colgantes'],
    material: 'Acero Inoxidable',
    dimensions: '38 cm'
  },
  {
    id: 'collar-calypso',
    name: 'Collar Calypso',
    category: 'necklace',
    description: 'Collar plateado con dije de sol, inspirado en una estética celestial.',
    pricePlaceholder: '$12.000',
    image: imgCollarCalypso,
    details: ['Dije de sol grabado', 'Estética minimalista', 'Largo intermedio ideal para layering'],
    material: 'Acero Inoxidable',
    dimensions: '41 cm + 4 cm de alargue'
  },
  {
    id: 'collar-electra',
    name: 'Collar Electra',
    category: 'necklace',
    description: 'Collar largo plateado con dije de rayo, con una estética más intensa.',
    pricePlaceholder: '$15.000',
    image: imgCollarElectra,
    details: ['Cadena más larga', 'Dije de rayo moderno', 'Aporta un toque de actitud y brillo'],
    material: 'Acero Inoxidable',
    dimensions: '72 cm'
  },
  {
    id: 'pulsera-syra',
    name: 'Pulsera Syra',
    category: 'bracelet',
    description: 'Pulsera plateada con dije central, simple y delicada.',
    pricePlaceholder: '$8.500',
    image: imgPulseraSyra,
    details: ['Cadena ultrafina', 'Dije geométrico pulido', 'Cierre seguro y regulable'],
    material: 'Acero Inoxidable',
    dimensions: '13 cuadraditos'
  },
  {
    id: 'collar-volans',
    name: 'Collar Volans',
    category: 'necklace',
    description: 'Collar plateado con dije de ala, liviano y simbólico.',
    pricePlaceholder: '$12.000',
    image: imgCollarVolans,
    details: ['Dije de ala calada', 'Brillo sutil', 'Ideal para usar todos los días'],
    material: 'Acero Inoxidable',
    dimensions: '44 cm'
  },
  {
    id: 'collar-lunna',
    name: 'Collar Lunna',
    category: 'necklace',
    description: 'Collar plateado con dije de media luna, un amuleto delicado para tu día a día.',
    pricePlaceholder: '$15.000',
    image: imgCollarLunna,
    details: ['Dije de luna pulido', 'Estilo celestial y moderno', 'Ajustable a tu medida'],
    material: 'Acero Inoxidable',
    dimensions: '42 cm'
  },
  {
    id: 'pulsera-astra',
    name: 'Pulsera Astra',
    category: 'bracelet',
    description: 'Pulsera plateada adornada con sutiles destellos de estrellas.',
    pricePlaceholder: '$8.500',
    image: imgPulseraAstra,
    details: ['Estrellitas colgantes', 'Movimiento delicado', 'Ideal para combinar con el Collar Halo'],
    material: 'Acero Inoxidable',
    dimensions: ''
  },
  {
    id: 'collar-alaska',
    name: 'Collar Alaska',
    category: 'necklace',
    description: 'Collar plateado con dije facetado de diseño geométrico, elegante e imponente.',
    pricePlaceholder: '$18.000',
    image: imgCollarAlaska,
    details: ['Dije geométrico exclusivo', 'Cadena reforzada sutil', 'Gran brillo y textura'],
    material: 'Acero Inoxidable',
    dimensions: ''
  },
  {
    id: 'pulsera-nova',
    name: 'Pulsera Nova',
    category: 'bracelet',
    description: 'Pulsera plateada con esferas sutiles que atrapan la luz con delicadeza.',
    pricePlaceholder: '$8.500',
    image: imgPulseraNova,
    details: ['Esferas minimalistas', 'Diseño moderno y ligero', 'Cierre de mosquetón seguro'],
    material: 'Acero Inoxidable',
    dimensions: ''
  },
  {
    id: 'collar-noctis',
    name: 'Collar Noctis',
    category: 'necklace',
    description: 'Collar plateado inspirado en el cielo nocturno, misterioso y elegante.',
    pricePlaceholder: '$18.000',
    image: imgCollarNoctis,
    details: ['Diseño inspirado en la noche', 'Terminación pulida espejo', 'Cadena de alta calidad'],
    material: 'Acero Inoxidable',
    dimensions: ''
  },
  {
    id: 'collar-love',
    name: 'Collar Love',
    category: 'necklace',
    description: 'Collar plateado con un delicado dije de corazón, un clásico con impronta minimalista.',
    pricePlaceholder: '$15.000',
    image: imgCollarLove,
    details: ['Dije de corazón sutil', 'Largo clásico regulable', 'Perfecto para llevar siempre con vos'],
    material: 'Acero Inoxidable',
    dimensions: ''
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
