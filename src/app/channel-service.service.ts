import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChannelServiceService {

  allChannels = [];
  allThreads = [];
  activeChannel: string = ''; // ChannelID
  activeThread: string = ''; //ThreadID

  channelIdCounter: number=0;
  threadIdCounter;


  constructor() { }
}
