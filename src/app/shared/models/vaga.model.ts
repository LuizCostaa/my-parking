import { Carro } from './carro.model';

export interface Vaga {
	id: number;
	numeroVaga: number;
	veiculo: Carro;
}
