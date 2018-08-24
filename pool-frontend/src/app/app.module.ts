import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from "./app.component";
import { UserScoreComponent } from "./user-score/user-score.component";
import { GameScoreComponent } from './game-score/game-score.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddScoreComponent } from './add-score/add-score.component';

@NgModule({
    declarations: [AppComponent, UserScoreComponent, GameScoreComponent, AddScoreComponent],
    imports: [BrowserModule, FlexLayoutModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
