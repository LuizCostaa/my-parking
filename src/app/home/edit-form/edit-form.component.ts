import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
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

	constructor(
		private activatedRoute: ActivatedRoute,
		private fb: FormBuilder,
		private router: Router,
		private service: MyParkService
	) { }

	ngOnInit() {
		this.vaga.veiculo = Veiculo.empty();
		this.getIdFromParam();
		this.createFormControl();

		this.form.valueChanges.subscribe(
			() => {
				this.vaga.veiculo.nomeDono = this.form.controls.nomeDono.value;
				this.vaga.veiculo.modelo = this.form.controls.modelo.value;
				this.vaga.veiculo.placa = this.form.controls.placa.value;
				this.vaga.veiculo.tipoVeiculo = this.form.controls.tipoVeiculo.value;
			}
		);
	}

	private getIdFromParam() {
		this.vaga.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
	}

	private createFormControl() {
		this.form = this.fb.group({
			nomeDono: ['', Validators.compose([
				Validators.required, Validators.minLength(this.validate.minLength), Validators.maxLength(this.validate.maxLength), this.customIsEmpty
			])],
			modelo: ['', Validators.compose([
				Validators.required, Validators.minLength(this.validate.minLength), Validators.maxLength(this.validate.maxLength), this.customIsEmpty
			])],
			placa: ['', Validators.compose([
				Validators.required, Validators.minLength(1), Validators.maxLength(8), this.customIsEmpty
			])],
			tipoVeiculo: ['', Validators. compose([
				Validators.required, Validators.minLength(this.validate.minLength), Validators.maxLength(this.validate.maxLength), this.customIsEmpty
			])]
		});
	}

	private customIsEmpty(control: AbstractControl): ValidationErrors {
		if (control.value.trim().length === 0) {
			return { isEmpty: true };
		}
		return null;
	}

	protected save() {
		this.service.update(this.vaga);

		console.log(this.vaga);
	}

	protected cancel() {
		this.router.navigate(['/home']);
	}

}
