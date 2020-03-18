import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule, TabsModule, ModalModule, PaginationModule, ButtonsModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth/auth.service';
import { HomeComponent } from './home/home.component';
import { ErrorInterceptorProvider } from './_services/error/error.interceptor';
import { appRoutes } from './routes';
import { HasRoleDirective } from './_directives/hasRole.directive';
import { UserManagementComponent } from './employee/user-management/user-management.component';
import { AdminService } from './_services/admin/admin.service';
import { RolesModalComponent } from './employee/roles-modal/roles-modal.component';
import { StatisticsComponent } from './employee/statistics/statistics.component';
import { FilterComponent } from './filter/filter.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';
import { RepairsComponent } from './repairs/repairs.component';
import { EquipmentModalComponent } from './employee/equipment-modal/equipment-modal.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeePanelComponent } from './employee/employee-panel/employee-panel.component';

export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      EmployeePanelComponent,
      HasRoleDirective,
      UserManagementComponent,
      RolesModalComponent,
      RepairsComponent,
      StatisticsComponent,
      FilterComponent,
      RegisterModalComponent,
      RepairsComponent,
      EquipmentModalComponent,
      ContactComponent
   ],
   imports: [
      BrowserModule,
      ChartsModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ButtonsModule.forRoot(),
      PaginationModule.forRoot(),
      ReactiveFormsModule,
      BsDatepickerModule.forRoot(),
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      }),
      ModalModule.forRoot(),
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AdminService
   ],
   entryComponents: [
      RolesModalComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
