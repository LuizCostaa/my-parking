import { Component, OnInit } from '@angular/core';
import { MyParkService } from '../shared/services/my-park.service';
import { Vaga } from '../shared/models/vaga.model';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	preserveWhitespaces: true
})
export class HomeComponent implements OnInit {

	vagas: Vaga[];

	constructor(private service: MyParkService) { }

	ngOnInit() {
		this.service.list().subscribe(vagas => {
			this.vagas = vagas;
		});
	}

}
