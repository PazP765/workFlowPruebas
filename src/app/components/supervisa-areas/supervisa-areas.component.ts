import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ServiceModel } from 'src/app/models/serviceModel';
import { ServiceModelArea } from 'src/app/models/serviceModelArea';
import { ServiceModelMaquina } from 'src/app/models/serviceModelMaquina';
import { ServiceModelMecanico } from 'src/app/models/serviceModelMecanico';
import { DBConectionService } from 'src/app/services/dbconection.service';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-supervisa-areas',
  templateUrl: './supervisa-areas.component.html',
  styleUrls: ['./supervisa-areas.component.css']
})
export class SupervisaAreasComponent implements OnInit {
  sevicemodelA!:ServiceModel[]
  bsModalRef: BsModalRef = new BsModalRef()
  searchText:any
  searchTextID: any;
  searchTextNS: any;
  searchTextFS: any;
  searchTextAS: any;
  searchTextMAQ: any;
  searchTextDIS: any;
  searchTextNomI: any;
  searchTextNomT: any;
  searchTextNomMec: any;/** */
  searchTextFecI: any;
  searchTextFecCierr: any;
  searchTextGenP: any;
  searchTextTimT: any;
  searchTextTSani: any;
  searchTextStat: any;

  serviceModel: ServiceModel = new ServiceModel()
  serviceModelArea: ServiceModelArea = new ServiceModelArea()
  serviceModelMaquina: ServiceModelMaquina = new ServiceModelMaquina()
  serviceModelMecanico: ServiceModelMecanico = new ServiceModelMecanico()

  maqunasAreas: any = []
  areas: any = []

  datatable: any = []
  datatable2: any = []
  datatable3: any = []
  datatable4: any = []
  datatableUsuarios: any = []
  public page:number=0
  public search:string='';
  constructor(private toastr: ToastrService,private modalService: BsModalService,public route: ActivatedRoute,private router: Router,private dBConectionService: DBConectionService) { }

  ngOnInit(): void {
    this.sinFiltros();
    this.onDataTable();
    this.onDataTable2();
    this.onDataTable3();
    this.onDataTable4();
    this.onDataTable5();
    this.onDataTable6();
    this.onDataTableUsuarios()
  }
  onDataTable(){
    this.dBConectionService.getSolicitud().subscribe(res=>{
  this.datatable=res;

    });
  }
  sinFiltros(){
    this.searchTextStat=''
    this.searchTextGenP=''
    this.searchTextID=''
    this.searchTextNS=''
    this.searchTextFS=''
    this.searchTextAS=''
    this.searchTextMAQ=''
    this.searchTextDIS=''
    this.searchTextNomI=''
    this.searchTextNomT=''
    this.searchTextNomMec=''
  }
  onDataTable2(){
    this.dBConectionService.getSolicitudArea().subscribe(res=>{
  this.datatable2=res;

    });
  }
  onDataTable3(){
    this.dBConectionService.getSolicitudMaquina().subscribe(res=>{
  this.datatable3=res;
    });
  }
  onDataTable5(){
    
    this.dBConectionService.getSolicitudArea().subscribe(res=>{
  this.areas=res;
  
    });
  }
  onDataTable6(){
    
    this.dBConectionService.getSolicitudMaquina().subscribe(res=>{
  this.maqunasAreas=res;
    });
  }
 
  onDataTable4(){
    this.dBConectionService.getSolicitudMecanico().subscribe(res=>{
  this.datatable4=res;
    });
  }
  
  onDataTableUsuarios(){
    this.dBConectionService.getUsuarios().subscribe(res=>{
  this.datatableUsuarios=res;
  console.log(this.datatableUsuarios)
    });
  }

//   onSearch() {
//   usuarios  fechasFiltradas = this.myDates
//            .filter((date: Date) => pickerDate.getTime() < date.getTime() < pickerDate2.getTime());
//  }

saveSomeThing() {
 
 let nameInput=(document.getElementById('txtNamed') as HTMLInputElement).value
  let name = nameInput+'.xlsx';
  let element = document.getElementById('season-tble');
  const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

  const book: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

  XLSX.writeFile(book, name);

  (document.getElementById('txtNamed') as HTMLInputElement).value=''
  
} 

openModal(template: TemplateRef<any>) {
  this.bsModalRef = this.modalService.show(template)
}

saveSomeThings() {
  this.bsModalRef.hide()
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
  this.serviceModel.emailSent2='true'
  }
  
  onUpdateSalida(serviceModel: ServiceModel): void {
    let valor='i'
    let valor2
    for(let item of this.datatableUsuarios){
     valor2=item.nombre3
      if( (document.getElementById('txtfirma') as HTMLInputElement).value === valor2){
      valor='existe'
      }
          
    }
    if(valor==='existe'){
      //  serviceModel.nomina2= parseInt((document.getElementById('txtNomina2') as HTMLInputElement).value)
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
            this.onDataTable2();
            this.onDataTable3();
            this.onDataTable4();
            this.onDataTable5();
            this.onDataTable6();
          }
        })
      
      } else {
        alert('Error! :(')
      }
    })
  
     
    }else{
      this.toastr.error('Número de nomina no encontrado!');
 
   
    }
   
  }
nextPage(){
this.page+=5;
}
previousPage(){
  if(this.page>0)
  this.page-=5;
  
}

}
