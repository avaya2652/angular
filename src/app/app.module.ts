import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component'
import {BasicHighlightDirective} from './directives/basic-highlight.directive';
import {BetterHighlightDirective} from './directives/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    BasicHighlightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
