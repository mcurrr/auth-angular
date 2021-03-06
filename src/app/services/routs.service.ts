import { Injectable } from '@angular/core';

import { ROUTS } from 'custom-constants';
import { Route } from 'types';

@Injectable({
    providedIn: 'root',
})
export class RoutsService {
    getRouts(): Route[] {
        return ROUTS;
    }
}
