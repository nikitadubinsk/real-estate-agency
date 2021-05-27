import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAdsComponent } from './shared/components/developer/all-ads/all-ads.component';
import { AllRealtorComponent } from './shared/components/developer/all-realtor/all-realtor.component';
import { AuthenticationDeveloperComponent } from './shared/components/developer/authentication-developer/authentication-developer.component';
import { AuthorizationDeveloperComponent } from './shared/components/developer/authorization-developer/authorization-developer.component';
import { MainDeveloperPageComponent } from './shared/components/developer/main-developer-page/main-developer-page.component';
import { NewRealtorComponent } from './shared/components/developer/new-realtor/new-realtor.component';
import { RegistrationDeveloperComponent } from './shared/components/developer/registration-developer/registration-developer.component';
import { AllRealtorAdsComponent } from './shared/components/realtor/all-realtor-ads/all-realtor-ads.component';
import { AuthenticationRealtorComponent } from './shared/components/realtor/authentication-realtor/authentication-realtor.component';
import { AuthorizationRealtorComponent } from './shared/components/realtor/authorization-realtor/authorization-realtor.component';
import { MainRealtorAdComponent } from './shared/components/realtor/main-realtor-ad/main-realtor-ad.component';
import { NewAdComponent } from './shared/components/realtor/new-ad/new-ad.component';
import { NewPasswordRealtorComponent } from './shared/components/realtor/new-password-realtor/new-password-realtor.component';
import { AccountComponent } from './shared/components/user/account/account.component';
import { AuthenticationComponent } from './shared/components/user/authentication/authentication.component';
import { AuthorizationComponent } from './shared/components/user/authorization/authorization.component';
import { MainPageComponent } from './shared/components/user/main-page/main-page.component';
import { RegistrationComponent } from './shared/components/user/registration/registration.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'login',
    component: AuthenticationComponent,
    children: [
      { path: '', component: AuthorizationComponent },
      { path: 'registration', component: RegistrationComponent },
    ],
  },
  { path: 'account', component: AccountComponent },
  {
    path: 'developer',
    component: MainDeveloperPageComponent,
    children: [
      { path: 'realtors', component: AllRealtorComponent },
      { path: '', component: AllAdsComponent },
      { path: 'new-realtor', component: NewRealtorComponent },
    ],
  },
  {
    path: 'developer/login',
    component: AuthenticationDeveloperComponent,
    children: [
      { path: '', component: AuthorizationDeveloperComponent },
      { path: 'registration', component: RegistrationDeveloperComponent },
    ],
  },
  {
    path: 'realtor',
    component: MainRealtorAdComponent,
    children: [
      { path: '', component: AllRealtorAdsComponent },
      { path: 'new-ad', component: NewAdComponent },
    ],
  },
  {
    path: 'realtor/login',
    component: AuthenticationRealtorComponent,
    children: [
      { path: '', component: AuthorizationRealtorComponent },
      { path: 'new-password', component: NewPasswordRealtorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
