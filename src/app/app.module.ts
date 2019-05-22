import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from './material/material.module';
import {RouterRoutingModule} from './router/router-routing.module'
import { NgxChartsModule } from '@swimlane/ngx-charts';

import {AuthGuard} from './guards/auth.guard';
import {AuthenticationService} from './services/authentication.service';
import {fakeBackeEndProvider} from './helpers/fakebackend.service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/web/nav-bar/nav-bar.component';
import { HomeComponent } from './components/web/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ToolbarComponent } from './components/dashboard/toolbar/toolbar.component';
import { ArticleComponent } from './components/article/article.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/web/contact/contact.component';
import { InfoComponent } from './components/web/info/info.component';
import { WelcomeComponent } from './components/web/welcome/welcome.component';
import { FooterComponent } from './components/web/footer/footer.component';
import { MainViewComponent } from './components/dashboard/main-view/main-view.component';
import { LedgersComponent } from './components/dashboard/ledgers/ledgers.component';
import { LedgerComponent } from './components/dashboard/ledgers/ledger/ledger.component';
import { ProgramComponent } from './components/dashboard/program/program.component';
import { AnalysisComponent } from './components/dashboard/analysis/analysis.component';
import { PieGraphComponent } from './components/dashboard/main-view/pie-graph/pie-graph.component';
import { PendingListComponent } from './components/dashboard/main-view/pending-list/pending-list.component';
import { ActionsComponent } from './components/dashboard/main-view/actions/actions.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    DashboardComponent,
    ToolbarComponent,
    ArticleComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    InfoComponent,
    WelcomeComponent,
    FooterComponent,
    MainViewComponent,
    LedgersComponent,
    LedgerComponent,
    ProgramComponent,
    AnalysisComponent,
    PieGraphComponent,
    PendingListComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterRoutingModule,
    MaterialModule,
    NgxChartsModule
  ],
  entryComponents: [HomeComponent,LoginComponent],
  providers: [
    AuthGuard,
    AuthenticationService,
    // fake backend, remove for production
    fakeBackeEndProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
