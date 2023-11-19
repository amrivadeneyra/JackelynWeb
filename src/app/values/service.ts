import { Service } from "../models/service";

export const servicesValue: Service[] = [
    {
        _id: '1',
        name: 'Corte de pelo',
        description: 'Un corte moderno y elegante para un aspecto estilizado. Confía en nuestro servicio profesional para transformar tu estilo con maestría y precisión, brindándote un look único.',
        price: 50,
        duration: 45,
        category: 'Corte',
        availability: true,
        image: '../../../../assets/image/services/corte-cabello.jpg',
        reviews: ['Excelente servicio', 'Muy recomendado'],
        tags: ['Corte', 'Estilo', 'Moda'],
        discount: 0,
        relatedServices: [],
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        _id: '2',
        name: 'Tratamientos Faciales',
        description: 'Experimenta la renovación con nuestros tratamientos faciales rejuvenecedores. Disfruta de una experiencia facial increíble que realza tu belleza natural y te sumerge en un estado de relajación total.',
        price: 60,
        duration: 60,
        category: 'Facial',
        availability: true,
        image: '../../../../assets/image/services/tratamiento-facial.jpeg',
        reviews: ['Increíble experiencia facial'],
        tags: ['Facial', 'Belleza', 'Relajación'],
        discount: 0,
        relatedServices: [],
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        _id: '3',
        name: 'Manicura y Pedicura',
        description: 'Descubre el arte de la elegancia con nuestra manicura y pedicura profesional. Cuidamos tus uñas con maestría, ofreciendo un estilo impecable y pulido que realza tu imagen personal.',
        price: 40,
        duration: 60,
        category: 'Manicura',
        availability: true,
        image: '../../../../assets/image/services/uñas.jfif',
        reviews: ['Uñas perfectas'],
        tags: ['Manicura', 'Pedicura', 'Estilo'],
        discount: 0,
        relatedServices: [],
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        _id: '4',
        name: 'Tratamientos Capilares',
        description: 'Transforma la salud de tu cabello con nuestros tratamientos capilares especializados. Nuestros servicios están diseñados para mejorar la vitalidad y la apariencia de tu cabello, proporcionándote una melena radiante.',
        price: 70,
        duration: 60,
        category: 'Capilar',
        availability: true,
        image: '../../../../assets/image/services/tratamiento-cabello.jfif',
        reviews: ['Mejoró la salud de mi cabello'],
        tags: ['Capilar', 'Cabello', 'Salud'],
        discount: 0,
        relatedServices: [],
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        _id: '5',
        name: 'Terapias Alternativas',
        description: 'Sumérgete en un mundo de bienestar con nuestras terapias alternativas. Diseñadas para revitalizar cuerpo y mente, nuestras opciones de tratamiento promueven la relajación y el equilibrio general.',
        price: 80,
        duration: 60,
        category: 'Bienestar',
        availability: true,
        image: '../../../../assets/image/services/corte-cabello.jpg',
        reviews: ['Relajante y revitalizante'],
        tags: ['Bienestar', 'Relajación', 'Terapias'],
        discount: 0,
        relatedServices: [],
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        _id: '6',
        name: 'Maquillaje',
        description: 'Resalta tu belleza con nuestro maquillaje profesional. Ya sea para eventos especiales o simplemente para realzar tu rutina diaria, confía en nosotros para lograr un maquillaje impecable y duradero.',
        price: 60,
        duration: 60,
        category: 'Maquillaje',
        availability: true,
        image: '../../../../assets/image/services/maquillaje.jpg',
        reviews: ['Maquillaje impecable'],
        tags: ['Maquillaje', 'Estilo', 'Eventos'],
        discount: 0,
        relatedServices: [],
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        _id: '7',
        name: 'Peinados Especiales',
        description: 'Deja una impresión duradera con nuestros peinados especiales para ocasiones únicas. Desde elegantes recogidos hasta estilos modernos, nuestro servicio de peinado garantiza que te veas radiante en cada evento.',
        price: 65,
        duration: 60,
        category: 'Peinado',
        availability: true,
        image: '../../../../assets/image/services/peinado.jpg',
        reviews: ['Peinado elegante'],
        tags: ['Peinado', 'Estilo', 'Eventos'],
        discount: 0,
        relatedServices: [],
        created_at: new Date(),
        updated_at: new Date()
    },
];