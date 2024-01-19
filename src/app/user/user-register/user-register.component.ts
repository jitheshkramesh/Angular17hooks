import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {


  defaultCountry = 'india';

  firstname: string;
  lastname: string;
  email: string;
  gen: string;
  country: string;
  hob: string = '';
  isAgreed: boolean = false;

  defaultGender = 'Female';

  gender = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' },
    { id: '3', value: 'Other' }
  ];

  selectedHobbiesList: any;
  checkedHobbiesIDs = [];
  isMasterSel: boolean;

  hobbiesDataList: any;

  constructor() {
    this.isMasterSel = false;

    this.hobbiesDataList = [
      { id: '1', value: 'Cricket', isChecked: true },
      { id: '2', value: 'Football', isChecked: false },
      { id: '3', value: 'Swimming', isChecked: false },
      { id: '4', value: 'Long jump', isChecked: true },
      { id: '5', value: 'Sprint', isChecked: false },
      { id: '6', value: 'Reading', isChecked: false },
      { id: '7', value: 'Music', isChecked: false },
    ];

    this.getCheckedItemList();
  }

  @ViewChild('myForm') form: NgForm;

  ngOnInit(): void {
  }

  getCheckedItemList() {

    console.log('getCheckedItemList()');

    this.selectedHobbiesList = [];

    for (var i = 0; i < this.hobbiesDataList.length; i++) {

      if (this.hobbiesDataList[i].isChecked) {
        this.selectedHobbiesList.push(this.hobbiesDataList[i]);
        console.log('selected hobbies' + this.hobbiesDataList[i]);

        this.hob += this.hobbiesDataList[i].value + ' ,';
      }


    }

    this.selectedHobbiesList = JSON.stringify(this.selectedHobbiesList);

  }


  onSubmit() {
    console.log(this.form);

    this.firstname = this.form.value.personDetails.firstname;
    this.lastname = this.form.value.personDetails.lastname;
    this.email = this.form.value.personDetails.email;
    this.gen = this.form.value.gender;
    this.country = this.form.value.country;
    this.isAgreed = this.form.value.agreement;

    this.getCheckedItemList();

    this.selectedHobbiesList = JSON.stringify(this.selectedHobbiesList);
    console.log('selected hobbies' + this.selectedHobbiesList);

    this.form.reset();
  }

  setDefaultValues() {
    // this.form.value.personDetails.firstname = 'John';
    // this.form.value.personDetails.lastname = 'smith';
    // this.form.value.personDetails.email = 'abc@example.com';
    // this.form.setValue({
    //   country: '',
    //   gender: '',
    //   hobbies: '',
    //   personDetails: {
    //     firstname: 'John',
    //     lastname: 'Smith',
    //     email: 'abc@example.com'
    //   }
    // })

    this.form.form.patchValue({
      personDetails: {
        firstname: 'John',
        lastname: 'Smith',
        email: 'abc@example.com'
      }
    });
  }

  checkUncheckAll() {

    for (var i = 0; i < this.hobbiesDataList.length; i++) {

      this.hobbiesDataList[i].isSelected = this.isMasterSel;

    }

    this.getCheckedItemList();

  }



  isAllSelected() {

    this.isMasterSel = this.hobbiesDataList.every(function (item: any) {

      return item.isSelected == true;

    })

    this.getCheckedItemList();

  }
}

