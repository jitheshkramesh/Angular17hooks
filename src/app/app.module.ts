import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { AuthService } from 'src/app/shared/auth.services';
import { CourseGuardService } from 'src/app/shared/course-guard.service';
import { CanDeactivateGuardService } from 'src/app/shared/candeactivate-guard.service';
import { CommonModule, DecimalPipe, NgFor, NgIf, PercentPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { courseResolveService } from 'src/app/shared/course-resolve';
import { StudentComponent } from './student/student.component';
import { StudentService } from 'src/app/shared/student.service';
import { PercentagePipe } from "./shared/percentage.pipe";
import { FilterPipe } from 'src/app/shared/filter.pipe';
import { StudentListComponent } from './student/student-list/student-list.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserSignUpComponent } from './user/user-sign-up/user-sign-up.component';
import { HeaderComponent } from './header/header.component';
import { subscribeService } from './services/subscribe.services';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { AdminComponent } from './admin/admin.component';
import { UserService } from './services/user.service';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { LoggerService } from './services/logger.service';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { StoreModule } from '@ngrx/store';
import authReducer from './redux/store/reducers/authentication.reducers';
import { EffectsModule } from '@ngrx/effects';
import AuthenticationEffects from './redux/store/effects/authentication.effects';
import { HeroParentComponent } from './childView/hero-parent/hero-parent.component';
import { HeroChildComponent } from './childView/hero-child/hero-child.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './services/product.service';
import { LoginComponent } from './Authentication/login/login.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { authInterceptor } from 'src/app/shared/interceptor/auth.interceptor';
import { AuthGuardService } from 'src/app/shared/auth-guard.service';
import { VehicleDetailComponent } from './vehicle/vehicle-detail/vehicle-detail.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { VehicleShellComponent } from './vehicle/vehicle-shell/vehicle-shell.component';
import { VehicleService } from './services/vehicle.service';
import { CartService } from './services/cart.service';
import { HeadersInterceptor } from './shared/interceptor/headers.interceptor';
import { LoggingInterceptor } from './shared/interceptor/logging.interceptor';
import { RxjsComponent } from './rxjs/rxjs.component';
import { EmployeesComponent } from './employees/employees.component';
import { CourselistComponent } from './animation/courselist/courselist.component';
import { AncourseComponent } from './animation/ancourse/ancourse.component';
// import {percentage} from '../shared/percentage.pipe';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NotificationService } from './services/notification.service';

export const USER_TOKEN = new InjectionToken<UserService>('USER_SERVICE');

@NgModule({
    declarations: [
        AppComponent,
        ChildComponent,
        HomeComponent,
        AboutComponent,
        CoursesComponent,
        ContactComponent,
        ErrorComponent,
        StudentComponent,
        FilterPipe,
        StudentListComponent,
        UserRegisterComponent,
        UserSignUpComponent,
        HeaderComponent,
        UserlistComponent,
        AdminComponent,
        UserDetailsComponent,
        UserLoginComponent,
        HeroParentComponent,
        HeroChildComponent,
        ProductListComponent,
        VehicleDetailComponent,
        VehicleListComponent,
        VehicleShellComponent,
        RxjsComponent,
        EmployeesComponent,
        AncourseComponent,
        CourselistComponent
    ],
    providers: [AuthService, CourseGuardService,
        CanDeactivateGuardService, courseResolveService,
        StudentService, ProductService, AuthGuardService, VehicleService,
        CartService,  NotificationService,
        { provide: USER_TOKEN, useClass: UserService },
        { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
        provideHttpClient(withInterceptors([authInterceptor])),

    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        PercentagePipe,
        StoreModule.forRoot({ authStore: authReducer }),
        EffectsModule.forRoot(AuthenticationEffects),
        NgFor, NgIf, DecimalPipe,
        ToastrModule.forRoot(),
        BrowserAnimationsModule
    ],
})
export class AppModule { }
