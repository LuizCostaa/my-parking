import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';



const route: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        PoModule,
        PoTemplatesModule,
        RouterModule.forChild(route)
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginModule { }
