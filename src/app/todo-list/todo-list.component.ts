import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public  tileForm="";
  public myArray = [{data:"Dont Forget to get flowers",done:false}]
  constructor() { }

  ngOnInit() {
  }
  submitBun(){
    if( this.tileForm){
      this.myArray.push({data:this.tileForm,done:false});
      console.log( this.myArray)
    } else {
      return false;
    };
    
    this.tileForm='';
  }
}
