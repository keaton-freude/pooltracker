import { Injectable } from "@angular/core";
import { HttpClient } from "selenium-webdriver/http";
import { Score } from "../models/score";
import { GetBackendHttpRoute } from "../utils/route-builder";
import { BackendApi } from "./backend-api.service";

@Injectable({
    providedIn: "root"
})
export class ScoresService {
    constructor(private api: BackendApi) {}

    // submitScore(score: AddScore) {
    //     this.http.post()
    // }

    public getAllScores(): Promise<Score[]> {
        return this.api.get<Score[]>("/scores").toPromise();
    }

    public submitScore(score: Score): Promise<Object> {
        return this.api.post<Score>("/scores", score).toPromise();
    }
}
