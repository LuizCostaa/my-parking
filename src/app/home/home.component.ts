import { Component, OnInit } from '@angular/core';
import { MyParkService } from '../shared/services/my-park.service';
import { Vaga } from '../shared/models/vaga.model';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	cursos: Vaga[];
	xablaus: any = [{ xablau: '1'}, {xablau: '2'}, {xablau: '3'}, {xablau: '3'}, {xablau: '3'}, {xablau: '3'}];

	constructor(private service: MyParkService) { }

	ngOnInit() {
		this.service.list().subscribe(console.log);
	}

}
