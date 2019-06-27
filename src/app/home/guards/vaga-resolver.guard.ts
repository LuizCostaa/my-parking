import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IVaga } from 'src/app/shared/models/vaga.model';
import { MyParkService } from 'src/app/shared/services/my-park.service';

@Injectable({
	providedIn: 'root'
})

export class VagaResolverGuard implements Resolve<IVaga> {

	constructor(private service: MyParkService) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IVaga | Observable<IVaga> | Promise<IVaga> {
		if (route.params && route.params.id) {
			return this.service.getById(route.params.id);
		}
	}
}
