import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DBConectionService } from '../../services/dbconection.service';
import { CargarScriptsService } from '../../services/cargar-scripts.service';
import { ServiceModel } from 'src/app/models/serviceModel';
import { ServiceModelArea } from 'src/app/models/serviceModelArea';
import { ServiceModelMaquina } from 'src/app/models/serviceModelMaquina';

@Component({
  selector: 'app-tomes-component',
  templateUrl: './tomes-component.component.html',
  styleUrls: ['./tomes-component.component.css']
})
export class TomesComponentComponent implements OnInit {
  searchText: any;
  serviceModel: ServiceModel = new ServiceModel()
  serviceModelArea: ServiceModelArea = new ServiceModelArea()
  serviceModelMaquina: ServiceModelMaquina = new ServiceModelMaquina()
  datatable: any = []
  maqunasAreas: any = []
  areas: any = []
  public area1:string=''
  public txtID:string=''

  constructor(_CargarScriptsService:CargarScriptsService, public route: ActivatedRoute, private router: Router,private dBConectionService: DBConectionService) { 
   
  }

  ngOnInit(): void {
    this.searchText=''
    this.onDataTable();
    this.onDataTable2();
    this.onDataTable3();
  }

  onDataTable3(){
    
    this.dBConectionService.getSolicitudArea().subscribe(res=>{
  this.maqunasAreas=res;
  console.log(this.maqunasAreas)
    });
  }
  onDataTable2(){
    this.dBConectionService.getSolicitudArea().subscribe(res=>{
  this.maqunasAreas=res;
  console.log(this.maqunasAreas)

    });
  }
  onDataTable(){
  this.dBConectionService.getSolicitud().subscribe(res=>{
this.datatable=res;

  });
}


public getInputValue(inputValue:string){
    
  this.router.navigate(['/Sesion_mecanico/'+inputValue])
  .then(() => {
    window.location.reload();
  });

  

}









}
