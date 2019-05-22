import { Component, OnInit } from '@angular/core';

export interface Colors{
  blue:string;
  white:string;
  gray:string;
}

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})


export class MainViewComponent implements OnInit {
  color:Colors = {
    blue: "lightblue",
    white: "white",
    gray: "gray"
  }

  constructor() { }

  ngOnInit() {
  }

}
