export interface Item extends PartialItem {
    id: string;
    imageUrls: string[];
    // more fields
}

export interface UploadedItem extends PartialItem {
    uploadedImages: string[];
}

export interface PartialItem {
    name: string;
    seller: string;
    description: string;
    price: string;
}
