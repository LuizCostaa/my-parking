import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatIconModule } from '@angular/material';

import { MainNavComponent } from './main-nav.component';

@NgModule({
	declarations: [
		MainNavComponent,
	],
	imports: [
		CommonModule,
		LayoutModule,
		MatToolbarModule,
		MatIconModule
	],
	exports: [
		MainNavComponent
	],
	providers: [],
})
export class MainNavModule { }
