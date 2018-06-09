import { Component, OnInit ,Input,Output,EventEmitter } from '@angular/core';
import { IEmployee } from 'src/app/interfaces/IEmployee';
import { EmployeesService } from 'src/app/Services/Employees.service';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  @Input() employee: IEmployee;
 
  @Output() updemp=new EventEmitter<IEmployee>();
  employees:any=[];
  id: number;
  firstName:string;
  lastName:string;  
  deptName: string;
  birthDate:Date;

  constructor(private employeesService:EmployeesService) { }

  ngOnInit() {
    this.employeesService.getEmployees().subscribe(data=>{
      this.employees=data;
     });
    if(this.employee==undefined){
      this.employee={};
    }

  }
  editemployee(f){
  
    var uptemployee={
      id:this.employee.id,
      firstName:f.value.firstName== undefined ? this.employee.firstName:f.value.firstName ,
      lastName:f.value.lastName == undefined ? this.employee.lastName:f.value.lastName  ,
      deptName:f.value.deptName == undefined ? this.employee.deptName:f.value.deptName ,
      birthDate:f.value.birthDate== undefined ? this.employee.birthDate:f.value.birthDate,
   }
    
    this.updemp.emit(uptemployee);
    this.employeesService.updateEmployee(uptemployee).subscribe();
    this.firstName=undefined;
    this.lastName=undefined;
    this.birthDate=undefined;
    this.deptName=undefined;

}
cancel(){
  debugger;
  this.firstName=undefined;
  this.lastName=undefined;
  this.birthDate=undefined;
  this.deptName=undefined;
}
}
