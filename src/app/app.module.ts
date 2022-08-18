import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home-block/home.component";
import {ExperienceComponent} from "./experience-block/experience.component";
import {ServicesBlockComponent} from "./services-block/services-block.component";
import {SharedModule} from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DataService} from "./service/data.service";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesBlockComponent },
  { path: 'experience', component: ExperienceComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    ServicesBlockComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
