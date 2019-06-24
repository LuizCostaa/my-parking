import { Veiculo } from './veiculo.model';

export interface Vaga {
	id: number;
	estaOcupado: boolean;
	veiculo: Veiculo;
}
