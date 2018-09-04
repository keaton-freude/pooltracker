import { Component, OnInit } from "@angular/core";
import { UserScore } from "./models/user-score";
import { mockUser1, mockUser2 } from "./mock-data/mock-user-score";
import { ScoresService } from "./services/scores.service";
import { MatSnackBar, MatSnackBarVerticalPosition } from "@angular/material";

@Component({
    selector: "pa-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
    public user1: UserScore = new UserScore("Chris");
    public user2: UserScore = new UserScore("Keaton");

    constructor(
        private scoresService: ScoresService,
        public snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this.scoresService.getWinnerName().subscribe(name => {
            this.displayWinner(name);
        });
    }

    displayWinner(name: string) {
        this.snackBar.open(`${name} wins!!`, "Dismiss", {
            duration: 2500,
            verticalPosition: "top"
        });
    }
}
