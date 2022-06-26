import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChannelServiceService {

  allChannels = [];
  allThreads = [];
  activeChannelID: number = 0; // ChannelID
  activeThreadID: number = 0; //ThreadID

  channelIDCounter: number=0;
  threadIDCounter: number=0;


  constructor() { }
}
