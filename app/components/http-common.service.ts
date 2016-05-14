import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class HttpServies {
    constructor(private http: Http) { }

    private _url:string='http://localhost:8080/';


    public callSearch(path:string){
        return this.http.get(this._url+path);
    }
    
    public callSave(path:string,body:string){
        return this.http.post(this._url+path,body)
    }    

    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Response status: ' + res.status);
        }
        let body = res.json();
        return body.data || {};
    }
    private handleError(error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}