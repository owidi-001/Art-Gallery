import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // new
import { HttpClientModule } from '@angular/common/http'; // new

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './src/components/partials/header/header.component';
import { SidebarComponent } from './src/components/partials/sidebar/sidebar.component';
import { NavComponent } from './src/components/partials/nav/nav.component';
import { FooterComponent } from './src/components/partials/footer/footer.component';
import { ArtListComponent } from './src/components/art-list/art-list.component';
import { PagenotfoundComponent } from './src/components/pagenotfound/pagenotfound.component';
import { ArtDetailComponent } from './src/components/art-detail/art-detail.component';
import { AddArtComponent } from './src/components/add-art/add-art.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    NavComponent,
    FooterComponent,
    ArtListComponent,
    PagenotfoundComponent,
    ArtDetailComponent,
    AddArtComponent
  ],
  imports: [
    // HttpModule, // new
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
