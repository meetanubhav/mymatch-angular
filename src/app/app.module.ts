import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot([
      { path: '', component: HomeViewComponent },
    ]) ],
  declarations: [ AppComponent, HelloComponent, HomeViewComponent, TopBarComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
