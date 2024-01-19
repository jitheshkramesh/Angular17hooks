import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { isErrorSelector, isSuccessSelector, loginState, onLoginAction } from '../../redux/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  userForm: FormGroup;
  userNameFormControl: FormControl;
  passwordFormControl: FormControl;
  // isError: boolean = false;
   isSuccess: boolean = false;

  public isSuccess$? = this.store.select(isSuccessSelector);
  public isError$? = this.store.select(isErrorSelector);
  subscription: Subscription;

  constructor(private fb: FormBuilder, private store: Store<loginState>) {  }

  ngOnInit(): void { 

    console.log('ngOnInit : ');
    this.isSuccess$.subscribe((data)=>{
      this.isSuccess = data;
      console.log('Observable success return : ' + this.isSuccess);
    });

    this.userNameFormControl = new FormControl(null, [Validators.required, Validators.email]);
    this.passwordFormControl = new FormControl(null, [Validators.required, Validators.minLength(4)]);

    this.userForm = this.fb.group({
      username: this.userNameFormControl,
      password: this.passwordFormControl
    })
  }

  onSubmitForm() {

    console.log('login cliecked');
    if (this.userForm.valid)
      this.store.dispatch(onLoginAction({...this.userForm.value}));

      // console.log('Observable success return : ' + this.isSuccess$);
      // console.log('Observable success return : ' + this.isError$);
      this.isSuccess$.subscribe((data)=>{
        this.isSuccess = data;
        console.log('Observable success return : ' + this.isSuccess);
      });

      // this.isError$.subscribe((data)=>{
      //   console.log('Observable failure return : ' + data);
      // });
    // console.log(this.userForm.value);
    // this.isError = false;
    // this.isSuccess = false;

    // if (this.userForm.valid) {
    //   this.isSuccess = true;
    //   return;
    // }  

    // if (this.userForm.invalid) {
    //   this.isError = true;
    //   return;
    // }

    // const { userName, password } = this.userForm.value;

  }

  resetForm() {
    console.log('reset');
    // this.isSuccess = false;
    // this.isError = false;
    this.userForm.reset();

  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
