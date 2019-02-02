import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shell/header/header.component';
import { SideComponent } from './shell/side/side.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { LibraryComponent } from './shared/library/library.component';
import { SearchFormComponent } from './shared/search-form/search-form.component';
import { GuageComponent } from './shared/guage/guage.component';
import { FileNumberComponent } from './shared/file-number/file-number.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideComponent,
    DashboardComponent,
    LibraryComponent,
    SearchFormComponent,
    GuageComponent,
    FileNumberComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
