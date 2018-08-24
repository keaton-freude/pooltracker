import { Component } from "@angular/core";
import { UserScore } from "./models/user-score";
import { mockUser1, mockUser2 } from "../mock-data/mock-user-score";

@Component({
    selector: "pa-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    public user1: UserScore = mockUser2;
    public user2: UserScore = mockUser1;
}
