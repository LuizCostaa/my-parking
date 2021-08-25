import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    hideRememberUser: boolean = true;
    languages: Array<any> = [];
    loginUrl: String = 'http://localhost:3000/login';
    loginErrors: Array<any> = [];

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    ngOnInit() { }

    onLogin(event: any) {

        this.http.post(`${this.loginUrl}?email=${event.login}&senha=${event.password}`, {}).subscribe((data: any) => {
            if (data.loginErrors) {
                this.loginErrors.push(data.loginErrors);
            } else if (data.Authenticaded === true) {
                this.router.navigate(['/parkingList'], { queryParams: { Authenticaded: true } });
            }
        });
    }

}
