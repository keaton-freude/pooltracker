import { Component, OnInit } from "@angular/core";
import { UserScore } from "../models/user-score";

@Component({
    selector: "pa-add-score",
    templateUrl: "./add-score.component.html",
    styleUrls: ["./add-score.component.css"]
})
export class AddScoreComponent implements OnInit {
    protected score: UserScore;
    submitted = false;
    constructor() {}

    ngOnInit() {}

    onSubmit() {
        console.log("Submitting score.");
    }
}
