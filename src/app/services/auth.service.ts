import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private httpClient: HttpClient, private userService: UserService) { }

    register(u: any) {
        return this.httpClient.post<any>(environment.production + 'register', u);
    }

    login(u: any) {
        return this.httpClient.post<any>(environment.production + 'login', u).pipe(
            map(res => {
                this.userService.setToken(res.accessToken);
                return res;
            })
        );
    }
}