import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  AngularYandexMapsModule,
  YaConfig,
  YA_CONFIG,
} from 'angular8-yandex-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './shared/components/user/main-page/main-page.component';
import { AuthenticationComponent } from './shared/components/user/authentication/authentication.component';
import { AuthorizationComponent } from './shared/components/user/authorization/authorization.component';
import { RegistrationComponent } from './shared/components/user/registration/registration.component';
import { AccountComponent } from './shared/components/user/account/account.component';
import {
  TuiCheckboxLabeledModule,
  TuiDataListWrapperModule,
  TuiInputDateModule,
  TuiInputModule,
  TuiInputNumberModule,
  TuiInputPasswordModule,
  TuiInputPhoneModule,
  TuiIslandModule,
  TuiMultiSelectModule,
  TuiSelectModule,
  TuiTabsModule,
  TuiTextAreaModule,
  TuiMarkerIconModule,
  TuiTagModule,
  TuiAvatarModule,
} from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiGroupModule,
  TuiHostedDropdownModule,
  TuiLinkModule,
  TuiLoaderModule,
  TuiNotificationModule,
  TuiRootModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import {
  TuiCurrencyPipeModule,
  TuiMoneyModule,
} from '@taiga-ui/addon-commerce';
import { AdComponent } from './shared/components/tools/ad/ad.component';
import { AuthenticationDeveloperComponent } from './shared/components/developer/authentication-developer/authentication-developer.component';
import { RegistrationDeveloperComponent } from './shared/components/developer/registration-developer/registration-developer.component';
import { AuthorizationDeveloperComponent } from './shared/components/developer/authorization-developer/authorization-developer.component';
import { MainDeveloperPageComponent } from './shared/components/developer/main-developer-page/main-developer-page.component';
import { NewRealtorComponent } from './shared/components/developer/new-realtor/new-realtor.component';
import { AllRealtorComponent } from './shared/components/developer/all-realtor/all-realtor.component';
import { AllAdsComponent } from './shared/components/developer/all-ads/all-ads.component';
import { TuiBarSetModule, TuiLegendItemModule } from '@taiga-ui/addon-charts';
import { AllRealtorAdsComponent } from './shared/components/realtor/all-realtor-ads/all-realtor-ads.component';
import { NewAdComponent } from './shared/components/realtor/new-ad/new-ad.component';
import { MainRealtorAdComponent } from './shared/components/realtor/main-realtor-ad/main-realtor-ad.component';
import { AuthorizationRealtorComponent } from './shared/components/realtor/authorization-realtor/authorization-realtor.component';
import { AuthenticationRealtorComponent } from './shared/components/realtor/authentication-realtor/authentication-realtor.component';
import { NewPasswordRealtorComponent } from './shared/components/realtor/new-password-realtor/new-password-realtor.component';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { RealtorFilterPipe } from './shared/pipes/realtor-filter.pipe';
import { EditRealtorComponent } from './shared/components/developer/edit-realtor/edit-realtor.component';
import { AdsFilterPipe } from './shared/pipes/ads-filter.pipe';
import { MiniAdComponent } from './shared/components/tools/mini-ad/mini-ad.component';

const mapConfig: YaConfig = {
  apikey: 'ea1646d1-2502-47b0-8738-bd4f2afe3830',
  lang: 'ru_RU',
};

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
    AllRealtorAdsComponent,
    NewAdComponent,
    MainRealtorAdComponent,
    AuthorizationRealtorComponent,
    AuthenticationRealtorComponent,
    NewPasswordRealtorComponent,
    RealtorFilterPipe,
    EditRealtorComponent,
    AdsFilterPipe,
    MiniAdComponent,
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
    TuiBarSetModule,
    TuiLegendItemModule,
    TuiTextAreaModule,
    TuiInputNumberModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiCurrencyPipeModule,
    TuiMultiSelectModule,
    AngularFileUploaderModule,
    TuiNotificationModule,
    TuiLoaderModule,
    BrowserAnimationsModule,
    TuiMarkerIconModule,
    AngularYandexMapsModule.forRoot(mapConfig),
    TuiSvgModule,
    TuiMoneyModule,
    TuiTagModule,
    TuiAvatarModule,
    TuiGroupModule,
    TuiHostedDropdownModule,
  ],
  providers: [
    {
      provide: YA_CONFIG,
      useValue: {
        apikey: 'ea1646d1-2502-47b0-8738-bd4f2afe3830',
        lang: 'ru_RU',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
