export interface MyGoods{
    name:string,
    code:number,
    type:number,  
    id?:number,
    producer?:string,
    weight:number,
    quantity:number,
    price:number
}

export enum MyGoodsType{
    furnitures,
    appliances,
    books,
    phones
}

export let MyGoodsDatabase: MyGoods[]= [
{name: 'sofa', code:2002, type:0, id:1, producer: 'a', weight:150, quantity:15,price:18000},
{name: 'iphone', code:1010, type:1, id:2, producer: 'a', weight:0.5, quantity:100, price:70000}
]