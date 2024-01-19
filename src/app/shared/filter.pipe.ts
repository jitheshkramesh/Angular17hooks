import { Pipe, PipeTransform } from "@angular/core";
import { student } from "./student";

@Pipe({
    name: 'FilterStudent'
})
export class FilterPipe implements PipeTransform {
    transform(students: student[], filterText: string) {
        if (students.length == 0 || filterText === '')
            return students;
        else { 
            return students.filter((student) => { return student.gender.toLowerCase().startsWith(filterText.toLowerCase()) });
        }
    }

}