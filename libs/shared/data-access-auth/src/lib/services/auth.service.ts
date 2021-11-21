import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CONSTANTS, UserRequestModel } from '@nx-angular-nest/shared/utils-interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(protected http: HttpClient) {
  }

  login(credentials: { username: string; password: string }) {
    return this.http.post(`${CONSTANTS.API_URL}/auth/login`, credentials)
  }

  registerUser(credentials: UserRequestModel): Observable<any> {
    return this.http.post(`${CONSTANTS.API_URL}/auth/register`, credentials);
  }
}
