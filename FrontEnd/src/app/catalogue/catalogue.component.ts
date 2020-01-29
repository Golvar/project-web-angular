import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { ApiService } from '../service/api.service';
import { Product } from '../models/product';
import { filter } from 'rxjs/operators';
import { ProductState } from 'src/app/store/states/product.state';
import { AddProduct } from 'src/app/store/actions/product.action';
import { Store } from '@ngxs/store';
import {Router} from '@angular/router'

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  products : Product[];
  filteredProducts : Product[];
  nbProduct: number;

  private _searchTerm:string;


  constructor(private apiService : ApiService, private store : Store, private router : Router) {
    this.store.select(state => state.product.panier).subscribe (u => this.nbProduct = u.length);
   }
   
  get searchTerm():string{
    return this._searchTerm;
  }

  set searchTerm(value: string){
    this._searchTerm = value;
    this.filteredProducts = this.filterProducts(value);
  }

  filterProducts(searchParam: string): Product[]{
    return this.products.filter(product =>
      product.name.toLowerCase().indexOf(searchParam.toLowerCase()) !== -1);
  }

  ngOnInit() {
    this.apiService.getProducts().subscribe(
      produits =>{
        this.products = produits as Product[]
        this.filteredProducts = this.products;
      }
    );
    
  }

  onClick (product) {
    this.addProduct (product);
  }


  addProduct(product) { this.store.dispatch(new AddProduct(product)); }

 
}
