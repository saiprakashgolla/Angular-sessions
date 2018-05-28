import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public uname: any;
  public pword: any;

  public myArry = {userName: "saiprakash",
                    passWord:8099843874};
  constructor() { }

  ngOnInit() {
  }

  submitForm(){

    if(this.uname==this.myArry.userName && this.pword ==this.myArry.passWord){
      alert("Yes the username and password matched");
  }else {
      alert("Yes the username or password not matched");
  } 
  }
}
