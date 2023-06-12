import { Timestamp } from "rxjs";
import { TestableComponent } from "./testablecomponent.model";
import { MetaData } from "./metadata.model";

export class TestableComponentDto {

    public items: TestableComponent[];

    public metadata: MetaData;
    
    constructor(itmes: TestableComponent[], metadata: MetaData) {

        this.items = this.items;
        this.metadata = metadata;
    }
 


}