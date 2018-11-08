import { Component, OnInit } from '@angular/core';

import { MessageService } from 'services/message.service';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
    constructor(public messageService: MessageService, public snackBar: MatSnackBar) {}

    ngOnInit() {
        this.messageService.messages$.subscribe(message =>
            this.snackBar.open(message, 'ok', {
                duration: 3000,
                verticalPosition: 'bottom',
                horizontalPosition: 'end',
            })
        );
    }
}
