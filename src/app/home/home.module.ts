import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

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
		MainNavModule,
		MatCardModule,
		MatButtonModule
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


