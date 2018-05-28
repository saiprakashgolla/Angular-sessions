import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {
 
  

  constructor() { }

  ngOnInit() {
  }
  public a:any;
   
  public b:any;

  public result:any;
  
  additionNum(){
    this.result = +(this.a) + +(this.b);
    this.clearValues();
  }
  clearValues(){
    this.a =  null;
    this.b = null;
  }
  
  
  
}
