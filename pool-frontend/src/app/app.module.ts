import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from "./app.component";
import { UserScoreComponent } from "./user-score/user-score.component";
import { GameScoreComponent } from './game-score/game-score.component';

@NgModule({
    declarations: [AppComponent, UserScoreComponent, GameScoreComponent],
    imports: [BrowserModule, FlexLayoutModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
