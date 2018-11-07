import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MessageService {
    private messages = new Subject<string>();

    add(message: string) {
        this.messages.next(message);
    }

    get messages$() {
        return this.messages;
    }

    clear() {
        return null;
    }
}
