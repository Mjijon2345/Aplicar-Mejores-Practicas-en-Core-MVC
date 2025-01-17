import { Component, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/Empleado';
import { Persona } from 'src/app/models/Persona';
import { EmpleadoService } from 'src/app/services/empleado.service';


export var records: Array<Empleado> = [];


@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
  providers: [EmpleadoService]
})
export class EmpleadoComponent implements OnInit {
  public numeroIngresado!: string;
  public textoIngresado!: string;
  //public records: Array<Empleado> = [];
  public recordsx: Array<Empleado> = [];
  public filteredRecords: Array<Empleado> = [];
 
  public estado: boolean = false;
  public isConfirmationDialogOpen: boolean = false;
  public iddelete!: string;
  //public perd: Persona = new Persona("0343046346346", "MONSALVE", "MONSALVE", "MONSALVE", "MONSALVE", "MONSALVE", "MONSALVE", "MONSALVE", 1, "MONSALVE",);
  //public emp = new Empleado(1,"MONSALVE", "MONSALVE", 3, "MONSALVE", "MONSALVE", this.perd);


  openConfirmationDialog(idnumero: string) {
    this.iddelete = idnumero;
    this.isConfirmationDialogOpen = true;
    console.log("diss:" + this.iddelete);
  }

  closeConfirmationDialog() {
    this.isConfirmationDialogOpen = false;

  }

  confirmDeletion() {
    this.eliminarData();
    this.closeConfirmationDialog();

  }



  errorMensaje: string = "";

  currentPage = 1;
  lastPage = 1;



  constructor(
    private router: Router,


    private empleadoService: EmpleadoService

  ) {



  }


  ngOnInit(): void {
    this.getData();
  }

  public getData(): void {
    this.estado = true;
    
    this.recordsx= records;
    this.filteredRecords = this.recordsx;

  }


  eliminarData(): void {
    this.estado = true;
    console.log("numero:" + this.iddelete);


    let indexx = -1;
    const ide = parseInt(this.iddelete, 10);
    for (let i = 0; i < records.length; i++) {
      if (records[i].employee_id ===ide ) {
        indexx = i;
        break;  // Termina el bucle cuando encuentres el índice
      }
    }
    
            if (indexx !== -1) {
              records.splice(indexx, 1);
              
              alert("Registro eliminado con exito !");
            } else {
              alert("Registro no eliminado con exito !");
            }



  }








  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getData();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.lastPage) {
      this.currentPage++;

      this.getData();

    }
  }



  public onSumbmitID(): void {
    this.estado = false;
    console.log("diss:" + this.numeroIngresado);
    let indexx = -1;
    const idet = parseInt(this.numeroIngresado, 10);
    for (let i = 0; i < records.length; i++) {
      if (records[i].employee_id ===idet ) {
        indexx = i;
        break;  // Termina el bucle cuando encuentres el índice
      }
    }
    
            if (indexx !== -1) {
              this.filteredRecords = [this.recordsx[indexx]];

              //records[indexx].employee_id
              
              
            } else {
              alert("Registro no encontrado !");
            }









  }





  public navegarAPagina() {

    this.router.navigate(['/creaEmpleado']); // Ruta definida en el enrutamiento
  }


  public navegarAPagina2(numer: string) {
    const numero = numer;
    this.router.navigate(['/creaEmpleado'], { queryParams: { numero } }); // Ruta definida en el enrutamiento
  }



}
