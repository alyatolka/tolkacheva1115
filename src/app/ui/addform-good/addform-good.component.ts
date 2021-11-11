import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MyGoods, MyGoodsType } from 'src/app/shared/good.model';

@Component({
  selector: 'app-addform-good',
  templateUrl: './addform-good.component.html',
  styleUrls: ['./addform-good.component.css']
})
export class AddformGoodComponent implements OnInit {

    name:string;
    code:number;
    type:0;
    producer?:string;
    weight:number;
    quantity:number;
    price:number;
    myGoodsType=MyGoodsType;
    id:number;

    @Output() addGood=
    new EventEmitter<MyGoods>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddGood(){
    let good: MyGoods={
      name:this.name,
      code:this.code,
      type:this.type,
      producer:this.producer,
      weight:this.weight,
      quantity:this.quantity,
      price:this.price,
      id:this.id,
    }
    //console.log(good);
    this.addGood.emit(good);
  }
}
