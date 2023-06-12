export class TestScripts {

    public id: String;
    public name: String;
    public version: String;
    public type: String;
    public required: String;
    public active: Boolean;
    public valid: Boolean;

    constructor(id: String,
        name: String,
        version: String,
        type: String,
        required: String,
        active: Boolean,
        valid: Boolean,
    ) {

        this.id = id;
        this.name = name;
        this.version = version;
        this.type = type;
        this.required = required;
        this.active = active;
        this.valid = valid;
    }

}