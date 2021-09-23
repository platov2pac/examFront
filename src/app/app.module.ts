import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button'

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {LoginComponent} from './components/login/login.component';
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MessagesModule} from "primeng/messages";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessageModule} from "primeng/message";
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {WelcomeComponent} from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'welcome', component: WelcomeComponent}
    ]),
    RippleModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    HttpClientModule,
    MessagesModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
