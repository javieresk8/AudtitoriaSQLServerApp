import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ActionForeignKeys } from '../models/ActionForeignKeysModel';
import { DatosAnomalos } from '../models/DatosAnomalosModel';
import { RelacionFk } from '../models/RelacionFKModel';
import { TablaHuerfana } from '../models/TablaHuerfanaModel  ';
import { Tabla } from '../models/TablaModel';
import { Trigger } from '../models/TriggerModel';

@Injectable({
  providedIn: 'root'
})
export class AuditoriaService {
  urlApi: string = environment.urlApi

  datosAnomalos: DatosAnomalos[] = [];
  actionFk: ActionForeignKeys[] = [];
  relacionesFk: RelacionFk[] = [];
  tablasHuerfanas: TablaHuerfana[] = []
  tablas: Tabla[] = []
  triggers: Trigger[] = [];

  constructor(
    private http: HttpClient
  ) {}

  getDatosAnomalos(nombreBase: string){
    const url = `${this.urlApi}auditoria/getDatosAnomalos/${nombreBase}`
    return this.http.get<DatosAnomalos[]>(url).pipe(
      tap((resp: DatosAnomalos[]) => (
        this.datosAnomalos = JSON.parse(resp.toString()))),
      tap(console.log),
      catchError((err) => {
        return (this.datosAnomalos = JSON.parse(`[{"Respuesta":"${err.message}"}]`))
      }),
    )
  }

  getActionFK(nombreBase: string){
    const url = `${this.urlApi}auditoria/getActionFK/${nombreBase}`
    return this.http.get<ActionForeignKeys[]>(url).pipe(
      tap((resp: ActionForeignKeys[]) => (
        this.datosAnomalos = JSON.parse(resp.toString()))),
      tap(console.log),
      catchError((err) => {
        return (this.actionFk = JSON.parse(`[{"Respuesta":"${err.message}"}]`))
      }),
    )
  }

  getTablas(nombreBase: string){
    const url = `${this.urlApi}auditoria/getTablas/${nombreBase}`
    return this.http.get<Tabla[]>(url).pipe(
      tap((resp: Tabla[]) => (
        this.tablas = JSON.parse(resp.toString()))),
      tap(console.log),
      catchError((err) => {
        return (this.tablas = JSON.parse(`[{"Respuesta":"${err.message}"}]`))
      }),
    )
  }

  getTablasHuerfanas(nombreBase: string){
    const url = `${this.urlApi}auditoria/getTablasHuerfanas/${nombreBase}`
    return this.http.get<TablaHuerfana[]>(url).pipe(
      tap((resp: TablaHuerfana[]) => (
        this.tablasHuerfanas = JSON.parse(resp.toString()))),
      tap(console.log),
      catchError((err) => {
        return (this.tablasHuerfanas = JSON.parse(`[{"Respuesta":"${err.message}"}]`))
      }),
    )
  }

  getRelaciones(nombreBase: string){
    const url = `${this.urlApi}auditoria/getTodasRelaciones/${nombreBase}`
    return this.http.get<RelacionFk[]>(url).pipe(
      tap((resp: RelacionFk[]) => (
        this.relacionesFk = JSON.parse(resp.toString()))),
      tap(console.log),
      catchError((err) => {
        return (this.relacionesFk = JSON.parse(`[{"Respuesta":"${err.message}"}]`))
      }),
    )
  }

  getTriggers(nombreBase: string){
    const url = `${this.urlApi}auditoria/getTriggers/${nombreBase}`
    return this.http.get<Trigger[]>(url).pipe(
      tap((resp: Trigger[]) => (
        this.triggers = JSON.parse(resp.toString()))),
      tap(console.log),
      catchError((err) => {
        return (this.triggers = JSON.parse(`[{"Respuesta":"${err.message}"}]`))
      }),
    )
  }



}
