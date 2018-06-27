import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showChild: boolean = true;
  title = 'app';
  bool:boolean=true;
 constructor(){}
  onChange(value) {
    this.title = value;
  }
 
  toggleChild() {
    this.showChild = !this.showChild;
  
  }

  lessons:boolean=true;
}
