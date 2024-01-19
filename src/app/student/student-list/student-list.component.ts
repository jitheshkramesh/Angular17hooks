import { Component } from '@angular/core';
import { student } from 'src/app/shared/student';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  students: student[];
  totalMarks: number;
  _filterText: string = '';
  filteredstudents: student[];

  totalStudents = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.filteredstudents.length)
    }, 2000);
  })


  get filterText() {
    return this._filterText;
  }

  set filterText(value: string) {
    this._filterText = value;
    this.filteredstudents = this.filterStudentByGender(value);
  }

  constructor(private studentService: StudentService) {

  }
  ngOnInit(): void {
    this.students = this.studentService.student;
    this.totalMarks = this.studentService.totalMarks;
    this.filteredstudents = this.students;
    console.log(this.students);
  }

  AddDummyStudent() {
    let StudentCopy = Object.assign([], this.students);
    StudentCopy.push({ id: 9, name: 'Bhaanu', course: 'BCom', marks: 580, DOB: new Date('01-25-1991'), gender: 'Female' });
    this.students = StudentCopy;
    this.filteredstudents = this.filterStudentByGender(this.filterText);
  }

  ChangeGender() {
    let StudentCopy2 = JSON.parse(JSON.stringify(this.students));
    StudentCopy2[0].gender = "male";
    this.students = StudentCopy2;
    this.filteredstudents = this.filterStudentByGender(this.filterText);
  }

  filterStudentByGender(filterTerm: string) {
    if (this.students.length == 0 || this.filterText === '')
      return this.students;
    else {
      return this.students.filter((student) => { return student.gender.toLowerCase().startsWith(filterTerm.toLowerCase()) });
    }
  }
}
