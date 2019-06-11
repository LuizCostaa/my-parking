import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MainNavModule } from '../shared/components/main-nav/main-nav.module';

@NgModule({

	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		HomeRoutingModule,
		MainNavModule
	],
	declarations: [
		HomeComponent,
	],
	exports: [
		HomeComponent
	],
	providers: [],
})

export class HomeModule { }


