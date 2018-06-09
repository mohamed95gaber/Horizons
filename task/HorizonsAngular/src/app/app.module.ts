import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { Http,HttpModule } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { EmployeesService } from 'src/app/Services/Employees.service';
import { EmployeeListingComponent } from './employee-listing/employee-listing.component';

import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { Router } from '@angular/router/src/router';
import { Route } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListingComponent,
    EditEmployeeComponent,
    AddEmployeeComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ModalModule.forRoot(),
    
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
