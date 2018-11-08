import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {
    HttpClient,
    HttpHeaders,
    HttpResponse,
    HttpErrorResponse,
} from '@angular/common/http';

import { MessageService } from 'services/message.service';
import { ApiUrl } from 'types';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: 'root',
})
export class ApiClientService {
    constructor(
        private messageService: MessageService,
        private http: HttpClient
    ) {}

    getData<T>(
        url: ApiUrl,
        _: T
    ): Observable<HttpResponse<T> | HttpErrorResponse> {
        return this.http.get<T>(url).pipe(
            tap(data => this.messageService.add(`fetched data`)),
            catchError(error => of(error))
        );
    }
}
