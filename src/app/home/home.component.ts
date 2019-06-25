import { Component, OnInit } from '@angular/core';
import { MyParkService } from '../shared/services/my-park.service';
import { Vaga } from '../shared/models/vaga.model';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	preserveWhitespaces: true
})
export class HomeComponent implements OnInit {

	vagas$: Observable<Vaga[]>;
	error$ = new Subject<boolean>();

	constructor(private service: MyParkService) { }

	ngOnInit() {
		this.vagas$ = this.service.list().pipe(
			catchError(error => {
				console.error(error);
				this.error$.next(true);
				return empty();
			})
		);
	}

}
