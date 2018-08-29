import { Component, OnInit } from "@angular/core";
import { GameScore } from "../../models/game-score";
import { mockGameScore } from "../../mock-data/mock-game-score";

@Component({
    selector: "pa-game-score",
    templateUrl: "./game-score.component.html",
    styleUrls: ["./game-score.component.css"]
})
export class GameScoreComponent implements OnInit {
    protected currentScore: GameScore = mockGameScore;
    constructor() {}

    ngOnInit() {}
}
