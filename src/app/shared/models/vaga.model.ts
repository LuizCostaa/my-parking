import { Carro } from './carro.model';

export interface Vaga {
	id: number;
	bloco: string;
	numeroVaga: number;
	veiculo: Carro;
}