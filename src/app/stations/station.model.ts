export class Station {

    public id: String;
    public hostName: String;
    public name: String;
    public version: String;
    public index: String;
    public platform: String;
    public gateway: Boolean;
    public active: Boolean;
    public valid: Boolean;

    constructor(id: String,
        hostName: String,
        name: String,
        version: String,
        index: String,
        platform: String,
        gateway: Boolean,
        active: Boolean,
        valid: Boolean ) {

        this.id = id;
        this.hostName = hostName;
        this.name = name;
        this.version = version;
        this.index = index;
        this.platform = platform;
        this.gateway = gateway;
        this.active = active;
        this.valid = valid;
        
    }

}