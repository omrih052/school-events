import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './site/header/header.component';

import { MainModule } from './main/main.module';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './site/about/about.component';
import { ContactComponent } from './site/contact/contact.component';
import { HomeComponent } from './site/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectService } from './services/services.service';
import { MenuComponent } from './site/menu/menu.component';
import { MenuItemComponent } from './site/menu-item/menu-item.component';
import { ProjectComponent } from './project/project.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { DatabaseDataModel } from './models/Database.DataModel';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'project/:id', component: ProjectComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', redirectTo: 'contact' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
 
    AboutComponent,
    ContactComponent,
    HomeComponent,
    MenuComponent,
    MenuItemComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,


  ],
  imports: [
    BrowserModule,
    CommonModule,
    MainModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
