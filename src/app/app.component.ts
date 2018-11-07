import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

import { ThemeToggleService } from './services/theme-toggle.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'tour of heroez';
    theme: string;

    constructor(
        private themeToggleService: ThemeToggleService,
        private overlayContainer: OverlayContainer
    ) {}

    ngOnInit(): void {
        this.themeToggleService.theme$.subscribe(theme => {
            this.theme = theme || 'light';
            const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
            overlayContainerClasses.remove('light-theme', 'dark-theme');
            overlayContainerClasses.add(`${this.theme}-theme`);
        });
    }
}
