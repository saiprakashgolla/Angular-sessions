import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public  titleForm="";
  public myArray =['sai','prakash']
  constructor() { }

  ngOnInit() {
  }

  submitFun(){
    console.log("asdf")
    return false;
  }
  submitForm(){
    if(  this.titleForm){
      this.myArray.push(this.titleForm)
    } else {
      return false;
    };
    
    this.titleForm='';
  }

  // deleteList(){
   
  //     this.myArray.splice(0,1)
    
  // }
}
