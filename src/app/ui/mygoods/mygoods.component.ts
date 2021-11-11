import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { MyGoods } from 'src/app/shared/good.model';


@Component({
  selector: 'app-mygoods',
  templateUrl: './mygoods.component.html',
  styleUrls: ['./mygoods.component.css']
})
export class MygoodsComponent implements OnInit {

  @Input() title:string;
  @Input() goods: MyGoods[]=[];
  @Output() deleteGoods=
  new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteGood(id:number){
    this.deleteGoods.emit(id)
  }

}
