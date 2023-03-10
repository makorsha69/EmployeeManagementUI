import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeRequest : Employee = {
    empID: 0,
    name: '',
    email: '',
    address: '',
    mobile: '',
    salary: 0,
    department: '',
    doj: '',
    isActive: true
  };
  constructor(private employeeService : EmployeesService, private router:Router) { }

  ngOnInit(): void {
  }

  addEmployee() {
    // console.log(this.addEmployeeRequest);
    this.employeeService.addEmployee(this.addEmployeeRequest)
    .subscribe({
        next: (employee) => {
          console.log(employee);
          alert("Employee Added Successfully");
          this.router.navigate(['employees']);
        }
    })
  }

}
