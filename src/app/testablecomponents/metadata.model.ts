import { Timestamp } from "rxjs";

export class MetaData {

    public direction: String;
    public limit: number;
    public offset: number;
    public orderBy: String;
    public totalCount: number;
    
    constructor(
        direction: String,
        limit: number,
        offset: number,
        orderBy: String,
        totalCount: number
    ) {
        this.direction = direction;
        this.limit = limit;
        this.offset = offset;
        this.orderBy = orderBy;
        this.totalCount = totalCount;
    }

}