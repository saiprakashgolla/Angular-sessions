import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {


  styleExp="italic"
  changeStyle(){

    this.styleExp = 'normal'

  }

  tellWeather="cool";
  tabIndex=1


}
