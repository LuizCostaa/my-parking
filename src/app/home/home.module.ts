import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { EditFormComponent } from './edit-form/edit-form.component';
import { MatInputModule } from '@angular/material';

@NgModule({

	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		HomeRoutingModule,
		MatCardModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule
	],
	declarations: [
		HomeComponent,
		EditFormComponent,
	],
	exports: [
		HomeComponent
	],
	providers: [],
})

export class HomeModule { }


