import { Injectable } from '@angular/core';

import { ROUTS } from '../constants';
import { Route } from 'types';

@Injectable({
    providedIn: 'root',
})
export class RoutsService {
    getRouts(): Route[] {
        return ROUTS;
    }
}
