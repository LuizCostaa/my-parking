import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Vaga } from '../models/vaga.model';

@Injectable()
export class MyParkService {

	private apiUrl = '';

	constructor(private http: HttpClient ) {}

	public getAll(): Observable<Vaga> {
		return this.http.get<Vaga>(`${this.apiUrl}`);
	}

	public getById(id: number): Observable<Vaga> {
		return this.http.get<Vaga>(`${this.apiUrl}/${id}`);
	}

	public create(model: Vaga): Observable<Vaga> {
		return this.http.post<Vaga>(`${this.apiUrl}`, model);
	}

	public update(model: Vaga): Observable<Vaga> {
		return this.http.put<Vaga>(`${this.apiUrl}/${model.id}`, model);
	}

	public delete(id: number): Observable<Vaga> {
		return this.http.delete<Vaga>(`${this.apiUrl}/${id}`);
	}

}


