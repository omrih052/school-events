import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private token;

    constructor() { }

    setToken(t) {
        this.token = t;
    }

    getToken() {
        return this.token;
    }
}