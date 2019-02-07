import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RightSideComponent } from './right-side/right-side.component';
import { MainModule } from './main/main.module';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './site/about/about.component';
import { ContactComponent } from './site/contact/contact.component';
import { HomeComponent } from './site/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectService } from './services/services.service';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RightSideComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    MainModule,
    RouterModule.forRoot(
      routes

    )
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
