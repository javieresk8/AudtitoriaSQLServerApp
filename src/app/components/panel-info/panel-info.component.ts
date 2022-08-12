import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-info',
  templateUrl: './panel-info.component.html',
  styleUrls: ['./panel-info.component.css']
})
export class PanelInfoComponent implements OnInit {

  @Input()
  titulo: string='';

  cantidadElementos = 0;
  elementos: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
