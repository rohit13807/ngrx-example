import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';

// Load Products
export const loadProducts = createAction('[Product] Load Products');
export const loadProductsSuccess = createAction('[Product] Load Products Success', props<{ products: Product[] }>());
export const loadProductsFailure = createAction('[Product] Load Products Failure', props<{ error: string }>());

// Add Product
export const addProduct = createAction('[Product] Add Product', props<{ product: Product }>());
export const addProductSuccess = createAction('[Product] Add Product Success', props<{ product: Product }>());
export const addProductFailure = createAction('[Product] Add Product Failure', props<{ error: string }>());
