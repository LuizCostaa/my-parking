import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vaga } from '../models/vaga.model';

@Injectable({
	providedIn: 'root'
})

export class MyParkService {

	private readonly apiUrl: 'http://localhost:3000/vagas';

	constructor(private http: HttpClient) { }

	public list() {
		return this.http.get<Vaga[]>(this.apiUrl);
	}
}