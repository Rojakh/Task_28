import { Injectable } from '@angular/core';
//import module policy.ts
import {Employee} from './Employee'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public  getEmployees() 
  {
 
    let employees:Employee[]; //array

    employees=
    [
        new Employee(101,'Ram',35000,'HR','Bangalore'),
        new Employee(102,'Sangeeth',25000,'Trainee','Belur'),
        new Employee(103,'Asha',10000,'Manager','Mangalore'),
        new Employee(104,'Bharath',20000,'Techincal Trainee','Bijapur'),
        new Employee(105,'Chaithra',40000,'Senior Manager','Raichur'),
    ]

    return employees;               
}
}