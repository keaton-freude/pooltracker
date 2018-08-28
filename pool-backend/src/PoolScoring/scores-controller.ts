import { Get, Controller, Post, Body } from '@nestjs/common';
import { ScoresService } from './scores-service';
import { Router } from 'express';
import { AddScoreModel } from './add-score.model';

@Controller('scores')
export class ScoresController {
    constructor(private scoresService: ScoresService) {}

    @Get()
    root(): string {
        return this.scoresService.test();
    }

    @Get('all')
    async findAllScores() {
        const scores = await this.scoresService.FindAllScores();
        return scores;
    }

    @Post()
    async create(@Body() addScore: AddScoreModel) {
        this.scoresService.addScore(addScore);
    }
}
