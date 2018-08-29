import { Component, OnInit } from "@angular/core";
import { AddScore } from "../../models/add-score";

@Component({
    selector: "pa-add-score",
    templateUrl: "./add-score.component.html",
    styleUrls: ["./add-score.component.css"]
})
export class AddScoreComponent implements OnInit {
    public score: AddScore;
    submitted = false;
    constructor() {
        this.score = new AddScore();
    }

    ngOnInit() {}

    onSubmit() {
        console.log("Submitting score.");
        console.log(`${JSON.stringify(this.score)}`);

        // after successful submit, clear the state
        this.score = new AddScore();
    }
}
