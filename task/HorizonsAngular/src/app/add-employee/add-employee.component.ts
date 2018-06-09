import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import { IEmployee } from 'src/app/interfaces/IEmployee';
import { EmployeesService } from 'src/app/Services/Employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Output() nEmp=new EventEmitter<IEmployee>();
  newEmp:IEmployee;
  id:number;
  firstName:string;
  lastName:string;  
  deptName: string;
  birthDate:Date;

  constructor(private employeesService:EmployeesService) { }

  ngOnInit() {
  }
  addEmployee(f){
    
    this.nEmp.emit(f.value);
      this.firstName=undefined;
      this.lastName=undefined;
      this.birthDate=undefined;
      this.deptName=undefined;
      this.employeesService.addEmployee(f.value).subscribe();
     
     
        
  }
  cancel(){
    debugger;
    this.firstName=undefined;
    this.lastName=undefined;
    this.birthDate=undefined;
    this.deptName=undefined;
  }
}
