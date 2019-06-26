// tslint:disable: adjacent-overload-signatures
export interface IVeiculo {
	placa: string;
	modelo: string;
	nomeDono: string;
	tipoVeiculo: string;
}

export class Veiculo implements IVeiculo {

	placa: string;
	modelo: string;
	nomeDono: string;
	tipoVeiculo: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}

	public get $placa() {
		return this.placa;
	}

	public get $modelo() {
		return this.modelo;
	}

	public get $nomeDono() {
		return this.nomeDono;
	}

	public get $tipoVeiculo() {
		return this.tipoVeiculo;
	}


	public set $placa(placa: string) {
		this.placa = placa;
	}

	public set $modelo(modelo: string) {
		this.modelo = modelo;
	}

	public set $nomeDono(nomeDono: string) {
		this.nomeDono = nomeDono;
	}

	public set $tipoVeiculo(tipoVeiculo: string) {
		this.tipoVeiculo = tipoVeiculo;
	}

	public static of(json = {}) {
		return new Veiculo(json);
	}

	public static empty() {
		return new Veiculo();
	}

	public static fromJson(json: Array<IVeiculo> = []) {
		const items: Array<IVeiculo> = [];

		for (const values of json) {
			items.push(new Veiculo(values));
		}

		return items;
	}
}
