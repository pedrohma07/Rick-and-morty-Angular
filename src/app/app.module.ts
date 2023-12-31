import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CardComponent } from "./components/card/card.component";
import { SearchInputComponent } from "./components/search-input/search-input.component";
import { MainComponent } from "./page/main/main.component";
import { PaginatorComponent } from "./components/paginator/paginator.component";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearchInputComponent,
    MainComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
