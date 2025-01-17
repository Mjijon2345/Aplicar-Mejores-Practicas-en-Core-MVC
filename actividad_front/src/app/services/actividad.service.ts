import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Actividad } from "../models/Actividad";
import { IActividadService } from "./IActividadService";

export const urlRecord = "http://localhost/api/";

@Injectable({ providedIn: 'root' })
export class ActividadService implements IActividadService {
  constructor(private http: HttpClient) {}

  getActivities(page: number): Observable<any> {
    return this.http.get(`${urlRecord}activity/index?page=${page}`);
  }

  getActivitiesID(id: number): Observable<any> {
    return this.http.get(`${urlRecord}activity/show/${id}`);
  }

  getActivitiesText(text: string, page: number): Observable<any> {
    return this.http.get(`${urlRecord}activity/search/${text}?page=${page}`);
  }

  deleteActivity(id: number): Observable<any> {
    return this.http.delete(`${urlRecord}activity/destroy/${id}`);
  }

  createActivity(actividad: Actividad): Observable<any> {
    const params = JSON.stringify(actividad);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${urlRecord}activity/store`, params, { headers });
  }

  updateActivity(id: number, actividad: Actividad): Observable<any> {
    const params = JSON.stringify(actividad);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`${urlRecord}activity/update/${id}`, params, { headers });
  }
}
