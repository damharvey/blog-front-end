import { Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';

export const routes: Routes = [
    {
        path:'',component:PatientListComponent, pathMatch:'prefix',
    }
];
