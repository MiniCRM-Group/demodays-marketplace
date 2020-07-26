
import { Injectable } from '@angular/core';
import { Conversation, Message } from '../models/conversation';
import { Item } from '../models/item';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChatService {
    private _conversations: Conversation[] = [];
    private conversationsSubject = new BehaviorSubject<Conversation[]>([]);
    public conversations$: Observable<Conversation[]> = this.conversationsSubject.asObservable();
    private openedConversationSubject = new BehaviorSubject<Conversation>({
        name: 'Loading...',
        history: []
    });
    public openedConveration$: Observable<Conversation> = this.openedConversationSubject.asObservable();

    constructor(){}

    public createConversation(item: Item) {
        const newConvo: Conversation = {
            name: item.name,
            history: [
                {
                    name: item.seller,
                    date: '1 min ago',
                    text: 'Hey Roddy! Thanks for reaching out. Do you have any questions for me?',
                    fromCurrentUser: false
                }
            ]
        };
        this._conversations.push(newConvo);
        this.conversationsSubject.next(Array.from(this._conversations));
    }

    public pushMessageToConvo(convoName: string, msg: Message) {
        this._conversations.forEach((convo: Conversation) => {
            if(convo.name === convoName) {
                convo.history.push(msg);
                if(this.openedConversationSubject.value.name === convoName) {
                    this.openedConversationSubject.next(convo);
                }
                this.conversationsSubject.next(Array.from(this._conversations));
                return;
            }
        });
    }

    public clickOnConversation(convoName: string) {
        const convo = this._conversations.find((convo: Conversation) => {
            return convo.name === convoName;
        });
        if(convo !== undefined) {
            this.openedConversationSubject.next(convo);
        }
    }
}
