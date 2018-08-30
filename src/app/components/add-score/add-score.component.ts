import { Component, OnInit } from "@angular/core";
import { Score } from "../../models/add-score";
import { ScoresService } from "../../services/scores.service";

@Component({
    selector: "pa-add-score",
    templateUrl: "./add-score.component.html",
    styleUrls: ["./add-score.component.css"]
})
export class AddScoreComponent implements OnInit {
    public score: Score;
    submitted = false;
    constructor(private scoresService: ScoresService) {
        this.score = new Score();
    }

    ngOnInit() {}

    onSubmit() {
        // after successful submit, clear the state
        this.score = new Score();

        this.scoresService
            .getAllScores()
            .then(scores => {
                console.log(`Got scores: ${scores}`);
            })
            .catch(err => {
                console.log(`Error: ${err}`);
            });
    }
}
