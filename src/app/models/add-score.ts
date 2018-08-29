export class AddScore {
    constructor(
        public winner?: string,
        public breaker?: string,
        public stripes?: string,
        public solids?: string,
        public beatSelf?: boolean,
        public easyPocket?: boolean,
        public ballsLeft?: number
    ) {}
}
