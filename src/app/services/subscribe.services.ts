import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class subscribeService {
    onSubscribeClicked(type: String) {
        alert('Thanks for your ' + type + ' scbscribtion. You can start access now.!');
    }
}