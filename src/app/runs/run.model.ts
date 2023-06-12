export class Run {

    public id: String;
    public timestamp: String;
    public testName: String;
    public testVersion: String;
    public stationName: String;
    public stationVersion: String;
    public stationIndex: String;
    public serialNumber: String;
    public passed: Boolean;
    public results: String;
    public active: Boolean;
    public valid: Boolean;

    constructor(id: String,
        timestamp: String,
        testName: String,
        testVersion: String,
        stationName: String,
        stationVersion: String,
        stationIndex: String,
        serialNumber: String,
        passed: Boolean,
        results: String,
        active: Boolean,
        valid: Boolean,
    ) {

        this.id = id;
        this.timestamp = timestamp;
        this.testName = testName;
        this.testVersion = testVersion;
        this.stationName = stationName;
        this.stationVersion = stationVersion;
        this.stationIndex = stationIndex;
        this.serialNumber = serialNumber;
        this.passed = passed;
        this.results = results;
        this.active = active;
        this.valid = valid;

    }

}