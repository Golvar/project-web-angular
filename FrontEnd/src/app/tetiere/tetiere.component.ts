import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthentificationService } from '../service/authentification.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tetiere',
  templateUrl: './tetiere.component.html',
  styleUrls: ['./tetiere.component.css']
})
export class TetiereComponent implements OnInit {

  nbProduct:number;
  isAuth: Boolean;
  authService: AuthentificationService;

  constructor( private store : Store, private authentificationService: AuthentificationService) { 
    this.store.select(state => state.product.panier).subscribe (u => this.nbProduct = u.length);
    this.authService = authentificationService;
    this.authentificationService.isLoggedIn().subscribe(res => {
      this.isAuth = res;
    });
    
  }

  ngOnInit() {
    
  }

  logout(){
    this.authentificationService.logout();
    this.log();
  }

  public log(){
    this.authentificationService.isLoggedIn().subscribe(res => {
      this.isAuth = res;
    });
  }
}
