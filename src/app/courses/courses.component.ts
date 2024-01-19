import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { courseList } from 'src/app/shared/courselist';
import { Icourses } from 'src/app/interfaces/courses';
import { courses } from 'src/app/shared/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses?: Icourses[];
  constructor(private courseList: courseList,private route:ActivatedRoute) {
  }
  ngOnInit(): void {
    // this.courseList.getAllCourses().then((data: Icourses[]) => {
    //   this.courses = data;
    // });

    this.courses = this.route.snapshot.data['courses'];
  }
}
