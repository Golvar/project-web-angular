import { Product } from 'src/app/models/product'

export class LoadProducts {
    static readonly type = '[Product] LoadProducts';
    constructor() {}
}

export class AddProduct {
    static readonly type = '[Product] AddProduct';
    constructor(public product: Product) {}
}


export class DelProduct {
    static readonly type = '[Product] DelProduct';
    constructor(public product: Product) {}
}

export class DetailProduct {
    static readonly type = '[Product] DetailProduct';
    constructor(public product: Product) {}
}