import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

import { ContactService } from './providers/contact.service';
import { InternService } from './providers/intern.service';
import { EmpanelService } from './providers/empanel.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './common/layout/layout.module';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { InternshipComponent } from './views/internship/internship.component';
import { TrainingComponent } from './views/training/training.component';
import { ContactComponent } from './views/contact/contact.component';
import { RegistrationComponent } from './views/registration/registration/registration.component';
import { TrainingFormComponent } from './views/registration/training-form/training-form.component';
import { InternFormComponent } from './views/registration/intern-form/intern-form.component';
import { TrainerComponent } from './views/trainer/trainer.component';
import { EmpanelFormComponent } from './views/registration/empanel-form/empanel-form.component';
import { PrivacyComponent } from './views/privacy/privacy.component';
import { IntroComponent } from './views/intro/intro.component';
import { PopupComponent } from './common/popup/popup.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    InternshipComponent,
    TrainingComponent,
    ContactComponent,
    RegistrationComponent,
    TrainingFormComponent,
    InternFormComponent,
    TrainerComponent,
    EmpanelFormComponent,
    PrivacyComponent,
    IntroComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    LayoutModule,
    MatExpansionModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    NgxGoogleAnalyticsModule.forRoot('G-KD6WGSBWC7'),
    NgxGoogleAnalyticsRouterModule,
    HttpClientModule
  ],
  providers: [
    ContactService,
    InternService,
    EmpanelService,
    Title
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
