import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root',
})
export class ThemeToggleService {
    private theme = new Subject<string>();

    constructor(private messageService: MessageService) {}

    add(theme: string) {
        this.log(theme);
        this.theme.next(theme);
    }

    /** Log a ThemeService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`Theme changed to ${message}`);
    }

    get theme$() {
        return this.theme;
    }

    clear() {
        return null;
    }
}
