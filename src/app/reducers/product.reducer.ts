import { createReducer, on } from '@ngrx/store';
import { Product } from '../models/product.model';
import * as ProductActions from '../action/product.actions'

export interface ProductState {
    products: Product[];
    error: string | null;
}

const initialState: ProductState = {
    products: [],
    error: null
};

export const productReducer = createReducer(
    initialState,
    on(ProductActions.loadProductsSuccess, (state: any, { products }: any) => ({
        ...state,
        products,
        error: null
    })),
    on(ProductActions.loadProductsFailure, (state: any, { error }: any) => ({
        ...state,
        error
    })),
    on(ProductActions.addProductSuccess, (state: { products: any; }, { product }: any) => ({
        ...state,
        products: [...state.products, product],
        error: null
    })),
    on(ProductActions.addProductFailure, (state: any, { error }: any) => ({
        ...state,
        error
    }))
);
