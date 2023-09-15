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
import {ScrollingModule} from '@angular/cdk/scrolling';
import { VirtualScrollComponent } from './components/virtual-scroll/virtual-scroll.component';
import { ComponentsComponent } from './components/components.component';
import { VirtualComponentComponent } from './components/virtual-component/virtual-component.component';
import { ImageComponent } from './components/image/image.component';
import { ScrollControlDirective } from './scroll-control.directive';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CentertxtComponent,
    VideoComponent,
    DemoVidComponent,
    FirmsComponent,
    MultiVidComponent,
    VirtualScrollComponent,
    ComponentsComponent,
    VirtualComponentComponent,
    ImageComponent,
    ScrollControlDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
