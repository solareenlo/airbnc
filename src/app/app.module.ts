import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  MatToolbarModule,
  MatCardModule,
  MatExpansionModule,
  MatButtonModule,
  MatTableModule,
  MatSortModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { EntryComponent } from './posts/entry/entry.component';
import { DetailsComponent } from './posts/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    EntryComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
