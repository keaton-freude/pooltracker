import { Component, OnInit } from "@angular/core";
import { GameScore } from "../../models/game-score";
import { mockGameScore } from "../../mock-data/mock-game-score";
import { ScoresService } from "../../services/scores.service";

@Component({
    selector: "pa-game-score",
    templateUrl: "./game-score.component.html",
    styleUrls: ["./game-score.component.css"]
})
export class GameScoreComponent implements OnInit {
    public currentScore: GameScore = new GameScore(0, 0);
    constructor(private scoresService: ScoresService) {}

    ngOnInit() {
        this.scoresService.getCurrentScore().subscribe(score => {
            console.log(`Got current score - ${JSON.stringify(score)}`);
            this.currentScore = score;
            console.log(
                `Got current score - ${JSON.stringify(this.currentScore)}`
            );
        });

        this.scoresService.updateCurrentScore();
    }
}
