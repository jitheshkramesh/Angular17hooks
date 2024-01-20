import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.services";

@Injectable()
export class CourseGuardService {
    constructor(private route: Router, private authService: AuthService) {
    }
    canActivate(): boolean {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        else {
            this.route.navigate(['login']);
            return false;
        }
    }

    canActivateChild(): boolean {
        return this.canActivate();
    }
}