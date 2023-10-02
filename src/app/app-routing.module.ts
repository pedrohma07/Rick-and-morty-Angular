import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./page/main/main.component";

const routes: Routes = [
  { path: "", redirectTo: "/1", pathMatch: "full" },
  {path: ":params", component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
