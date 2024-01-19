import { Component, effect, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface employee {
  name: string,
  department: string,
  position: String
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

  employeeForm!: FormGroup;

  employees = signal<employee[]>([
    { name: 'John', department: 'IT', position: 'Manager' },
    { name: 'Ram', department: 'HR', position: 'Sr.Manager' },
    { name: 'Manu', department: 'Op', position: 'Time checker' },
    { name: 'Ram', department: 'Acc', position: 'Acc.Manager' },
    { name: 'Sam', department: 'Field', position: 'Field Manager' }
  ]);

  empAdding = signal<boolean>(false);


  toggleAddBlock() {
    this.empAdding.update(status => !status);
  }

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      department: ['', Validators.required]
    });
  }

  onSubmit() {
    // this.employees.mutate(emplist => {
    //   emplist.push(this.employeeForm.value);
    // });
  }

  product = signal({
    name: 'Laptop',
    category: 'Electronics',
    price: 2000,
    rating: 4.5,
  });

  changeProductName() {
   // this.product.mutate(product => product.name = 'Mobile');
  }

  sideEffect = effect(() => this.saveProductDatatoAPI(this.product()))

  saveProductDatatoAPI(product: any) {
    console.log('Call Api with product Data: ' + JSON.stringify(product));
  }


}
