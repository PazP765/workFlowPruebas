import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DBConectionService } from '../../services/dbconection.service';
import { CargarScriptsService } from '../../services/cargar-scripts.service';
import { ServiceModel } from 'src/app/models/serviceModel';
import { ServiceModelArea } from 'src/app/models/serviceModelArea';
import { ServiceModelMaquina } from 'src/app/models/serviceModelMaquina';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-tomes-component',
  templateUrl: './tomes-component.component.html',
  styleUrls: ['./tomes-component.component.css']
})
export class TomesComponentComponent implements OnInit {
  searchText: any;
  searchTextPend:any;
  serviceModel: ServiceModel = new ServiceModel()
  serviceModelArea: ServiceModelArea = new ServiceModelArea()
  serviceModelMaquina: ServiceModelMaquina = new ServiceModelMaquina()
  datatable: any = []
  datatableTomadas: any = []
  datatableTerminadas: any = []
  datatablePendientes: any = []
  maqunasAreas: any = []
  areas: any = []
  public area1:string=''
  public txtID:string=''

  constructor(private toastr: ToastrService,_CargarScriptsService:CargarScriptsService, public route: ActivatedRoute, private router: Router,private dBConectionService: DBConectionService) { 
   
  }

  ngOnInit(): void {
    this.searchText=''
    this.onDataTable();
    this.onDataTablePendientes();
    this.onDataTableTomadas();
    this.onDataTableTerminadas();
    this.onDatatableAreas();
  }

 
  onclickTomadas(){
    this.toastr.warning('Esta solicitud ya ha sido tomada!');
  }
  
  onDataTable(){
  this.dBConectionService.getSolicitud().subscribe(res=>{
this.datatable=res;

  });
}
onDataTableTomadas(){
  this.dBConectionService.getSolicitudTomada().subscribe(res=>{
this.datatableTomadas=res;

  });
}
onDataTableTerminadas(){
  this.dBConectionService.getSolicitudTerminada().subscribe(res=>{
this.datatableTerminadas=res;

  });
}
onDataTablePendientes(){/**pendientes por asignar (no han sido tomadas) */
  this.dBConectionService.getSolicituPendiente().subscribe(res=>{
this.datatablePendientes=res;

  });
}
onDatatableAreas(){
  this.dBConectionService.getSolicitudArea().subscribe(res=>{
    this.maqunasAreas=res;
    
      });
}


public getInputValue(inputValue:string){
    
  this.router.navigate(['/Sesion_mecanico/'+inputValue])
  .then(() => {
    window.location.reload();
  });

  

}









}
