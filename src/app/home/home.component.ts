import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IVaga } from '../shared/models/vaga.model';
import { MyParkService } from '../shared/services/my-park.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	preserveWhitespaces: true
})
export class HomeComponent implements OnInit {

	vagas$: Observable<IVaga[]>;
	error$ = new Subject<boolean>();

	constructor(
		private service: MyParkService,
		private router: Router
	) { }

	ngOnInit() {
		this.vagas$ = this.service.list().pipe(
			catchError(error => {
				console.error(error);
				this.error$.next(true);
				return empty();
			})
		);
	}

	private navigateToEdit(id: number): void {
		this.router.navigate(['/home/edit', id]);
	}

}
