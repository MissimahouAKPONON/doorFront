import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import {AuthService} from "../auth/auth.service";
import {User} from "../_models";

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient, private api: AuthService) { }

    getAll() {
        return this.http.get<User[]>(`${this.api.config}/users`);
    }
}