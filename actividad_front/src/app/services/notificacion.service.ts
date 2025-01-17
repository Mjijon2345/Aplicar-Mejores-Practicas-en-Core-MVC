import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificacionService {
  private notificacionSubject = new Subject<string>();
  notificacion$ = this.notificacionSubject.asObservable();

  enviarNotificacion(mensaje: string) {
    this.notificacionSubject.next(mensaje);
  }
}
