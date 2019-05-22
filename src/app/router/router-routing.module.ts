import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../components/web/home/home.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { AuthGuard } from "../guards/auth.guard";
import { ContactComponent } from "../components/web/contact/contact.component";
import { InfoComponent } from "../components/web/info/info.component";
import { WelcomeComponent } from "../components/web/welcome/welcome.component";
import { MainViewComponent } from "../components/dashboard/main-view/main-view.component";
import { LedgersComponent } from '../components/dashboard/ledgers/ledgers.component';
import { ProgramComponent } from '../components/dashboard/program/program.component';
import { AnalysisComponent } from '../components/dashboard/analysis/analysis.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: WelcomeComponent
      },
      {
        path: "contact",
        component: ContactComponent
      },
      {
        path: "info",
        component: InfoComponent
      }
    ]
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: MainViewComponent
      },{
        path:"ledgers",
        component: LedgersComponent
      }
      ,{
        path:"program",
        component: ProgramComponent
      }
      ,{
        path:"analysis",
        component: AnalysisComponent
      }
    ]
  },

  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule {}
