import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducer } from './reducers/tutorial.reducer';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      tutorial : reducer
    })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
