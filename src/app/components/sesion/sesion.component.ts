import { Component, OnInit, TemplateRef } from '@angular/core';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DBConectionService } from 'src/app/services/dbconection.service';
import { ServiceModel } from 'src/app/models/serviceModel';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import Swal from 'sweetalert2'
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';
@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {
  bsModalRef: BsModalRef = new BsModalRef()
  datatable: any = []

  serviceModel: ServiceModel = new ServiceModel()
totalparo:number=0;
nominaimp:string=''
/**checks */
form: FormGroup;
ordersData = [
  { id: 'Falla eléctrica', name: 'Falla eléctrica' },
  { id: 'Falla mecánica', name: 'Falla mecánica' },
  { id: 'Falla neumática', name: 'Falla neumática' },
  { id: 'Falla hidráulica', name: 'Falla hidráulica' },
  { id: 'Falla de energía eléctrica (Proveedor)', name: 'Falla de energía eléctrica (Proveedor)' }
];
get ordersFormArray() {
  return this.form.controls['orders'] as FormArray;
}
// In cas
//herramientas
formtools:FormGroup;
toolsData = [
  { id1: 'GRASA EP2(USO GENERAL)', name1: 'GRASA EP2(USO GENERAL)' },
  { id1: 'GRASA XHP 222(ALTA TEMPERATURA Y FRICCIÓN)', name1: 'GRASA XHP 222(ALTA TEMPERATURA Y FRICCIÓN)' },
  { id1: 'GRASA SHC 220(EXCLUSIVA DE BOBST)', name1: 'GRASA SHC 220(EXCLUSIVA DE BOBST)' },
  { id1: 'GRASA MOLYKOTE SEPARATOR SPRAY OIL', name1: 'GRASA MOLYKOTE SEPARATOR SPRAY OIL' },
  { id1: 'GRASA MOBIL SHC POLYREX 462', name1: 'GRASA MOBIL SHC POLYREX 462' },
  { id1: 'GRASA LIQUIDA WURTH HHS 2000', name1: 'GRASA LIQUIDA WURTH HHS 2000' },
  { id1: 'ACEITE MOBIL SHC CIBUS 68(EMBOBINADORES)', name1: 'ACEITE MOBIL SHC CIBUS 68(EMBOBINADORES)' }
];
get toolsFormArray() {
  return this.formtools.controls['tools'] as FormArray;
}
//heramientas
  constructor(private formBuilder: FormBuilder, _CargarScriptsService: CargarScriptsService, public route: ActivatedRoute, private router: Router, private dBConectionService: DBConectionService, private modalService: BsModalService) {
    
    this.form = this.formBuilder.group({
      orders: new FormArray([])
    });
    this.formtools = this.formBuilder.group({
      tools: new FormArray([])
    });

    this.addCheckboxes();
  }
 /**submits */
 private addCheckboxes() {
  this.ordersData.forEach(() => this.ordersFormArray.push(new FormControl(false)));
  this.toolsData.forEach(() => this.toolsFormArray.push(new FormControl(false)));
}

submit() {
  const selectedOrderIds = this.form.value.orders
    .map((checked: any, i:| number) => checked ? this.ordersData[i].id : null)
    .filter((v: null) => v !== null);
  console.log(selectedOrderIds);
}
 /**submits */
  ngOnInit(): void {
    this.onDataTable();
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id')

        if (id) {
          this.dBConectionService.getSolicitudSM(id)
            .subscribe({
              next: response => {
                this.datatable = response;
this.nominaimp=id

              }
            });
        }
      }

    })


  
  }

  onSetData(select: any) {

    this.serviceModel.idSolicitud =select.idSolicitud
    this.serviceModel.nombreSolicitante =select.nombreSolicitante
    this.serviceModel.correo =select.correo
    this.serviceModel.fechaSolicitud=select.fechaSolicitud
    this.serviceModel.horaSolicitud =select.horaSolicitud
    this.serviceModel.area =select.area
    this.serviceModel.maquina =select.maquina
    this.serviceModel.dispositivo=select.dispositivo
    this.serviceModel.descripcionProblema =select.descripcionProblema
    this.serviceModel.nomina =select.nomina
    this.serviceModel.nombre =select.nombre
    this.serviceModel.fechaInicio=select.fechaInicio
    this.serviceModel.horaInicio =select.horaInicio
    this.serviceModel.diagnostico=select.diagnostico
    this.serviceModel.tipoFalla=select.tipoFalla
    this.serviceModel.emailSent =select.emailSent
    this.serviceModel.generoParo =select.generoParo
    this.serviceModel.paroCorrectivo=select.paroCorrectivo
    this.serviceModel.paroOperativo =select.paroOperativo
    this.serviceModel.paroRefaccion =select.paroRefaccion
    this.serviceModel.tiempoTotal =select.tiempoTotal
    this.serviceModel.grasaUtilizada=select.grasaUtilizada
    this.serviceModel.refaMateHerra =select.refaMateHerra
    this.serviceModel.tareasEjecutadas=select.tareasEjecutadas
    this.serviceModel.fechaFinal =select.fechaFinal
    this.serviceModel.horaFinal =select.horaFinal
    this.serviceModel.trabajoSanitizado=select.trabajoSanitizado
    this.serviceModel.estatusActividad =select.estatusActividad
    this.serviceModel.firmaSolicitante =select.firmaSolicitante
    this.serviceModel.emailSent2=select.emailSent2
    }
  openModal(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template)
  }
  openModal2(template2: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template2)
  }
  openModal25(template25: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template25)
  }
  openModal3(template3: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template3)
  }
  saveSomeThing() {

    this.bsModalRef.hide()
  }

  onDataTable() {
    this.dBConectionService.getSolicitud().subscribe(res => {
      this.datatable = res;

    });
  }
 


onUpdateRevision(serviceModel: ServiceModel): void {

    serviceModel.emailSent2='true'

    if ((document.getElementById('flexRadioDefault1') as HTMLInputElement).checked === true) {
      serviceModel.trabajoSanitizado = 'Si' } 
      else{
        if ((document.getElementById('flexRadioDefault2') as HTMLInputElement).checked === true) {
          serviceModel.trabajoSanitizado = 'No' } 
      }
      serviceModel.estatusActividad = (document.getElementById('first-select') as HTMLInputElement).value
    this.dBConectionService.addRevision(serviceModel.idSolicitud, serviceModel)
  .subscribe((res) => {
    if (res) {
      Swal.fire({
        title: 'Operación realizada con éxito',
        text: "¡¡Presione el botón para confirmar!!",
        icon: 'info',
        showCancelButton: false,
        confirmButtonColor: 'rgb(255, 194, 28)',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok,volver'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Operación realizada.!',
            'Notificación enviada.',
            'success',

          )
          this.onDataTable();
        }
      })
    } else {
      alert('Error! :(')
    }
  })



}

public getInputValue(inputValue:string){
    
  this.router.navigate(['/Sesion_mecanico/'+inputValue])
  .then(() => {
    window.location.reload();
  });

  

}


  onUpdateSalida(serviceModel: ServiceModel): void {
    const selectedOrderIds = this.form.value.orders
    .map((checked: any, i:| number) => checked ? this.ordersData[i].id : null)
    .filter((v: null) => v !== null);

    serviceModel.tipoFalla=''+selectedOrderIds
  this.dBConectionService.addDiagnostico(serviceModel.idSolicitud, serviceModel)
    .subscribe((res) => {
      if (res) {
        Swal.fire({
          title: 'Operación realizada con éxito',
          text: "¡¡Presione el botón para confirmar!!",
          icon: 'info',
          showCancelButton: false,
          confirmButtonColor: 'rgb(255, 194, 28)',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ok,volver'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Operación realizada.!',
              'Notificación enviada.',
              'success',

            )
            this.onDataTable();
          }
        })
        
      } else {
        alert('Error! :(')
      }
    })
}

onUpdateSalida3(serviceModel: ServiceModel): void {
  if ((document.getElementById('flexRadioDefault1') as HTMLInputElement).checked === true) {
    serviceModel.generoParo = 'Si' }
    else{
      if ((document.getElementById('flexRadioDefault2') as HTMLInputElement).checked === true) {
        serviceModel.generoParo = 'No' }
    }
  let total:Number=serviceModel.paroCorrectivo+serviceModel.paroOperativo+serviceModel.paroRefaccion
  this.serviceModel.tiempoTotal=total.toString()
  console.log(this.serviceModel.tareasEjecutadas)
  this.serviceModel.emailSent='true'
  console.log(this.serviceModel.tiempoTotal,'tota',total)
  this.dBConectionService.addTareas(serviceModel.idSolicitud, serviceModel)
    .subscribe((res) => {
      if (res) {
        Swal.fire({
          title: 'Operación realizada con éxito',
          text: "¡¡Presione el botón para confirmar!!",
          icon: 'info',
          showCancelButton: false,
          confirmButtonColor: 'rgb(255, 194, 28)',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ok,volver'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Operación realizada.!',
              'Notificación enviada.',
              'success',

            )
            this.onDataTable();
          }
        })
      } else {
        alert('Error! :(')
      }
    })
}

onUpdateSalida4(serviceModel: ServiceModel): void {
  const selectedToolsIds = this.formtools.value.tools
  .map((checked: any, e:| number) => checked ? this.toolsData[e].id1 : null)
  .filter((v: null) => v !== null);
  serviceModel.grasaUtilizada=''+selectedToolsIds

this.dBConectionService.addTareas(serviceModel.idSolicitud, serviceModel)
  .subscribe((res) => {
    if (res) {
      Swal.fire({
        title: 'Operación realizada con éxito',
        text: "¡¡Presione el botón para confirmar!!",
        icon: 'info',
        showCancelButton: false,
        confirmButtonColor: 'rgb(255, 194, 28)',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok,volver'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Operación realizada.!',
            'Notificación enviada.',
            'success',

          )
          this.onDataTable();
        }
      })
    } else {
      alert('Error! :(')
    }
  })
}

}
"Procedure or function 'reparacionUpdate' expects parameter '@tareasEjecutadas', which was not supplied."