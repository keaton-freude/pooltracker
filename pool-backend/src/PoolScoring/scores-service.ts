import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Score } from './scores.entity';
import { Repository } from 'typeorm';
import { AddScoreModel } from './add-score.model';

@Injectable()
export class ScoresService {
    constructor(
        @InjectRepository(Score)
        private readonly scoresRepository: Repository<Score>,
    ) {}

    async FindAllScores(): Promise<Score[]> {
        return await this.scoresRepository.find();
    }

    async addScore(addScoreModel: AddScoreModel) {
        const score: Score = {
            winner: addScoreModel.winner,
            breaker: addScoreModel.breaker,
            ballsLeft: addScoreModel.ballsLeft,
            beatSelf: addScoreModel.beatSelf,
            easyPocket: addScoreModel.easyPocket,
            solids: addScoreModel.solids,
            stripes: addScoreModel.stripes,
        };
        await this.scoresRepository.save(score);
    }
}
