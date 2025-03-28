import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';
import { loadProducts, addProduct } from './action/product.actions';
import { ProductState } from './reducers/product.reducer';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private store: Store<{ productState: ProductState }>) {
    this.products$ = this.store.select((state: any) => state.productState.products);
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }

  addProduct() {
    const newProduct: Product = { id: Math.random(), name: 'New Product', price: 99.99 };
    console.log('newProduct:', newProduct);

    this.store.dispatch(addProduct({ product: newProduct }));
  }
}
