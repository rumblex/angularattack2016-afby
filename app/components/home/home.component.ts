import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {NewBooksComponent} from './lists/new-books.component';
import {RandomBooksComponent} from './lists/random-book.component';
import {LoginService} from './../users/login.service';
import {LibUser} from './../users/user';


@Component({
    selector: 'home',
    directives: [NewBooksComponent, RandomBooksComponent],
    templateUrl: `app/components/home/home.template.html`
})
export class HomeComponent implements OnInit {

    private user: LibUser;
    private userName: string;
    private password: string;
    private confirmPassword: string;
    private contact:string;
    private active: boolean = true;
    public msg:string;

    constructor(private _router: Router, private _loginService: LoginService) { }

    ngOnInit() {
        this.user = this._loginService.user;
    }

    onclickUserView() {
        this._router.navigate(['BookCenter', 'BookUserComponent']);
    }

    onclick() {
        this._router.navigate(['BookCenter']);
    }

    onclickAboutUs() {
        this._router.navigate(['AboutUs']);
    }

    resetLogin() {
        this.userName = "";
        this.password = "";
        this.confirmPassword = "";
        this.contact = "";
        this.msg = "";
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    onLogin() {
        let checkUser: LibUser = new LibUser(this.userName, this.password);
        this._loginService.login(checkUser)
            .subscribe(data => {
                this.user = data;
                this._loginService.user=data;
                $("#cLoginForm").modal('hide');}, 
                error=> {
                    this.msg="Invalid Username/Password.";
                }
            );
    }

    onLogout() {
        this._loginService.logout()
            .subscribe(data => {
                this.user = data;
            })
    }
    
    onSignUp(){
        let checkUser: LibUser = new LibUser(this.userName, this.password,this.contact);
        this._loginService.signUp(checkUser)
            .subscribe(data => {
                this.user = data;
                this._loginService.user=data;
                $("#cSignUpForm").modal('hide');}
            );;
            
    }
}