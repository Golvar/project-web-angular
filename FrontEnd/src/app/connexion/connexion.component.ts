import { Component, OnInit, ɵɵcontainerRefreshEnd } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthentificationService } from '../service/authentification.service';
import { Router } from '@angular/router';
import { LoadProducts } from '../store/actions/product.action';
import { TetiereComponent } from '../tetiere/tetiere.component';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  loginForm: FormGroup;
  alreadyLoggedIn: Boolean;
  failLoggedIn = false;
  errors ="";


  login: any;
  password: any;


  constructor(
    private formBuilder: FormBuilder,
    private authentificationService: AuthentificationService,
    private router: Router,
    private tetiere: TetiereComponent
  ) {
    this.alreadyLoggedIn = false;
   }

  ngOnInit() {
    this.load();
  }


  connect() {    
    this.authentificationService.login(this.login, this.password).subscribe(success => {
      if(success.token){
        sessionStorage.setItem('jwt_token', success.token);
        this.failLoggedIn = false;
      }else{
        this.failLoggedIn = true;
      }
      
      
      this.load();
    });
  }

  load() { 
    this.authentificationService.isLoggedIn().subscribe(res => {
      this.alreadyLoggedIn = res;
      this.tetiere.log();
    });
  }

}
