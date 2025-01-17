📚 Aplicar Mejores Practicas en Core MVC

Este proyecto es una aplicación web desarrollada en Angular que permite gestionar actividades de forma eficiente. Se han aplicado los principios SOLID y los patrones de diseño para garantizar un código limpio, mantenible y escalable

🚀 Tecnologías Utilizadas

  Angular (Framework de desarrollo web)
  
  TypeScript (Lenguaje de programación)
  
  RxJS (Programación reactiva)
  
  Bootstrap (Estilos y diseño responsivo)
  
  API REST (Backend para gestionar datos)


🎯 Objetivos del Proyecto

  Gestionar actividades con operaciones CRUD.
  
  Implementar los principios SOLID.
  
  Aplicar los patrones de diseño para mejorar la escalabilidad.

✅ Principios SOLID Aplicados

1. Single Responsibility Principle (SRP)

  Cada clase tiene una única responsabilidad:
  
  ActividadService → Maneja la comunicación con la API.
  
  ActividadFactory → Se encarga de crear instancias de Actividad.
  
  NotificacionService → Gestiona el envío de notificaciones.
  
  ActividadComponent → Controla la interacción con el usuario.

🔨 Patrones de Diseño Implementados

1. Factory Method


Se centralizó la creación de objetos Actividad en la clase ActividadFactory.


  export class ActividadFactory {
    static crearActividad(id: number, typeId: number, nombre: string, descripcion: string): Actividad {
      return new Actividad(id, typeId, nombre, descripcion, new Date().toString(), 0, '', new Type(typeId, '', 0, ''));
    }
  }

2. Observer

     @Injectable({ providedIn: 'root' })
  export class NotificacionService {
    private notificacionSubject = new Subject<string>();
    notificacion$ = this.notificacionSubject.asObservable();
  
    enviarNotificacion(mensaje: string) {
      this.notificacionSubject.next(mensaje);
    }

Permite la comunicación reactiva entre componentes mediante RxJS:

2. Dependency Inversion Principle (DIP)

  Uso de interfaces para desacoplar los servicios.
  
  Inyección de dependencias para trabajar con abstracciones.
  
  Visualizar actividades: La aplicación carga las actividades desde la API.
  
  Crear actividad: Ingresar nombre y descripción para registrar una nueva actividad.
  
  Eliminar actividad: Opción de eliminar registros existentes.

Notificaciones: Se muestran mensajes de éxito o error mediante el componente notificador.

📞 Contacto


✉️ Correo: matt-jijon@hotmail.com

