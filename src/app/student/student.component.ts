import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/shared/student';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  students: student[];
  totalMarks: number;
  filterText: string = '';


  constructor(private studentService: StudentService) {

  }
  ngOnInit(): void {
    this.students = this.studentService.student;
    this.totalMarks = this.studentService.totalMarks;
    console.log(this.students);
  }

  AddDummyStudent() {
    let StudentCopy = Object.assign([], this.students);
    StudentCopy.push({ id: 9, name: 'Bhaanu', course: 'BCom', marks: 580, DOB: new Date('01-25-1991'), gender: 'Female' });
    this.students = StudentCopy;
  }

  ChangeGender() {
    let StudentCopy2 = JSON.parse(JSON.stringify(this.students));
    StudentCopy2[0].gender = "male";
    this.students = StudentCopy2;
  }
}
