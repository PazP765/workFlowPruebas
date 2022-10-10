import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OuthService } from 'src/app/services/outh.service';

@Component({
  selector: 'app-login-supervisor',
  templateUrl: './login-supervisor.component.html',
  styleUrls: ['./login-supervisor.component.css']
})
export class LoginSupervisorComponent implements OnInit {
  validar:number=0
  constructor(private authService: OuthService,
    public router: Router,) { }

  ngOnInit(): void {
  }

  routeRedirect = '';



  

  login() {
  
      if((document.getElementById('username') as HTMLInputElement).value === 'sa1'&& (document.getElementById('password') as HTMLInputElement).value === 'sa1'){
        this.authService.loginAdmin();
        this.router.navigate(['/supervisorA']);
      
        
      }}

     
   
  }

