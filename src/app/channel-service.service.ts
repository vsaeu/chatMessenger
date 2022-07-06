import { Injectable } from '@angular/core';
import { Thread } from 'src/models/thread.class';

@Injectable({
  providedIn: 'root'
})
export class ChannelServiceService {

  allChannels = [];
  
  renderedThreads = [];
  allThreads = [];
  allThreadAnswers: any	 =[]; //Bitte noch nicht löschen (Christian)

  activeChannelID: number = 0; // ChannelID
  activeThreadID: number = 0; //ThreadID

  channelIDCounter: number = 0;
  threadIDCounter: number = 0;
  constructor() { }

  renderThreadsByChannelID() {
    console.log('vor Filter this.allThreads', this.allThreads);
    console.log(' vor Filter renderedThreads', this.renderedThreads)

    this.renderedThreads = this.allThreads.filter((Thread) => Thread.channelID == this.activeChannelID);
    console.log('this.allThreads', this.allThreads);
    console.log('renderedThreads', this.renderedThreads)
  }


}

