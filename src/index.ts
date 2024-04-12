import { v4 as uuidv4 } from "uuid"


class Item {
    private _id: string = uuidv4()
    constructor(
        private _name: string,
        private _price: number,
        private _description: string
    ){}

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
}


class User {
    private _id: string = uuidv4()
    private _cart: Item[] = []
    constructor(
        private _name: string,
        private _age: number
    ){}

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    
    public get cart(): Item[] {
        return this._cart;
    }
    public set cart(value: Item[]) {
        this._cart = value;
    }

    public addToCart(user:User, item:Item):void{
        user.cart.push(item)
        console.log(`${item.name} has been added to your cart.`)
    }

    public removeFromCart(user:User, item:Item):void{
        for (let i = user.cart.length; i >=0; i--){
            if (user.cart[i] === item){
                user.cart.splice(i, 1)
            }
        }
        console.log(`All ${item.name}'s have been removed from your cart.`)
    }

    public removeQuantityFromCart(user:User, item:Item, quantity:number):void{
        console.log(`${quantity} ${item.name}'s have been removed from your cart.`)
        while(quantity > 0){
            user.cart.splice(user.cart.findIndex(i => i.id === item.id), 1)
            quantity--
        }
    }

    public cartTotal(user:User):number {
        let total = 0
        for (let i in user.cart){
            total += user.cart[i].price
        }
        return total
    }
    
    public printCart(user:User):void{
        for (let i in user.cart){
            console.log(user.cart[i])
        }
        console.log(`TOTAL: ${this.cartTotal(user)}`)
    }
}



class Shop {
    private _items: Item[] = [];
    constructor(itemA:Item, itemB:Item, itemC:Item){
        this._items.push(itemA);
        this._items.push(itemB);
        this._items.push(itemC);
    };

    public get items(): Item[] {
        return this._items;
    };
    public set items(value: Item[]) {
        this._items = value;
    };
}

let gap = new Shop(new Item('shoe', 49.99, 'cool'), new Item('hoodie', 59.99, 'warm'), new Item('hat', 14.99, 'functional'));
let user = new User('Dillon', 32);
user.addToCart(user, gap.items[0]);
user.printCart(user);
console.log('==========');

user.addToCart(user, gap.items[1]);
user.addToCart(user, gap.items[1]);
user.addToCart(user, gap.items[1]);
user.printCart(user);
console.log('==========')

user.addToCart(user, gap.items[2]);
user.addToCart(user, gap.items[2]);
user.addToCart(user, gap.items[2]);
user.printCart(user);
console.log('==========');

user.removeFromCart(user, gap.items[1]);
user.printCart(user);
console.log('==========');

user.removeQuantityFromCart(user, gap.items[2], 2);
user.printCart(user);
console.log('==========');