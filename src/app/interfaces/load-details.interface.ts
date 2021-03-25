export interface LoadDetails {
    pictures: [
        {
            url: string;
        }
    ];
    shipping: {
        free_shipping: boolean
    };
    title: string;
    seller_id: number;
    price: number;
    original_price: number;
    available_quantity: number;
    thumbnail: string;
}