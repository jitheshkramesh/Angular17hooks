import { Observable } from "rxjs";
import { ContactComponent } from "src/app/contact/contact.component";

export interface IDeactivateComponent {
    canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuardService {
    canDeactivate(component: IDeactivateComponent): Observable<boolean> | Promise<boolean> | boolean {
        return component.canExit();
    }
}