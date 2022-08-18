import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommentsBlockComponent} from "./comments-block/comments-block.component";
import {WelcomeBlockComponent} from "./welcome-block/welcome-block.component";
import {FooterComponent} from "./footer/footer.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CommentsBlockComponent,
    WelcomeBlockComponent,
    FooterComponent,
    NavbarComponent
  ],
  exports: [
    WelcomeBlockComponent,
    NavbarComponent,
    FooterComponent,
    CommentsBlockComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
