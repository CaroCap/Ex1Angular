import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ChronoComponent } from './components/chrono/chrono.component';
import { ChronoFormatPipe } from './pipes/chrono-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ContactsComponent,
    AccueilComponent,
    ChronoComponent,
    ChronoFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
