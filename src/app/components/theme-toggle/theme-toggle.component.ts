import { Component, OnInit } from '@angular/core';

import { ThemeToggleService } from 'services/theme-toggle.service';

@Component({
    selector: 'app-theme-toggle',
    templateUrl: './theme-toggle.component.html',
    styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent implements OnInit {
    checked: boolean;
    theme: string;

    constructor(private themeToggleService: ThemeToggleService) {
        this.theme = 'dark';
        this.checked = true;
    }

    ngOnInit() {
        this.themeToggleService.add(this.theme);
    }

    onToggle() {
        this.checked = !this.checked;
        this.theme = this.checked ? 'dark' : 'light';
        this.themeToggleService.add(this.theme);
    }
}
