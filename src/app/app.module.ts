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
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ThreadComponent } from './thread/thread.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { DialogCreateChannelComponent } from './dialog-create-channel/dialog-create-channel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ChannelComponent,
    NavigationComponent,
    Navigation0HeaderComponent,
    Navigation1ThreadsComponent,
    Navigation2ChannelsComponent,
    Navigation3DirectMessagesComponent,
    ThreadComponent,
    ChatComponent,
    DialogCreateChannelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatTreeModule,
    FormsModule,
    MatTooltipModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
