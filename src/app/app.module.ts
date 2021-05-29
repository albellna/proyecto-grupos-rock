import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GruposRockModule } from './components/grupos-rock.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GruposRockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
