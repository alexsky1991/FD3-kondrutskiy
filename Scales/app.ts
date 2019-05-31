
class Scales {

    products:any[] = [];

    add = (item:object):void => {
        this.products.push(item);
    }

    getSumScale = ():number => {
        let result:number = this.products.reduce((a,b) => a + b.weight, 0);
        return result;
    }

    getNameList = ():string[] => {
        let result:string[] = this.products.map(el => el.name)
        return result;
    }
}


class Product {

    name:string;
    weight:number;

    constructor(name:string, weight:number) {
        this.name = name;
        this.weight = weight;
    }

    getScale = ():void => {
        console.log(this.weight)
    }

    getName = ():void => {
        console.log(this.name)
    }

}

class Apple extends Product {
    constructor(name:string, weight:number){
        super(name, weight);
    }
}

class Tomato extends Product {
    constructor(name:string, weight:number){
        super(name, weight);
    }
}


let apple1 = new Apple('яблоко', 52);
let apple2 = new Apple('помидор1', 32);
let tomato1 = new Tomato('помидор2', 15);

let scales1 = new Scales();

scales1.add(apple1);
scales1.add(apple2);
scales1.add(tomato1);

console.log(scales1.getSumScale());
console.log(scales1.getNameList());


