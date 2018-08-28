import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Score } from './scores.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ScoresService {
    constructor(
        @InjectRepository(Score)
        private readonly scoresRepository: Repository<Score>,
    ) {}

    async test(): string {
        const test: Score = {
            winner: 'Keaton',
            breaker: 'Chris',
            ballsLeft: 3,
            beatSelf: false,
            easyPocket: true,
            solids: 'Keaton',
            stripes: 'Chris',
        };
        await this.scoresRepository.save(test);
        return 'Done';
    }

    async FindAllScores(): Promise<Score[]> {
        return await this.scoresRepository.find();
    }
}
