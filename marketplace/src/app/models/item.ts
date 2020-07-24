// Item received from server
export interface Item extends PartialItem {
    id: string;
    imageUrls: string[];
    totalViews: number;
    // more fields
}

// Items uploaded to server
export interface UploadedItem extends PartialItem {
    uploadedImages: string[];
}

// Item info that user fills out
export interface PartialItem {
    name: string;
    seller: string;
    description: string;
    price: string;
}

// Server response for GET items endpoint
export interface ItemResponse {
    items: Item[];
}
