import { Get, Controller } from '@nestjs/common';
import { ScoresService } from './scores-service';
import { Router } from 'express';

@Controller('scores')
export class ScoresController {
    constructor(private scoresService: ScoresService) {}

    @Get()
    root(): string {
        return this.scoresService.test();
    }

    @Get('all')
    async findAllScores(): string {
        const scores = await this.scoresService.FindAllScores();
        return JSON.stringify(scores);
    }
}
