import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  companyName: string = 'ABCompanyName';
  @ViewChild(EmployeeComponent) emp!: EmployeeComponent;

  ngOnInit(): void {}
  onClickMeClicked() {
    console.log(this.emp);
    //ViewChild is used to access properties / methods of the child class.

    this.emp.employeeName = 'ElonMusk';
    this.emp.marks = 100;
  }
}
