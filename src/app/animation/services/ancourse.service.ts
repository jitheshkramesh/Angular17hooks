import { Injectable } from "@angular/core";
import { Course } from "../models/course.model";
import { Observable, Observer } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AnCourseService {
    courses: Course[] = [
        { title: 'Angular', status: 'false' },
        { title: 'Unit Testing', status: 'false' },
        { title: 'Angular RxJs', status: 'false' },
        { title: 'HTML', status: 'false' },
        { title: 'CSS', status: 'false' },
        { title: 'JSON', status: 'false' },
    ];

    getAnCourses(): Observable<Course[]> {
        const courseObservable = new Observable((observer: Observer<Course[]>) => {
            setTimeout(() => {
                observer.next(this.courses);
            }, 2000);
        });
        return courseObservable;
    }
}