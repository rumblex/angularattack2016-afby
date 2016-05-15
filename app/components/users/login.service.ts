import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {LibUser} from './user';

@Injectable()
export class LoginService {

    public user: LibUser;

    constructor() { }

    login(user: LibUser): Observable<LibUser> {
        this.user = user;
        return Observable.of(this.user);
    }

    logout(): Observable<LibUser> {
        this.user = null;
        return Observable.of(this.user);
    }

    signUp(user: LibUser): Observable<LibUser> {
        this.user = user;
        return Observable.of(this.user);
    }
}