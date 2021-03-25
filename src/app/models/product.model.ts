export class Product {
    constructor(
        public id: string,
        public thumbnail: string,
        public title: string,
        public price: string,
        public seller: {
            id: number
        },
        public seller_nick: string
    ) { }
}