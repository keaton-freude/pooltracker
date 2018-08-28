import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from "./app.component";
import { UserScoreComponent } from "./user-score/user-score.component";
import { GameScoreComponent } from "./game-score/game-score.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AddScoreComponent } from "./add-score/add-score.component";
import { FormsModule } from "@angular/forms";
import {
    MatButtonToggleModule,
    MatRadioModule,
    MatButtonModule,
    MatSliderModule
} from "@angular/material";

@NgModule({
    declarations: [
        AppComponent,
        UserScoreComponent,
        GameScoreComponent,
        AddScoreComponent
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        FormsModule,
        MatButtonToggleModule,
        MatRadioModule,
        MatButtonModule,
        MatSliderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
