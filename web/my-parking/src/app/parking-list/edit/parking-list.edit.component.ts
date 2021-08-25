import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import {
    PoBreadcrumb,
    PoDatepickerIsoFormat,
    PoModalAction,
    PoModalComponent,
    PoPageAction
} from '@po-ui/ng-components';


@Component({
    selector: 'app-parking-list-edit',
    templateUrl: './parking-list.edit.component.html',
    styleUrls: ['./parking-list.edit.component.css']
})

export class ParkingListEditComponent implements OnInit, OnDestroy {

    @ViewChild('modalCancel', { static: false }) modalCancel!: PoModalComponent;

    cancelModalAction!: PoModalAction;
    backModalAction!: PoModalAction;

    form!: FormGroup;
    errorPattern!: string;

    newBreadcrumb!: PoBreadcrumb;
    editBreadcrumb!: PoBreadcrumb;
    modalActions!: Array<PoModalAction>;
    newActions!: Array<PoPageAction>;
    editActions!: Array<PoPageAction>;

    isPageEdit!: boolean;

    validate: any = { minLgth: 3, maxLgth: 80 };

    park: any = {};
    enumIso = PoDatepickerIsoFormat.Extended;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private http: HttpClient
    ) { }

    async ngOnInit() {
        await this.createFormControl();
        this.setupComponents();
        this.get();

        this.form.valueChanges.subscribe(
            () => {
                this.park.placa = this.form.controls.placa.value;
                this.park.nome_proprietario = this.form.controls.nome_proprietario.value;
                this.park.data_check_in = this.form.controls.data_check_in.value;
                this.park.data_check_out = this.form.controls.data_check_out.value;
            }
        );
    }


    private createFormControl() {
        this.form = this.fb.group({
            nome_proprietario: ['', Validators.compose([
                Validators.required,
                Validators.minLength(this.validate.minLgth),
                Validators.maxLength(this.validate.maxLgth)
            ])],
            nr_vaga: ['', Validators.compose([])],
            placa: ['', Validators.compose([
                Validators.required,
                Validators.minLength(this.validate.minLgth),
                Validators.maxLength(this.validate.maxLgth)
            ])],
            data_check_in: ['', Validators.compose([
                Validators.required,
                Validators.minLength(this.validate.minLgth),
                Validators.maxLength(this.validate.maxLgth)
            ])],
            data_check_out: ['', Validators.compose([])]
        });
    }


    private checkInterationOnForm(form: FormGroup): void {
        console.log(form);
        if (form.dirty === true) {
            this.modalCancel.open();
        } else {
            this.closeModal();
            this.router.navigate(['./parkingList']);
        }
    }

    private closeModal() {
        this.modalCancel.close();
    }

    private get() {
        const id: any = this.activatedRoute.snapshot.paramMap.get('id');

        if (id) {
            this.http.get(`http://localhost:3000/vagas/${id}`).subscribe((item: any) => {

                this.form.controls.nome_proprietario.setValue(item[0].nome_proprietario);
                this.form.controls.placa.setValue(item[0].placa);
                this.form.controls.data_check_in.setValue(new Date(item[0].data_check_in));
                this.form.controls.data_check_out.setValue(new Date(item[0].data_check_out));
                this.form.controls.nr_vaga.setValue(item[0].nr_vaga);
                console.log(item)
            });
        }
    }

    private update() {

        let aux = new Date(this.park.data_check_in);
        let aux2 = new Date();

        this.park.data_check_in = new Date(
            aux.getFullYear(), aux.getMonth(), aux.getUTCDay(),
            aux2.getHours(), aux2.getMinutes(), aux2.getMilliseconds());

        console.log(this.park.data_check_in);

    }

    private checkout() { }


    private setupComponents() {

        this.cancelModalAction = { label: 'Não', action: this.closeModal.bind(this) };

        this.backModalAction = { label: 'Sim', action: () => this.router.navigate(['./parkingList']) };

        this.editActions = [
            { label: 'Salvar', action: this.update.bind(this), disabled: () => this.form.invalid },
            { label: 'Voltar', action: this.checkInterationOnForm.bind(this, this.form) },
            { label: 'Check-out', action: this.checkout.bind(this), disabled: () => this.park.data_check_out }
        ];

    }

    ngOnDestroy(): void { }
}
