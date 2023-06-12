import { Timestamp } from "rxjs";

export class TestableComponent {

    public id: String;
    public serialNumber: String;
    public type: String;
    public testDate: String;
    public testName: String;
    public testVersion: String;
    public passed: Boolean;
    public active: Boolean;
    public valid: Boolean;
    
    constructor(id: String,
        serialNumber: String,
        type: String,
        testDate: String,
        testName: String,
        testVersion: String,
        passed: Boolean,
        active: Boolean,
        valid: Boolean
    ) {
        this.id = id;
        this.serialNumber = serialNumber;
        this.type = type;
        this.testDate = testDate;
        this.testName = testName;
        this.testVersion = testVersion;
        this.passed = passed;
        this.active = active;
        this.valid = valid;
    }

}