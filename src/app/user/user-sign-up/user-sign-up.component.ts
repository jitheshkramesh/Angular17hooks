import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../validators/noSpaveAllowed.validator';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.scss']
})
export class UserSignUpComponent implements OnInit {

  formStatus: string = '';
  formdata: any = {};
  reactiveForm: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required, CustomValidators.noSpaceAllowed]),
      lastname: new FormControl(null, [Validators.required, CustomValidators.noSpaceAllowed]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, Validators.required, CustomValidators.checkUserName),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      address: new FormGroup({
        street: new FormControl(null, Validators.required),
        country: new FormControl('India', Validators.required),
        city: new FormControl(null),
        region: new FormControl(null),
        postal: new FormControl(null, Validators.required)
      }),
      skills: new FormArray([
        new FormControl(null, Validators.required)
      ]),
      experience: new FormArray([

      ])
    });

    // this.reactiveForm.get('firstname').valueChanges.subscribe((data)=>{
    //   console.log(data);
    // });

    // this.reactiveForm.get('username').statusChanges.subscribe((data)=>{
    //   console.log(data);
    // });

    // this.reactiveForm.statusChanges.subscribe((data)=>{
    //   console.log(data);
    // });

  }

  GenerateUsername() {
    let username = '';
    const fName: string = this.reactiveForm.get('firstname').value;
    const lName: string = this.reactiveForm.get('lastname').value;
    const dob: string = this.reactiveForm.get('dob').value;

    if (fName.length >= 3) {
      username += fName.slice(0, 3);
    }
    else {
      username += fName;
    }

    if (lName.length >= 3) {
      username += lName.slice(0, 3);
    }
    else {
      username += lName;
    }

    let datetime = new Date(dob);
    username += datetime.getFullYear();

    username = username.toLowerCase();

    this.reactiveForm.patchValue({
      username: username,
      address: {
        city: 'New Delhi'
      }
    });

  }

  OnFormSubmitted() {
   // console.log(this.reactiveForm.value);
    this.formdata = this.reactiveForm.value;

    this.reactiveForm.reset({
      firstname: null,
      lastname: null,
      email: null,
      username: null,
      dob: null,
      gender: 'male',
      address: {
        street: null,
        country: 'India',
        city: null,
        region: null,
        postal: null
      },
      skills: [
        null
      ],
      experience: [
        null
      ]
    }); 
  }

  AddExperience() {
    const formGroup = new FormGroup({
      company: new FormControl(null, Validators.required),
      position: new FormControl(null, Validators.required),
      totalExp: new FormControl(null, Validators.required),
      start: new FormControl(null, Validators.required),
      end: new FormControl(null, Validators.required),
    });

    (<FormArray>this.reactiveForm.get('experience')).push(formGroup);
  }

  DeleteExperience(i: number) {
    const controls = <FormArray>this.reactiveForm.get('experience');
    controls.removeAt(i);
  }

  AddSkills() {
    (<FormArray>this.reactiveForm.get('skills'))
      .push(new FormControl(null, Validators.required));
  }

  DeleteSkill(index: number) {
    const controls = <FormArray>this.reactiveForm.get('skills');
    controls.removeAt(index);
  }
}
