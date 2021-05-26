import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './shared/components/user/main-page/main-page.component';
import { AuthenticationComponent } from './shared/components/user/authentication/authentication.component';
import { AuthorizationComponent } from './shared/components/user/authorization/authorization.component';
import { RegistrationComponent } from './shared/components/user/registration/registration.component';
import { AccountComponent } from './shared/components/user/account/account.component';
import {
  TuiCheckboxLabeledModule,
  TuiInputDateModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiInputPhoneModule,
  TuiIslandModule,
  TuiTabsModule,
} from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiLinkModule, TuiRootModule } from '@taiga-ui/core';
import { AdComponent } from './shared/components/tools/ad/ad.component';
import { AuthenticationDeveloperComponent } from './shared/components/developer/authentication-developer/authentication-developer.component';
import { RegistrationDeveloperComponent } from './shared/components/developer/registration-developer/registration-developer.component';
import { AuthorizationDeveloperComponent } from './shared/components/developer/authorization-developer/authorization-developer.component';
import { MainDeveloperPageComponent } from './shared/components/developer/main-developer-page/main-developer-page.component';
import { NewRealtorComponent } from './shared/components/developer/new-realtor/new-realtor.component';
import { AllRealtorComponent } from './shared/components/developer/all-realtor/all-realtor.component';
import { AllAdsComponent } from './shared/components/developer/all-ads/all-ads.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AuthenticationComponent,
    AuthorizationComponent,
    RegistrationComponent,
    AccountComponent,
    AdComponent,
    AuthenticationDeveloperComponent,
    RegistrationDeveloperComponent,
    AuthorizationDeveloperComponent,
    MainDeveloperPageComponent,
    NewRealtorComponent,
    AllRealtorComponent,
    AllAdsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TuiRootModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiIslandModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    TuiLinkModule,
    TuiInputDateModule,
    TuiCheckboxLabeledModule,
    TuiTabsModule,
    TuiInputPhoneModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
