export class Service {
    constructor(init?: Partial<Service>) {
        Object.assign(this, init);
    }

    _id: string = '';
    name: string = '';
    description: string = '';
    price: number = 0;
    duration: number = 0;
    category: string = '';
    availability: boolean = true; //disponibilidad
    image: string = '';
    reviews: string[] = [];
    tags: string[] = [];
    discount: number = 0; //promociones o descuentos
    relatedServices: string[] = []; // servicios relacionados

    created_at: Date = new Date();
    updated_at: Date = new Date();

}