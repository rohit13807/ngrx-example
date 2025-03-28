import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { productReducer } from './reducers/product.reducer';
import { ProductEffects } from './effects/product.effects';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot({ productState: productReducer }),
        EffectsModule.forRoot([ProductEffects]),
        StoreDevtoolsModule.instrument({ maxAge: 25 })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
