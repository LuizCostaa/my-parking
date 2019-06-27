import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { VagaResolverGuard } from './guards/vaga-resolver.guard';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'edit/:id',
		component: EditFormComponent,
		resolve: {
			vaga: VagaResolverGuard
		}
	}
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule { }
