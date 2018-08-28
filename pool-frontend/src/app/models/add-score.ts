export class AddScore {
    constructor(
        public winner?: string,
        breaker?: string,
        stripes?: string,
        solids?: string,
        beatSelf?: boolean,
        easyPocket?: boolean,
        ballsLeft?: number
    ) {}
}
