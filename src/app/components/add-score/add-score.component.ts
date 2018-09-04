import { Component, OnInit, ViewChild } from "@angular/core";
import { Score } from "../../models/score";
import { ScoresService } from "../../services/scores.service";

@Component({
    selector: "pa-add-score",
    templateUrl: "./add-score.component.html",
    styleUrls: ["./add-score.component.css"]
})
export class AddScoreComponent implements OnInit {
    @ViewChild("scoreForm")
    scoreForm;
    public score: Score;
    submitted = false;
    constructor(private scoresService: ScoresService) {
        this.score = new Score();
    }

    ngOnInit() {}

    onSubmit() {
        if (this.score.stripes === "Keaton") {
            this.score.solids = "Chris";
        } else {
            this.score.solids = "Keaton";
        }

        console.log(this.score);
        this.scoresService
            .submitScore(this.score)
            .then(res => {
                console.log("Submitted score successfully.");
                this.score = new Score();
                this.scoreForm.reset();
            })
            .catch(err => {
                console.log(`Error submitting score: ${JSON.stringify(err)}`);
            });
    }
}
