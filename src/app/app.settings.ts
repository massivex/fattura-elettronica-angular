import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AppSettings {
    // public SkynetApiUrl = 'https://skynetapi.sediva.it';
    // public SkynetUrl = 'https://skynet.sediva.it';

    public SkynetApiUrl = 'http://localhost:8080';
    public SkynetUrl = 'http://localhost:3000';
}
