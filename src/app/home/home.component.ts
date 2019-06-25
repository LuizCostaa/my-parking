import { Component, OnInit } from '@angular/core';
import { MyParkService } from '../shared/services/my-park.service';
import { Vaga } from '../shared/models/vaga.model';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	preserveWhitespaces: true
})
export class HomeComponent implements OnInit {

	// vagas: Vaga[];
	vagas$: Observable<Vaga[]>;

	constructor(private service: MyParkService) { }

	ngOnInit() {
		// this.service.list().subscribe(vagas => this.vagas = vagas );

		this.vagas$ = this.service.list();
	}

	showAlert(vaga: Vaga) {
		alert(`
			Nome: ${vaga.veiculo.nomeDono}
			Modelo: ${vaga.veiculo.modelo}
			Placa: ${vaga.veiculo.placa}
		`);
	}

}
