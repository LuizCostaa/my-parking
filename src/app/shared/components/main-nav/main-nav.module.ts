import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { MainNavComponent } from './main-nav.component';

@NgModule({
	declarations: [
		MainNavComponent,
	],
	imports: [
		CommonModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule
	],
	exports: [
		MainNavComponent
	],
	providers: [],
})
export class MainNavModule { }
