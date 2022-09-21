import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OuthService } from 'src/app/services/outh.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validar:number=0
  constructor(private authService: OuthService,
    public router: Router,) { }

  ngOnInit(): void {
  }

  routeRedirect = '';



  

  login() {
  
      if((document.getElementById('username') as HTMLInputElement).value === 'sa'&& (document.getElementById('password') as HTMLInputElement).value === 'sa'){
        this.authService.loginAdmin();
        this.router.navigate(['/supervisor']);
      
        
      }}
   
  }

