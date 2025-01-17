import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActividadService } from '../../services/actividad.service';

import { NotificacionService } from '../../services/notificacion.service';
import { Actividad } from '../../models/Actividad';
import { ActividadFactory } from 'src/app/components/factories/actividad.factory';



@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {
  actividades: Actividad[] = [];
  nuevaActividadNombre: string = '';
  nuevaActividadDescripcion: string = '';

  constructor(
    private actividadService: ActividadService,
    private notificacionService: NotificacionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarActividades();
  }

  cargarActividades(): void {
    this.actividadService.getActivities(1).subscribe(
      (data: any) => {
        this.actividades = data.data.data.map((item: any) =>
          ActividadFactory.crearActividad(item.id, item.type_activity_id, item.nombre, item.descripcion)
        );
        this.notificacionService.enviarNotificacion('Actividades cargadas correctamente.');
      },
      () => {
        this.notificacionService.enviarNotificacion('Error al cargar las actividades.');
      }
    );
  }

  crearActividad(): void {
    const nuevaActividad = ActividadFactory.crearActividad(0, 1, this.nuevaActividadNombre, this.nuevaActividadDescripcion);

    this.actividadService.createActivity(nuevaActividad).subscribe(
      () => {
        this.notificacionService.enviarNotificacion('Actividad creada exitosamente.');
        this.cargarActividades();
      },
      () => {
        this.notificacionService.enviarNotificacion('Error al crear la actividad.');
      }
    );
  }
}
