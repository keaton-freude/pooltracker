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

    // NOTE: We should replace this sort of thing with something like socket.io
    // But we'll keep track of the overallScore, whenever it changes, we'll find out who won
    // then emit an event on 'winnerName' with the name of the winner, so the UI can notify
    private _overallScore = new OverallScore();
    private _first = true;

    // Denotes when someone wins! Subscribe to this and do something cool when someone wins
    private winnerName: Subject<string> = new Subject<string>();

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
                    this.updateOverallScore();
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

    public getWinnerName(): Observable<string> {
        return this.winnerName.asObservable();
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
                if (this._first) {
                    this._first = false;
                } else {
                    if (
                        this._overallScore.chrisWins === score.chrisWins &&
                        this._overallScore.keatonWins === score.keatonWins
                    ) {
                        // It hasn't changed
                    } else {
                        // It's changed, emit the winner
                        if (this._overallScore.chrisWins === score.chrisWins) {
                            this.winnerName.next("Keaton");
                        } else {
                            this.winnerName.next("Chris");
                        }
                    }
                }
                this._overallScore = score;
            })
            .catch(err => {
                console.log("Error getting overall score...");
            });
    }
}
