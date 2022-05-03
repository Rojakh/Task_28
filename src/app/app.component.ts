import { Component } from '@angular/core';
 //import PolicyService and Policy class
import { EmployeeService } from './employee.service';
import {Employee } from './Employee';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
 
export class AppComponent
{
 
  employees : Employee[] | undefined; //array
  employeeService; //variable
 
   constructor()
   {
     //creating an instance for the PolicyService class to access getPolicies()
     this.employeeService=new EmployeeService();
   }
   //creating a function in app.component to access the getPolicies() from PolicyService
   getEmployeeDetails()
  {
     //accessing the getpolicies() method from policyService class
     //and store it in the array policies
     this.employees=this.employeeService.getEmployees();
   }
    //ngStyle
  color: string = 'deeppink';
  
}