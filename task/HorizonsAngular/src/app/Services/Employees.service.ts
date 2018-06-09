import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { error } from 'util';
import { IEmployee } from 'src/app/interfaces/IEmployee';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  handleError: any;
  employees: any = [];
  constructor(private http: Http) {
    this.getEmployees().subscribe(data=>{
      this.employees=data;
      console.log(this.employees);
    });
  }

  public getEmployees() :Observable<any>{
    return this.http.get("http://localhost:2097/api/employees")
      .map((res: any) => res.json())
      .catch(this.handleError);
    

  }
  public deleteEmployee(id): Observable<{}> {
    console.log(id);
    return this.http.delete("http://localhost:2097/api/employees/" + id )

  }
  updateEmployee (employee: IEmployee): Observable<{}> {
    return this.http.put("http://localhost:2097/api/employees/"+employee.id,employee);
  }
  addEmployee (employee: IEmployee): Observable<{}> {
    return this.http.post("http://localhost:2097/api/employees",employee);
  }
}
