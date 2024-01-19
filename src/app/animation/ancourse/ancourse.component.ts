import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Course } from '../models/course.model';
import { AnCourseService } from '../services/ancourse.service';

@Component({
  selector: 'app-ancourse',
  templateUrl: './ancourse.component.html',
  styleUrl: './ancourse.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class AncourseComponent implements OnInit {
  title = 'angular-animations';
  courses: Course[] = [];
  selectedCourseIndex!: number;

  constructor(private ancourseService: AnCourseService) {

  }
  ngOnInit(): void {
    this.ancourseService.getAnCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  onStatusUpdate(newValue: string, index: number) {
    this.courses[index].status = newValue;
  }

  oncourseDelete(index:number){
    this.courses.splice(index,1);
  }

  onCourseSelected(index: number) {
    this.selectedCourseIndex = index;
  }

}
