export class Employee 
{
    constructor(employeeID:number,    employeename: string ,  employeerate:number, employeedesignation:string,employeeaddress:string) 
    {
        this.employeeID=employeeID;
        this.employeename=employeename;
        this.employeerate=employeerate;
        this.employeedesignation=employeedesignation;
        this.employeeaddress=employeeaddress;
    }
 
    employeeID:number ;
    employeename: string ;
    employeerate:number;
    employeedesignation: string ;
    employeeaddress: string ;

}