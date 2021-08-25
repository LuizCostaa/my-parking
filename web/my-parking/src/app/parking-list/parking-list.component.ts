import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-parking-list',
    templateUrl: './parking-list.component.html',
    styleUrls: ['./parking-list.component.css']
})
export class ParkingListComponent implements OnInit {

    parkingListColumns: Array<PoTableColumn> = [];
    parkingListItems: Array<object> = [];


    constructor(private http: HttpClient, private router: Router) { }

    ngOnInit(): void {

        this.setupComponents();
        this.search();

    }

    setupComponents() {
        this.parkingListColumns = [

            {
                property: 'parkStatus',
                label: 'Status',
                type: 'subtitle',
                subtitles: [
                    { value: 'Livre', color: 'success', label: 'Livre', content: '1' },
                    { value: 'Ocupada', color: 'danger', label: 'Ocupada', content: '2' }
                ]
            },
            { property: 'nr_vaga', label: 'Nr. Vaga', action: (value: any, row: any) => this.edit(row), type: 'link' },
            { property: 'nome_proprietario', label: 'Nome', type: 'string' },
            { property: 'data_check_in', label: 'Data Ent.', type: 'dateTime' },

        ];

    }

    search() {
        this.http.get('http://localhost:3000/vagas').subscribe((data: any) => {
            data.forEach((item: any) => {
                item.edit = 'edit';
                if (!item.data_check_out) {
                    item.parkStatus = 'Ocupada';
                } else {
                    item.parkStatus = 'Livre';
                }
            });

            this.parkingListItems = data;
        })

    }

    private edit(item: any): void {
        this.router.navigate(['./edit', item.id]);
    }
}
