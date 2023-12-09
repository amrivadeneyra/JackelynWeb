export class Reviews {
    constructor(init?: Partial<Reviews>) {
        Object.assign(this, init);
    }

    _id: string = '';
    user: string = '';
    review: string = '';
    qualification: number = 0;

    created_at: Date = new Date();
    updated_at: Date = new Date();

}