import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pie-graph',
  templateUrl: './pie-graph.component.html',
  styleUrls: ['./pie-graph.component.css']
})
export class PieGraphComponent implements OnInit {
  view:number[]=[400,220]
  results:any[] = [{
    name:"Completadas",
    value:100
  },{
     name:"Activas",
    value:80
  },{
    name:"Pendientes",
    value:233
  }];

  label:string= "Actividades ambientales"
  
  constructor() { }

  ngOnInit() {
  }

}
