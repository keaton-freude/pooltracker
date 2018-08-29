import { Component, OnInit, Input } from "@angular/core";
import { UserScore } from "../../models/user-score";

@Component({
    selector: "pa-user-score",
    templateUrl: "./user-score.component.html",
    styleUrls: ["./user-score.component.css"]
})
export class UserScoreComponent implements OnInit {
    @Input("userScore")
    public userScore: UserScore;
    constructor() {}

    ngOnInit() {}
}
