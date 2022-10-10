import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioSolicitudComponent } from './components/formulario-solicitud/formulario-solicitud.component';
import { FormularioFinalComponent } from './components/formulario-final/formulario-final.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TomesComponentComponent } from './components/tomes-component/tomes-component.component';
import { MecancomaterialComponent } from './components/mecancomaterial/mecancomaterial.component';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewAceptComponent } from './components/view-acept/view-acept.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SesionComponent } from './components/sesion/sesion.component';
import { RevisionFinComponent } from './components/revision-fin/revision-fin.component';
import { AdminComponent } from './components/admin/admin.component';
import { SupervisaAreasComponent } from './components/supervisa-areas/supervisa-areas.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterRangePipe } from './pipes/filter-range.pipe';
import { AscDescPipe } from './pipes/asc-desc.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginSupervisorComponent } from './components/login-supervisor/login-supervisor.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    FormularioSolicitudComponent,
    FormularioFinalComponent,
    NavbarComponent,
    TomesComponentComponent,
    MecancomaterialComponent,
    ViewAceptComponent,
    SesionComponent,
    RevisionFinComponent,
    AdminComponent,
    SupervisaAreasComponent,
    FilterRangePipe,
    AscDescPipe,
    LoginSupervisorComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
