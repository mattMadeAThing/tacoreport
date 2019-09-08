import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataService } from 'src/app/data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartcontainerComponent } from './smartcontainer/smartcontainer.component';
import { TacomapComponent } from './tacomap/tacomap.component';
import { SensorSidebarComponent } from './sensor-sidebar/sensor-sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    SmartcontainerComponent,
    TacomapComponent,
    SensorSidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDBGz4S-qCw7fwToSkv2Va1QFGxUu9ZceI'
    }),
    MaterialModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
