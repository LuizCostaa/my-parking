import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { ParkingListModule } from './parking-list/parking-list.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PoModule,
        PoTemplatesModule,
        ParkingListModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: []
})
export class AppModule { }
