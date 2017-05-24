export class Hero{
    public _id: string;
    public name: string;

    //we could have a constructor or not, but I like constructors ;)
    constructor(name: string, _id?: string){ //optional parameters
        this._id = _id;
        this.name = name;
    }
}
