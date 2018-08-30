import { Component, OnInit, Input } from "@angular/core";
import { UserScore } from "../../models/user-score";
import { ScoresService } from "../../services/scores.service";

@Component({
    selector: "pa-user-score",
    templateUrl: "./user-score.component.html",
    styleUrls: ["./user-score.component.css"]
})
export class UserScoreComponent implements OnInit {
    @Input("userScore")
    public userScore: UserScore;
    constructor(private scoresService: ScoresService) {}

    ngOnInit() {
        // Update this instance of the userscore with the correct score
        this.scoresService.getOverallScore().subscribe(score => {
            if (this.userScore.name === "Keaton") {
                this.userScore.wins = score.keatonWins;
                this.userScore.losses = score.chrisWins;
            } else if (this.userScore.name === "Chris") {
                this.userScore.wins = score.chrisWins;
                this.userScore.losses = score.keatonWins;
            }
        });

        this.scoresService.updateOverallScore();
    }
}
