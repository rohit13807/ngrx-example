import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../services/product.service';
import * as ProductActions from '../action/product.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ProductEffects {
    constructor(private actions$: Actions, private productService: ProductService) { }

    loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.loadProducts),
            mergeMap(() =>
                this.productService.getProducts().pipe(
                    map((products: any) => ProductActions.loadProductsSuccess({ products })),
                    catchError((error: any) => of(ProductActions.loadProductsFailure({ error: error.message })))
                )
            )
        )
    );

    addProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.addProduct),
            mergeMap((action: any) =>
                this.productService.addProduct(action.product).pipe(
                    map((product: any) => ProductActions.addProductSuccess({ product })),
                    catchError((error: any) => of(ProductActions.addProductFailure({ error: error.message })))
                )
            )
        )
    );
}
