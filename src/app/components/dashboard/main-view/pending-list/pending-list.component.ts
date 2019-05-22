import { Component, OnInit } from '@angular/core';

export interface Activity {
  date:String;
  responsible:String;
  action:String;
  file:String;
}


@Component({
  selector: 'app-pending-list',
  templateUrl: './pending-list.component.html',
  styleUrls: ['./pending-list.component.css']
})
export class PendingListComponent implements OnInit {

  activities:Activity[]=[{
    date: new Date('12/26/2025').toLocaleString(),
    responsible: 'Will Smith',
    action : "Entregar plan de accion completado",
    file : 'accion-completo.pdf'
  },{
    date: new Date('6/26/2025').toLocaleString(),
    responsible: 'Rodolfo Renaldo',
    action : "Pruebas de laboratorio Agua",
    file : 'analisis-agua.pdf'
  
  },{

    date: new Date('6/26/2025').toLocaleString(),
    responsible: 'Martin Martinez',
    action : "Estudio de impacto ambiental",
    file : 'estudio-profesional.pdf'
  }]

  constructor() { }

  ngOnInit() {
  }

}
