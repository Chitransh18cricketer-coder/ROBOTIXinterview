import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CentertxtComponent } from './components/centertxt/centertxt.component';
import { VideoComponent } from './components/video/video.component';
import { DemoVidComponent } from './components/demo-vid/demo-vid.component';
import { FirmsComponent } from './components/firms/firms.component';
import { MultiVidComponent } from './components/multi-vid/multi-vid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CentertxtComponent,
    VideoComponent,
    DemoVidComponent,
    FirmsComponent,
    MultiVidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
