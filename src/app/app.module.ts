import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ThoughtListComponent } from './component/thought/thought-list/thought-list.component';
import { CreateThoughtsComponent } from './component/thought/create/create-thoughts.component';
import { ThoughtComponent } from './component/thought/thought/thought.component';
import { HttpClientModule } from '@angular/common/http';
import { RemoveThoughtComponent } from './component/thought/remove-thought/remove-thought.component';
import { EditThoughtComponent } from './component/thought/edit-thought/edit-thought.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateThoughtsComponent,
    ThoughtListComponent,
    ThoughtComponent,
    RemoveThoughtComponent,
    EditThoughtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
