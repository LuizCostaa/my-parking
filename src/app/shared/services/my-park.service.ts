import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IVaga } from '../models/vaga.model';

@Injectable({
	providedIn: 'root'
})

export class MyParkService {

	private readonly apiUrl = 'http://localhost:3000/vagas';

	constructor(private http: HttpClient) { }

	public list() {
		return this.http.get<IVaga[]>(this.apiUrl);
	}

	public update(vaga: IVaga) {
		return this.http.put<IVaga>(`${this.apiUrl}/${vaga.id}`, vaga);
	}

}

