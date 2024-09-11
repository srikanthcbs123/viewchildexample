import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  employeeName: string = 'sachintendulakar';
  marks:number=50;
}
