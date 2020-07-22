import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

/**
 * Handles uploading images to the server.
 */
@Injectable({
    providedIn: 'root'
  })
export class ImageService {
    private imageEndpoint = 'endpoint/images'
    constructor(private http: HttpClient) {}

    public uploadImage(image: File): Observable<any> {
        const formData = new FormData();
        formData.append('image', image);
        return this.http.post<any>(this.imageEndpoint, formData);
    }
}
