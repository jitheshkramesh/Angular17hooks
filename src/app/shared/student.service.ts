import { student } from "./student";

export class StudentService {
    student: student[] = [
        { id: 1, name: 'Anu', course: 'Mba', marks: 450, DOB: new Date('01-12-1991'), gender: 'female' },
        { id: 2, name: 'Manu', course: 'Mca', marks: 250, DOB: new Date('01-13-1991'), gender: 'male' },
        { id: 3, name: 'Dinu', course: 'Ba', marks: 650, DOB: new Date('01-14-1991'), gender: 'female' },
        { id: 4, name: 'Sanu', course: 'Ma', marks: 350, DOB: new Date('01-15-1991'), gender: 'male' },
        { id: 5, name: 'Tinu', course: 'Ca', marks: 420, DOB: new Date('01-16-1991'), gender: 'male' },
        { id: 6, name: 'Vinu', course: 'BSc', marks: 400, DOB: new Date('01-18-1991'), gender: 'female' },
        { id: 7, name: 'Binu', course: 'MCom', marks: 410, DOB: new Date('01-20-1991'), gender: 'male' },
        { id: 8, name: 'Shaanu', course: 'BCom', marks: 350, DOB: new Date('01-22-1991'), gender: 'male' }
    ];

    totalMarks: number = 600;
}