import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Course } from '../models/course.model';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-course-list',
  // standalone:true, 
  // imports:[CommonModule,NgFor],
  templateUrl: './courselist.component.html',
  styleUrl: './courselist.component.scss'
})
export class CourselistComponent { 
  @Input() course!: Course;
  @ViewChild('statusRef') statusRef!: ElementRef<HTMLSelectElement>;
  @Output() statusUpdated = new EventEmitter<string>();
  @Output() courseDelete = new EventEmitter<void>();

  onStatusUpdate() {
    const selectedValue = this.statusRef.nativeElement.value;
    this.statusUpdated.emit(selectedValue);
  }

  onCourseDelete(){
    this.courseDelete.emit();
  }
}
