export class Hero{
    public id: number;
    public name: string;

    //we could have a constructor or not, but I like constructors ;)
    constructor(name: string, id?: number){ //optional parameters
        this.id = id;
        this.name = name;
    }
}
