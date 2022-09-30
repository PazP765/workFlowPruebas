import { Pipe, PipeTransform } from '@angular/core';
import { ServiceModelArea } from '../models/serviceModelArea';
import { ServiceModelMaquina } from '../models/serviceModelMaquina';

@Pipe({
  name: 'ascDesc'
})
export class AscDescPipe implements PipeTransform {
  transform(maquinas: ServiceModelMaquina[],Areas: ServiceModelArea,search:string='') {
    // if(search.length===0){}else{
    //   return solicitud.splice(page,page+5)
    // }
    
    // const filteredSolicitudes = solicitud.filter(soli=>soli.area.includes(search))
    // return filteredSolicitudes.slice(page,page+5)
  }

}
