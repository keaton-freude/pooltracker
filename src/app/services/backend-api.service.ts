import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import * as process from "process";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: "root"
})
export class BackendApi {
    private baseUrl: string;
    constructor(private http: HttpClient) {
        console.log(environment);
        if (environment.BACKEND_API_HOST === undefined) {
            throw Error(
                "You must set the environment variable BACKEND_API_HOST"
            );
        }

        if (
            environment.BACKEND_API_PORT === undefined ||
            environment.BACKEND_API_PORT === "undefined" ||
            environment.BACKEND_API_PORT === null
        ) {
            // just omit the port
            this.baseUrl = `${environment.BACKEND_API_HOST}`;
        } else {
            this.baseUrl = `${environment.BACKEND_API_HOST}:${
                environment.BACKEND_API_PORT
            }`;
        }
    }

    get<T>(path: string): Observable<T> {
        console.log(`$Url to be sent ${this.baseUrl}${path}`);
        return this.http.get<T>(`${this.baseUrl}${path}`);
    }

    post<T>(path: string, body: T) {
        return this.http.post(`${this.baseUrl}${path}`, body);
    }
}
