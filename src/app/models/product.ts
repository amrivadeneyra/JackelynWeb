import { Category } from "./category";

export class Product {
    constructor(init?: Partial<Product>) {
        Object.assign(this, init);
    }
    _id: string = '';
    name: string = '';
    price: number = 0;
    description: string = '';
    category: number = 0;
    stock: number = 0;
    quantity: number = 0;
    totalPrice: number = 0;
    imageUrl: string = '';
    barcode: string = ''; //código de barras
    onSale: boolean = false; //promoción
    unitsPerPackage: number = 1; //indica cuántas unidades vienen en un paquete
    reviews: string[] = []; // reseñas

    created_at: Date = new Date();
    updated_at: Date = new Date();

}