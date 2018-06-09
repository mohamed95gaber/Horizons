import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/Services/Employees.service';
import { IEmployee } from 'src/app/interfaces/IEmployee';

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.css']
})
export class EmployeeListingComponent implements OnInit {
employees:IEmployee[]=[];
employee:IEmployee;
index:number;
  constructor(private employeesService:EmployeesService) { }

  ngOnInit() {
    this.employeesService.getEmployees().subscribe(data=>{
     this.employees=data;
    });
  }
  delete(id){
    let emp= this.employees.find(a=>a.id ==id);
    var i =this.employees.indexOf(emp);
    this.employees.splice(i,1);
    this.employeesService.deleteEmployee(id).subscribe();
  }
  edit(id){
    this.employee= this.employees.find(a=>a.id ==id);
    this.index=this.employees.indexOf(this.employee);
  }
  editData(updEmp){
    this.employees[this.index]=updEmp;
  }
add(newEmp){
  console.log(newEmp);
this.employees.push(newEmp);
}
}
