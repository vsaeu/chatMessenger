import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChannelServiceService {

  allChannels = [];
  allThreads = [];
  activeChannel: number = 0; // ChannelID
  activeThread: number = 0; //ThreadID

  channelIdCounter: number=0;
  threadIdCounter;


  constructor() { }
}
