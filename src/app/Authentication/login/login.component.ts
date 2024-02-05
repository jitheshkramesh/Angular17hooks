import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { userInterface } from 'src/app/interfaces/login.interface';
import { AuthenticationServices } from 'src/app/services/authentication.services';
import { AuthService } from 'src/app/shared/auth.services';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [FormsModule, ReactiveFormsModule,
    CommonModule]
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  userNameFormControl: FormControl;
  passwordFormControl: FormControl;
  subscription: Subscription;
  invalidData: boolean = false;
  result: any;
  user: userInterface;

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: AuthenticationServices,
    private authService: AuthService,
    private toastr: ToastrService) { }

  ngOnInit(): void {


    this.userNameFormControl = new FormControl(null, [Validators.required]);
    this.passwordFormControl = new FormControl(null, [Validators.required, Validators.minLength(4)]);

    this.userForm = this.fb.group({
      username: this.userNameFormControl,
      password: this.passwordFormControl
    })
  }

  onSubmitForm() { 
    if (this.userForm.valid) {
      this.subscription = this.service.userLogin(this.userForm.value).subscribe(res => {
        //this.toastr.success('Please contact admin approval', 'Registration successfully');
        this.result = res;
        this.authService.logIn();
        //this.authenticated = this.authService.isAuthenticated();
        localStorage.setItem('token', this.result.token);
        localStorage.setItem('userName', this.userNameFormControl.value);
        this.user = { userName: this.userNameFormControl.value };

        this.authService.currentUserSignal.set(this.user);

        this.toastr.success('Logined successfully','Login Page'); 

        this.router.navigate(['home']);
      }, err => {
        this.toastr.error('Error', 'Invalid credential');
      });
    } else {
      this.invalidData = true;
      this.toastr.error('Error', 'Server error');
    }
  }

  resetForm() {
    console.log('reset');
    this.userForm.reset();

  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }

  registerForm() {
    this.router.navigate(['register']);
  }

}
