import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicLayoutComponent } from './common/basic-layout/basic-layout.component';
import { BlankLayoutComponent } from './common/blank-layout/blank-layout.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { InternshipComponent } from './views/internship/internship.component';
import { TrainingComponent } from './views/training/training.component';
import { ContactComponent } from './views/contact/contact.component';
import { AltLayoutComponent } from './common/alt-layout/alt-layout.component';
import { RegistrationComponent } from './views/registration/registration/registration.component';
import { TrainingFormComponent } from './views/registration/training-form/training-form.component';
import { InternFormComponent } from './views/registration/intern-form/intern-form.component';
import { TrainerComponent } from './views/trainer/trainer.component';
import { EmpanelFormComponent } from './views/registration/empanel-form/empanel-form.component';
import { PrivacyComponent } from './views/privacy/privacy.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { IntroComponent } from './views/intro/intro.component';


const routes: Routes = [
  {
    path: '', component: BasicLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, data: { title: 'Alpha Chaperone | Fostering the Finsest' } }
    ]
  },
  {
    path: '', component: AltLayoutComponent,
    children: [
      { path: 'about', component: AboutComponent, data: { title: 'Who We Are' } }
    ]
  },
  {
    path: '', component: AltLayoutComponent,
    children: [
      { path: 'internship', component: InternshipComponent, data: { title: 'Internship Program' } }
    ]
  },
  {
    path: '', component: AltLayoutComponent,
    children: [
      { path: 'training', component: TrainingComponent, data: { title: 'Training Program' } }
    ]
  },
  {
    path: '', component: AltLayoutComponent,
    children: [
      { path: 'trainer-empanelment', component: TrainerComponent, data: { title: 'Trainer Empanelment' } }
    ]
  },
  {
    path: '', component: AltLayoutComponent,
    children: [
      { path: 'contact', component: ContactComponent, data: { title: 'Contact Us' } }
    ]
  },
  {
    path: '', component: BlankLayoutComponent,
    children: [
      { path: 'registration', component: RegistrationComponent, data: { title: 'Register' } }
    ]
  },
  {
    path: '', component: BlankLayoutComponent,
    children: [
      { path: 'training-registration', component: TrainingFormComponent, data: { title: 'Registration' } }
    ]
  },
  {
    path: '', component: BlankLayoutComponent,
    children: [
      { path: 'intern-registration', component: InternFormComponent, data: { title: 'Registration' } }
    ]
  },
  {
    path: '', component: BlankLayoutComponent,
    children: [
      { path: 'empanel-registration', component: EmpanelFormComponent, data: { title: 'Registration' } }
    ]
  },
  {
    path: '', component: AltLayoutComponent,
    children: [
      { path: 'privacy-policy', component: PrivacyComponent, data: { title: 'Privacy Policy' } }
    ]
  },
  {
    path: '', component: BlankLayoutComponent,
    children: [
      { path: 'intro', component: IntroComponent, data: { title: 'Alpha Chaperone' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule],
  providers : [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppRoutingModule { }
