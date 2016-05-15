import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {LibUser} from './user';
import {HttpServies} from '../http-common.service';

@Injectable()
export class LoginService {

    public user: LibUser;

    constructor(private _httpService: HttpServies) {

    }


    login(user: LibUser): Observable<LibUser> {
        this.user = user;
        return this._httpService.callSave("user/authenticate",JSON.stringify(user));  
    }

    logout(): Observable<LibUser> {
        this.user = null;
        return Observable.of(this.user);
    }

    signUp(user: LibUser){
        this.user = user;
        return this._httpService.callSave("user/register",JSON.stringify(user));
    }
}