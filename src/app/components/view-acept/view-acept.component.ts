import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';
import { DBConectionService } from 'src/app/services/dbconection.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { ServiceModel } from 'src/app/models/serviceModel';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-view-acept',
  templateUrl: './view-acept.component.html',
  styleUrls: ['./view-acept.component.css']
})
export class ViewAceptComponent implements OnInit {
  bsModalRef: BsModalRef = new BsModalRef()
  datatable: any = []
  serviceModel: ServiceModel = new ServiceModel()


  constructor(private toastr: ToastrService,_CargarScriptsService: CargarScriptsService, public route: ActivatedRoute, private router: Router, private dBConectionService: DBConectionService, private modalService: BsModalService) {
_CargarScriptsService.carga(['time'])
  }

  ngOnInit(): void {
this.datatable
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id')

        if (id) {
          this.dBConectionService.getByIdSolicitud(id)
            .subscribe({
              next: response => {
                this.datatable = response;

                console.log(this.datatable)
              }
            });
        }
      }

    })



  }
  public getInputValue(inputValue:string){
    
    this.router.navigate(['/Sesion_mecanico/'+inputValue])
    .then(() => {
      window.location.reload();
    });
  
    
  
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
    this.serviceModel.emailSent ='true'
    this.serviceModel.nombre2=select.nombre2 
    this.serviceModel.nomina2=select.nomina2
    this.serviceModel.asignacion=select.asignacion 
    this.serviceModel.generoParo =select.generoParo 
    this.serviceModel.paroCorrectivo=select.paroCorrectivo
    this.serviceModel.paroOperativo =select.paroOperativo 
    this.serviceModel.paroRefaccion =select.paroRefaccion 
    this.serviceModel.tiempoTotal =select.tiempoTotal 
    this.serviceModel.grasaUtilizada=select.grasaUtilizada
    this.serviceModel.refaMateHerra =select.refaMateHerra 
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

  openModalRea(templateRea: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(templateRea)
  }

  saveSomeThing() {
    this.bsModalRef.hide()
  } 

  onDataTable() {
    this.dBConectionService.getSolicitud().subscribe(res => {
      this.datatable = res;

    });
  }

  onUpdateSalida(serviceModel: ServiceModel): void {
  //  serviceModel.nomina2= parseInt((document.getElementById('txtNomina2') as HTMLInputElement).value)
  this.dBConectionService.addDiagnostico(serviceModel.idSolicitud, serviceModel)
    .subscribe((res) => {
      if (res) {
        alert('ok'+res+'n2'+res.nomina2+'n1'+res.nomina)
        console.log(''+serviceModel.nomina2)
      } else {
        alert('Error! :(')
      }
    })
  
 
}
onTerm(){
  this.toastr.error('Esta solicitud ya ha sido cerrada!');
}
}
