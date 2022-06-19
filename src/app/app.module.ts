import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelComponent } from './channel/channel.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Navigation0HeaderComponent } from './navigation-subcomponents/navigation0-header/navigation0-header.component';
import { Navigation1ThreadsComponent } from './navigation-subcomponents/navigation1-threads/navigation1-threads.component';
import { Navigation2ChannelsComponent } from './navigation-subcomponents/navigation2-channels/navigation2-channels.component';
import { Navigation3DirectMessagesComponent } from './navigation-subcomponents/navigation3-direct-messages/navigation3-direct-messages.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ChannelComponent,
    NavigationComponent,
    Navigation0HeaderComponent,
    Navigation1ThreadsComponent,
    Navigation2ChannelsComponent,
    Navigation3DirectMessagesComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
