import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageService } from './services/page.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './components/pages/pages.component';
import { Title } from '@angular/platform-browser';


const appRoutes: Routes = [
  {path: ':page', component: PagesComponent},
  {path: '', component: PagesComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [
    PageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
