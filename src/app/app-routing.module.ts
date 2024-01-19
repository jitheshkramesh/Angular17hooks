import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrorComponent } from './error/error.component'; 
import { CourseGuardService } from 'src/app/shared/course-guard.service';
import { CanDeactivateGuardService } from 'src/app/shared/candeactivate-guard.service';
import { courseResolveService } from 'src/app/shared/course-resolve';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserSignUpComponent } from './user/user-sign-up/user-sign-up.component';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { AdminComponent } from './admin/admin.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { HeroParentComponent } from './childView/hero-parent/hero-parent.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './Authentication/login/login.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { AuthGuardService } from 'src/app/shared/auth-guard.service'; 
import { VehicleShellComponent } from './vehicle/vehicle-shell/vehicle-shell.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { EmployeesComponent } from './employees/employees.component';
import { CourselistComponent } from './animation/courselist/courselist.component';
import { AncourseComponent } from './animation/ancourse/ancourse.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  //{ path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent , canActivate: [AuthGuardService] },
  { path: 'Aboutus', component: AboutComponent , canActivate: [AuthGuardService] },
  { path: 'Student', component: StudentComponent , canActivate: [AuthGuardService] },
  { path: 'StudentList', component: StudentListComponent , canActivate: [AuthGuardService] },
  { path: 'Products', component: ProductListComponent, canActivate: [AuthGuardService] },
  { path: 'admin', component: AdminComponent },
  { path: 'heroP', component: HeroParentComponent , canActivate: [AuthGuardService] },
  { path: 'vehiclelist', component: VehicleShellComponent , canActivate: [AuthGuardService] },
  { path: 'customer', component: CustomerComponent , canActivate: [AuthGuardService] },
  { path: 'signup', component: UserSignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'employees', component: EmployeesComponent, canActivate: [AuthGuardService] },
  { path: 'rxjs', component: RxjsComponent, canActivate: [AuthGuardService]  },
  { path: 'register', component: RegisterComponent},
  { path: 'an-course', component: AncourseComponent, canActivate: [AuthGuardService]  },
  { path: 'Contact', component: ContactComponent, canDeactivate: [CanDeactivateGuardService] },
  { path: 'Courses', component: CoursesComponent, canActivate: [AuthGuardService] , resolve: { courses: courseResolveService } },
  {
    path: 'Courses', canActivate: [AuthGuardService] , canActivateChild: [CourseGuardService], children: [
      { path: 'Course/:id', component: AncourseComponent }
    ]
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
