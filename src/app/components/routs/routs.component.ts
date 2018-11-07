import { Component, OnInit } from '@angular/core';

import { RoutsService } from 'services/routs.service';
import { Route } from 'types';

@Component({
    selector: 'app-routs',
    templateUrl: './routs.component.html',
    styleUrls: ['./routs.component.scss'],
})
export class RoutsComponent implements OnInit {
    routs: Route[];
    constructor(private routService: RoutsService) {}

    ngOnInit() {
        this.routs = this.routService.getRouts();
    }
}
