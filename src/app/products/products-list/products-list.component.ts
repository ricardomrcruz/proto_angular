import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { RouterLink, RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {

  products: any[] = [];

  constructor(private store: ProductsService) { }

  ngOnInit(): void {
    this.store.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

}
