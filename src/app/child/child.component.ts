import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, SimpleChanges } from '@angular/core';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
//  @Input() childUserName;
//  @Output() childPassword=new EventEmitter();

//  public password:number;
//   constructor() { }

//   ngOnInit() {}

//  getPassword(){
//    console.log(this.password);

//    this.childPassword.emit(this.password);
//  }
@Input('title') title;
 
  constructor() { }
 
  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log("onChanges")
    console.log("onChanges previousValue", simpleChanges['title'].previousValue)
    console.log("onChanges currentValue", simpleChanges['title'].currentValue)
  }
 
  ngOnInit() {
    console.log("onInit")
  }
 
  ngDoCheck() {
    console.log("doCheck")
  }
 
  ngAfterContentInit() {
    console.log("afterContentInit")
  }
 
  ngAfterContentChecked() {
    console.log("afterContentChecked")
  }
 
  ngAfterViewInit() {
    console.log("afterViewInit")
  }
 
  ngAfterViewChecked() {
    console.log("afterViewChecked")
  }
 
  ngOnDestroy() {
    console.log("onDistroy")
  }
 
}
