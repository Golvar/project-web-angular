import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  compteForm : FormGroup;
  submit : boolean = false;
  validPassword : boolean = true;
  validCompte : boolean = false;
  user : User = new User();
  alerteSameLogin = false;
  isAuth: Boolean;

  constructor(private formBuilder : FormBuilder, private apiService: ApiService, private authService: AuthentificationService) { }

  ngOnInit() {
    this.authService.isLoggedIn().subscribe(res => {
      this.isAuth = res;
    });

    

    if(this.isAuth){
      this.compteForm = this.formBuilder.group({
        name: ['', Validators.required],
        firstName: ['', Validators.required],
        adress: ['', [Validators.required]],
        cp: ['', [Validators.required]],
        ville: ['', [Validators.required]],
        tel: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])],
        email: ['', Validators.compose([Validators.email, Validators.required])],
        civilite: ['', [Validators.required]],
        login: [{value: '', disabled: true}, [Validators.required]],
        password: ['', [Validators.required]],
        passwordVerif: ['', [Validators.required]],
      },
      {
        //validator: this.verifPassword('mdp', 'mdp2')
      });
      this.apiService.getClient(sessionStorage.getItem('jwt_token')).subscribe(
        user =>{
          this.user = user as User;
          this.compteForm.patchValue({name: user.name});
          this.compteForm.patchValue({firstName: user.firstName});
          this.compteForm.patchValue({adress: user.adress});
          this.compteForm.patchValue({cp: user.cp});
          this.compteForm.patchValue({ville: user.ville});
          this.compteForm.patchValue({tel: user.tel});
          this.compteForm.patchValue({email: user.email});
          this.compteForm.patchValue({civilite: user.civilite});
          this.compteForm.patchValue({login: user.login});
        }
      );
      

      
    }else{
      this.compteForm = this.formBuilder.group({
        name: ['', Validators.required],
        firstName: ['', Validators.required],
        adress: ['', [Validators.required]],
        cp: ['', [Validators.required]],
        ville: ['', [Validators.required]],
        tel: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])],
        email: ['', Validators.compose([Validators.email, Validators.required])],
        civilite: ['', [Validators.required]],
        login: ['', [Validators.required]],
        password: ['', [Validators.required]],
        passwordVerif: ['', [Validators.required]],
      },
      {
        //validator: this.verifPassword('mdp', 'mdp2')
      });
    }
    
  }

  get getCompte(){
    return this.compteForm.controls;
  }
  

  saveUser() {
    if(this.verifPassword()){
      this.submit = true;
      this.validPassword = true;
    
      if(this.compteForm.valid){
        this.user.name = this.compteForm.controls['name'].value;
        this.user.firstName = this.compteForm.controls['firstName'].value;
        this.user.adress = this.compteForm.controls['adress'].value;
        this.user.cp = this.compteForm.controls['cp'].value;
        this.user.ville = this.compteForm.controls['ville'].value;
        this.user.tel = this.compteForm.controls['tel'].value;
        this.user.email = this.compteForm.controls['email'].value;
        this.user.civilite = this.compteForm.controls['civilite'].value;
        this.user.password = this.compteForm.controls['password'].value;
        this.user.passwordVerif = this.compteForm.controls['passwordVerif'].value;

        if(this.isAuth){
          this.updateUser(this.user);
        }
        else{
          this.user.login = this.compteForm.controls['login'].value;
          this.addUser(this.user);
        }
        
      }
    }else{
      this.validPassword = false;
    }
  }
  verifPassword():boolean{
    return this.compteForm.controls['password'].value === this.compteForm.controls['passwordVerif'].value;
  }


  addUser(user:User){
    return this.apiService.addClient(user).subscribe(success => {
      if(success.success == "true"){
        this.validCompte = true;
        this.alerteSameLogin = false;
      }else{
        this.alerteSameLogin = true
        this.validCompte = false;
      }
    });
  }

  updateUser(user:User){
    return this.apiService.updateClient(user).subscribe(success => {
      if(success.success == "true"){
        this.validCompte = true;
        this.alerteSameLogin = false;
      }else{
        this.alerteSameLogin = true
        this.validCompte = false;
      }
    });
  }
  
}
