import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'; 
import { Store } from '@ngxs/store';
import { Product } from '../models/product';
import { ApiService } from '../service/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: number = 0;
  product: Observable<Product[]>;
  

  constructor(private store : Store, private apiService : ApiService, private route: ActivatedRoute) {
 }

  ngOnInit() {
  }

}
