import { Injectable } from "@angular/core";
import { HttpClient } from "selenium-webdriver/http";
import { Score } from "../models/score";
import { GetBackendHttpRoute } from "../utils/route-builder";
import { BackendApi } from "./backend-api.service";
import { GameScore } from "../models/game-score";
import { Subject, Observable } from "rxjs";
import { OverallScore } from "../models/overall-score";

@Injectable({
    providedIn: "root"
})
export class ScoresService {
    constructor(private api: BackendApi) {}
    private currentScore: Subject<GameScore> = new Subject<GameScore>();
    private overallScore: Subject<OverallScore> = new Subject<OverallScore>();

    public getAllScores(): Promise<Score[]> {
        return this.api.get<Score[]>("/scores").toPromise();
    }

    public async submitScore(score: Score): Promise<Object> {
        return new Promise<Object>((resolve, reject) => {
            this.api
                .post<Score>("/scores", score)
                .toPromise()
                .then(() => {
                    this.updateCurrentScore();
                    resolve();
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    public getCurrentScore(): Observable<GameScore> {
        return this.currentScore.asObservable();
    }

    public updateCurrentScore() {
        this.api
            .get<GameScore>("/wins")
            .toPromise()
            .then(score => {
                this.currentScore.next(score);
            })
            .catch(err => {
                console.log("Error getting game score...");
            });
    }

    public getOverallScore(): Observable<OverallScore> {
        return this.overallScore.asObservable();
    }

    public updateOverallScore() {
        this.api
            .get<OverallScore>("/game-data/overall-score")
            .toPromise()
            .then(score => {
                this.overallScore.next(score);
            })
            .catch(err => {
                console.log("Error getting overall score...");
            });
    }
}
