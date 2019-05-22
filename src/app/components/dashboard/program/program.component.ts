import { Component, OnInit } from '@angular/core';

export interface Action{
  position:Number;
  activity:String;
  freq:String;
  responsible:String;
  fechaProgram:String;
  quienRealiza:String;
  fechaCumpli:String;
}

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  displayedColumns = ['position','activity','freq',
  'responsible',
  'fechaProgram','quienRealiza','fechaCumpli'];
  dataSource = acciones;
  constructor() { }

  ngOnInit() {
  }

}

const acciones:Action[]=[
  {position:1,
    activity:'Licencia Unica Ambiental',
    freq:'5 años',
    responsible:'Representante Legal',
    fechaProgram:'15/enero/2024',
    quienRealiza:'Rodolfo Medina',
    fechaCumpli:'n/a'},
  {position: 2,
    activity:'Cedula de operacion anual',
    freq:'Anual',
    responsible:'Gerencia',
    fechaProgram:'15/enero/2020',
    quienRealiza:'Pedro Marquez',
    fechaCumpli:'n/a'},
  { position:3,  
    activity:'Verificacion Vehicular',
    freq:'Semestral',
    responsible:'Mantenimiento',
    fechaProgram:'15/Abril/2019',
    quienRealiza:'Juan Murca',
    fechaCumpli:'13/Abril/2019'},
]