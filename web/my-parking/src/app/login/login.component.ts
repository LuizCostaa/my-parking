import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    hideRememberUser: boolean = true;
    languages: Array<any> = [];

    constructor() { }

    ngOnInit() {
    }

}
