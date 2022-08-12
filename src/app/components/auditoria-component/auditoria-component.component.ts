import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActionForeignKeys } from 'src/app/models/ActionForeignKeysModel';
import { DatosAnomalos } from 'src/app/models/DatosAnomalosModel';
import { RelacionFk } from 'src/app/models/RelacionFKModel';
import { TablaHuerfana } from 'src/app/models/TablaHuerfanaModel  ';
import { Tabla } from 'src/app/models/TablaModel';
import { Trigger } from 'src/app/models/TriggerModel';
import { AuditoriaService } from 'src/app/services/auditoria.service';

@Component({
  selector: 'app-auditoria-component',
  templateUrl: './auditoria-component.component.html',
  styleUrls: ['./auditoria-component.component.css']
})
export class AuditoriaComponentComponent implements OnInit {

  nombreBase: string =''
  totalAnomalias: number = 0

  datosAnomalos: DatosAnomalos[] = []
  actionFk: ActionForeignKeys[] = [];
  relacionesFk: RelacionFk[] = [];
  tablasHuerfanas: TablaHuerfana[] = []
  tablas: Tabla[] = []
  triggers: Trigger[] = [];
  constructor(
    private auditoriaService: AuditoriaService
  ) { }

  ngOnInit(): void {
  }

  lanzarAuditoria(){
    this.totalAnomalias = 0
    this.auditarDatosAnomalos();
    this.auditarActionFK();
    this.auditarTablas();
    this.auditarTablasHuerfanas();
    this.auditarRelaciones();
    this.auditarTriggers();
  }

  auditarDatosAnomalos(){
    this.auditoriaService.getDatosAnomalos(this.nombreBase).subscribe(datos =>{
      this.datosAnomalos = JSON.parse(datos)
      this.totalAnomalias+=this.datosAnomalos.length
    })
  }

  auditarActionFK(){
    this.auditoriaService.getActionFK(this.nombreBase).subscribe(datos =>{
      this.actionFk = JSON.parse(datos)
      //No se ha definido la anomalía aquí
    })
  }

  auditarTablas(){
    this.auditoriaService.getTablas(this.nombreBase).subscribe(datos =>{
      this.tablas =  JSON.parse(datos)
      this.tablas = this.tablas.filter(tabla => {
        return tabla.tabla != 'dbo.sysdiagrams'
      })
    })
  }

  auditarTablasHuerfanas(){
    this.auditoriaService.getTablasHuerfanas(this.nombreBase).subscribe(datos =>{
      this.tablasHuerfanas = JSON.parse(datos)
      this.tablasHuerfanas = this.tablasHuerfanas.filter(tabla => {
        return tabla.tabla_huerfana != 'dbo.sysdiagrams'
      })
      this.totalAnomalias+=this.tablasHuerfanas.length
    })
  }

  auditarRelaciones(){
    this.auditoriaService.getRelaciones(this.nombreBase).subscribe(datos =>{
      this.relacionesFk = JSON.parse(datos)
    })
  }

  auditarTriggers(){
    this.auditoriaService.getTriggers(this.nombreBase).subscribe(datos =>{
      this.triggers = JSON.parse(datos)
      this.triggers.forEach(trigger =>{
        trigger.esta_deshabilitado? this.totalAnomalias++: this.totalAnomalias;
      })
    })
  }

}
