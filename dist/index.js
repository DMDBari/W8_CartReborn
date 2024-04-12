"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    constructor(_name, _price, _description) {
        this._name = _name;
        this._price = _price;
        this._description = _description;
        this._id = (0, uuid_1.v4)();
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
}
class User {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
        this._id = (0, uuid_1.v4)();
        this._cart = [];
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get cart() {
        return this._cart;
    }
    set cart(value) {
        this._cart = value;
    }
    addToCart(user, item) {
        user.cart.push(item);
        console.log(`${item.name} has been added to your cart.`);
    }
    removeFromCart(user, item) {
        for (let i = user.cart.length; i >= 0; i--) {
            if (user.cart[i] === item) {
                user.cart.splice(i, 1);
            }
        }
        console.log(`All ${item.name}'s have been removed from your cart.`);
    }
    removeQuantityFromCart(user, item, quantity) {
        console.log(`${quantity} ${item.name}'s have been removed from your cart.`);
        while (quantity > 0) {
            user.cart.splice(user.cart.findIndex(i => i.id === item.id), 1);
            quantity--;
        }
    }
    cartTotal(user) {
        let total = 0;
        for (let i in user.cart) {
            total += user.cart[i].price;
        }
        return total;
    }
    printCart(user) {
        for (let i in user.cart) {
            console.log(user.cart[i]);
        }
        console.log(`TOTAL: ${this.cartTotal(user)}`);
    }
}
class Shop {
    constructor(itemA, itemB, itemC) {
        this._items = [];
        this._items.push(itemA);
        this._items.push(itemB);
        this._items.push(itemC);
    }
    ;
    get items() {
        return this._items;
    }
    ;
    set items(value) {
        this._items = value;
    }
    ;
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
console.log('==========');
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
