import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { courseList } from "./courselist";
import { Injectable } from "@angular/core";

@Injectable()
export class courseResolveService implements Resolve<any>{

    constructor(private courseList: courseList) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.courseList.getAllCourses().then((data: any) => {
            return data;
        })
    }
}