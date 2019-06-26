// tslint:disable: adjacent-overload-signatures
import { IVeiculo } from './veiculo.model';

export interface IVaga {
	id: number;
	estaOcupado: boolean;
	veiculo: IVeiculo;
}

export class Vaga implements IVaga {

	id: number;
	estaOcupado: boolean;
	veiculo: IVeiculo;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}

	public get $id() {
		return this.id;
	}

	public get $estaOcupado() {
		return this.estaOcupado;
	}

	public get $veiculo() {
		return this.veiculo;
	}

	public set $estaOcupado(estaOcupado: boolean) {
		this.estaOcupado = estaOcupado;
	}

	public set $veiculo(veiculo: IVeiculo) {
		this.veiculo = veiculo;
	}

	public static of(json = {}) {
		return new Vaga(json);
	}

	public static empty() {
		return new Vaga();
	}

	public static fromJson(json: Array<IVaga> = [] ) {
		const items: Array<IVaga> = [];

		for (const values of json) {
			items.push(new Vaga(values));
		}

		return items;
	}


}
