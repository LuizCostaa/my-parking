import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingListComponent } from './parking-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PoModule } from '@po-ui/ng-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParkingListEditComponent } from './edit/parking-list.edit.component';

const route: Routes = [
    {
        path: 'parkingList',
        component: ParkingListComponent
    },
    {
        path: 'edit/:id',
        component: ParkingListEditComponent
    }
];

@NgModule({
    declarations: [
        ParkingListComponent,
        ParkingListEditComponent
    ],
    imports: [
        CommonModule,
        PoModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(route)
    ]
})
export class ParkingListModule { }
