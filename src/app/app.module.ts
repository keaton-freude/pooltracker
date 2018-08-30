import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from "./app.component";
import { UserScoreComponent } from "./components/user-score/user-score.component";
import { GameScoreComponent } from "./components/game-score/game-score.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AddScoreComponent } from "./components/add-score/add-score.component";
import { FormsModule } from "@angular/forms";
import {
    MatButtonToggleModule,
    MatRadioModule,
    MatButtonModule,
    MatSliderModule
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";

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
        MatSliderModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
