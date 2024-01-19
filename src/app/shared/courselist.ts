
import { Injectable } from '@angular/core'; // at top

@Injectable({
  providedIn: 'root' // just before your class
})

export class courseList {
    courseList = [
        {
            id: 101, name: 'Javascript', author: 'John', price: 100.00, description: 'fundamentals of Javascript', image: 'bg.jpg'
        },
        {
            id: 102, name: 'C#', author: 'Martin', price: 200.00, description: 'fundamentals of C#', image: 'Delete.jpg'
        },
        {
            id: 103, name: 'C++', author: 'Luther', price: 300.00, description: 'fundamentals of C++', image: 'default.jpg'
        },
        {
            id: 104, name: 'MsSql', author: 'King', price: 400.00, description: 'fundamentals of MsSql', image: 'login-family.png'
        },
        {
            id: 105, name: 'Html', author: 'Kobra', price: 500.00, description: 'fundamentals of Html', image: 'family-2.jpg'
        },
        {
            id: 106, name: 'Css', author: 'Tom', price: 100.00, description: 'fundamentals of Css', image: 'OIP.jPG'
        },
    ];

    getAllCourses(): any {
        const courseList = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.courseList);
            }, 5000);
        });
        return courseList;
    }
}