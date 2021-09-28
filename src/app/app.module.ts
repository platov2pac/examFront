import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button'

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {LoginComponent} from './components/login/login.component';
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {MessagesModule} from "primeng/messages";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessageModule} from "primeng/message";
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {InputTextareaModule} from "primeng/inputtextarea";
import {UserService} from "./services/user.service";
import {RequestInterceptor} from "./interceptors/request.interceptor";
import {ExamService} from "./services/exam.service";
import {EnteredTableComponent} from './components/entered-table/entered-table.component';
import {TableModule} from "primeng/table";
import {StudentComponent} from './components/welcome/student/student.component';
import {ProfessorComponent} from './components/welcome/professor/professor.component';
import {AsnwerGradComponent} from './components/answer-grad/asnwer-grad.component';
import {PanelModule} from "primeng/panel";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {RatingModule} from "primeng/rating";
import {InputNumberModule} from "primeng/inputnumber";
import {AdminComponent} from './components/welcome/admin/admin.component';
import {DropdownModule} from "primeng/dropdown";
import {ExamTableComponent} from './components/exam-table/exam-table.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    EnteredTableComponent,
    StudentComponent,
    ProfessorComponent,
    AsnwerGradComponent,
    AdminComponent,
    ExamTableComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'enteredUser', component: EnteredTableComponent},
      {path: 'examTable', component: ExamTableComponent}
    ]),
    RippleModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    HttpClientModule,
    MessagesModule,
    MessageModule,
    InputTextareaModule,
    TableModule,
    PanelModule,
    ScrollPanelModule,
    RatingModule,
    InputNumberModule,
    DropdownModule,
    ReactiveFormsModule
  ],
  providers: [UserService, ExamService, {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
