
class Figure{
    
    public width: number;
    public height: number;

    constructor(){
        this.width = 0;
        this.height = 0;
    }
    
    getArea(){
        return this.width * this.height;
    }

}

export class Rectangle extends Figure{

    constructor( width: number, height: number ){
        super();
        this.width = width;
        this.height = height;
    }

}
