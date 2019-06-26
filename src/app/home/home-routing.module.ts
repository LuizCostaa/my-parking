import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { EditFormComponent } from './edit-form/edit-form.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'edit/:id',
		component: EditFormComponent
	}
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule { }
