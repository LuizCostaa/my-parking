import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { IVaga, Vaga } from 'src/app/shared/models/vaga.model';
import { Veiculo } from 'src/app/shared/models/veiculo.model';
import { MyParkService } from 'src/app/shared/services/my-park.service';

@Component({
	selector: 'app-edit-form',
	templateUrl: './edit-form.component.html',
	styleUrls: ['./edit-form.component.scss'],
	preserveWhitespaces: true
})
export class EditFormComponent implements OnInit {

	form: FormGroup;
	vaga: IVaga = Vaga.empty();
	validate = { minLength: 3, maxLength: 30 };
	permiteCheckout: boolean = false;

	constructor(
		private activatedRoute: ActivatedRoute,
		private fb: FormBuilder,
		private router: Router,
		private service: MyParkService
	) { }

	ngOnInit() {
		this.vaga.veiculo = Veiculo.empty();
		this.createFormControl();

		this.form.valueChanges.subscribe(
			() => {
				this.vaga.id = this.form.controls.id.value;
				this.vaga.veiculo.nomeDono = this.form.controls.nomeDono.value;
				this.vaga.veiculo.modelo = this.form.controls.modelo.value;
				this.vaga.veiculo.placa = this.form.controls.placa.value;
				this.vaga.veiculo.tipoVeiculo = this.form.controls.tipoVeiculo.value;
			}
		);
	}

	protected createFormControl() {

		const vaga = this.activatedRoute.snapshot.data.vaga;

		if (vaga.estaOcupado === true) {
			this.permiteCheckout = true;
		} else {
			this.permiteCheckout = false;
		}

		this.form = this.fb.group({
			id: [vaga.id],
			nomeDono: [vaga.veiculo.nomeDono, Validators.compose([
				Validators.required, Validators.minLength(this.validate.minLength), Validators.maxLength(this.validate.maxLength)
			])],
			modelo: [vaga.veiculo.modelo, Validators.compose([
				Validators.required, Validators.minLength(this.validate.minLength), Validators.maxLength(this.validate.maxLength)
			])],
			placa: [vaga.veiculo.placa, Validators.compose([
				Validators.required, Validators.minLength(1), Validators.maxLength(8)
			])],
			tipoVeiculo: [vaga.veiculo.tipoVeiculo, Validators.compose([
				Validators.required, Validators.minLength(this.validate.minLength), Validators.maxLength(this.validate.maxLength)
			])],
			tempo: [1]
		});
	}

	protected save() {
		if (this.vaga.veiculo.nomeDono.length > 1) {
			this.vaga.estaOcupado = true;
			this.service.update(this.vaga).subscribe();
			this.router.navigate(['/home']);
		} else {
			this.vaga.estaOcupado = false;
			this.service.update(this.vaga).subscribe();
			this.router.navigate(['/home']);
		}
	}

	protected cancel() {
		this.router.navigate(['/home']);
	}

	protected checkout() {

		if (this.form.controls.tempo.value > 0) {
			const valorAPagar = this.form.controls.tempo.value * 4;

			alert(`
			Dono do Veículo: ${this.form.controls.nomeDono.value}
			Veículo: ${this.form.controls.modelo.value} | ${this.form.controls.placa.value}
			Valor a Pagar: R$ ${valorAPagar}
			`);

			this.esvaziaVaga();
		}

	}

	protected esvaziaVaga() {
		const vaga: IVaga = Vaga.empty();
		vaga.veiculo = Veiculo.empty()

		vaga.id = this.form.controls.id.value;
		vaga.estaOcupado = false;
		vaga.veiculo.modelo = '';
		vaga.veiculo.nomeDono = '';
		vaga.veiculo.placa = '';
		vaga.veiculo.tipoVeiculo = '';

		this.service.update(vaga).subscribe();
		this.router.navigate(['/home']);
	}
}
