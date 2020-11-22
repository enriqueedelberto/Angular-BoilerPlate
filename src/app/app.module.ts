import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialComponentsImportsModule} from './material-components-imports/material-components-imports.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './components/home/home.component';
import { CrudComponent } from './components/crud/crud.component';
import { CrudDetailComponent } from './components/crud/crud-detail/crud-detail.component';
import { CrudListComponent } from './components/crud/crud-list/crud-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrudComponent,
    CrudDetailComponent,
    CrudListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialComponentsImportsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
