import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { ItemResponse } from "../models/item";

export class RetrieveItemService {
    endpoint = '/api/retrieve-items'
    constructor(private http: HttpClient) {}
    getItems(): Observable<ItemResponse> {
        return of({
            items: [] // put more dummmy items here
        });
    }
}