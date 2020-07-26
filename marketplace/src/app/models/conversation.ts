export interface Message {
    name: string;
    date: string;
    text: string;
    fromCurrentUser: boolean;
}

export interface Conversation {
    name: string;
    history: Message[];
}