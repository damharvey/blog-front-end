import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.scss'
})
export class PatientListComponent implements OnInit {
   patients: any[] | undefined;
  constructor() { }
  


ngOnInit(): void {
    this.patients = [
      { firstName: 'John', lastName: 'Doe', city: 'New York', activeStatus: 'Active' },
      { firstName: 'Jane', lastName: 'Smith', city: 'Los Angeles', activeStatus: 'Inactive' },
      { firstName: 'Bob', lastName: 'Johnson', city: 'Chicago', activeStatus: 'Active' },
      // Add more patient objects as needed
    ];
   }
 }
