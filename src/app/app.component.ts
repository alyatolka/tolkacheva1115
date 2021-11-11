import { Component } from '@angular/core';
import { MyGoods, MyGoodsDatabase, MyGoodsType } from './shared/good.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Каталог товаров';

  goods: MyGoods[]=MyGoodsDatabase;
  myGoodsType=MyGoodsType;

getByType(type:number){
  return this.goods.filter((good) =>
  good.type ===type);
}

onGoodDelete(id:number){
  let index=this.goods.findIndex((good)=>good.id===id);
  if(index!=-1){
    this.goods.splice(index,1);
  }
}

  onAddGood(good:MyGoods){
    if(this.goods.length===0){
      good.id=1;
    }
    else 
      good.id=this.goods[this.goods.length - 1].id + 1;
    
    this.goods.push(good);
  }
}
