import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLayoutComponent } from '../basic-layout/basic-layout.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BlankLayoutComponent } from '../blank-layout/blank-layout.component';
import { AltLayoutComponent } from '../alt-layout/alt-layout.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import {MatDialogModule} from '@angular/material/dialog';
import { SuccessModalComponent } from '../success-modal/success-modal.component';
import { SpinnersAngularModule } from 'spinners-angular';
import { LoaderComponent } from '../loader/loader.component';



@NgModule({
  declarations: [
    BasicLayoutComponent,
    BlankLayoutComponent,
    AltLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SuccessModalComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    NgxScrollTopModule,
    MatDialogModule,
    SpinnersAngularModule
  ],
  exports: [
    BasicLayoutComponent,
    BlankLayoutComponent,
    AltLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SuccessModalComponent,
    LoaderComponent
  ]
})
export class LayoutModule { }
