import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public userName:string;
  public customerName:string;
  public receivedData;
  constructor() { }

  ngOnInit() {
  }

changeValue(){
  this.userName=this.customerName;
  console.log(this.userName);
}

receivePassword(message){
this.receivedData=message;
console.log(this.receivedData);
}

}
