import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceModel } from 'src/app/models/serviceModel';
import { ServiceModelArea } from 'src/app/models/serviceModelArea';
import { ServiceModelMaquina } from 'src/app/models/serviceModelMaquina';
import { ServiceModelMecanico } from 'src/app/models/serviceModelMecanico';
import { DBConectionService } from 'src/app/services/dbconection.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-supervisa-areas',
  templateUrl: './supervisa-areas.component.html',
  styleUrls: ['./supervisa-areas.component.css']
})
export class SupervisaAreasComponent implements OnInit {
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
  public page:number=0
  public search:string='';
  constructor(public route: ActivatedRoute,private router: Router,private dBConectionService: DBConectionService) { }

  ngOnInit(): void {
    this.sinFiltros();
    this.onDataTable();
    this.onDataTable2();
    this.onDataTable3();
    this.onDataTable4();
    this.onDataTable5();
    this.onDataTable6();
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
  console.log(this.maqunasAreas)
    });
  }
  onDataTable6(){
    
    this.dBConectionService.getSolicitudMaquina().subscribe(res=>{
  this.maqunasAreas=res;
  console.log(this.maqunasAreas)
    });
  }
 
  onDataTable4(){
    this.dBConectionService.getSolicitudMecanico().subscribe(res=>{
  this.datatable4=res;
    });
  }

//   onSearch() {
//     fechasFiltradas = this.myDates
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


nextPage(){
this.page+=5;
}
previousPage(){
  if(this.page>0)
  this.page-=5;
  
}

}
