import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IpfsService } from 'src/app/services/ipfs/ipfs.service';
import { OrbitdbService } from 'src/app/services/orbitdb//orbitdb.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ IpfsService, OrbitdbService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
