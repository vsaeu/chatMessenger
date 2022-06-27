import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChannelServiceService {

  allChannels = [];
  allThreads = [];
<<<<<<< HEAD
  allThreadAnswers = [];
  
  
=======
  activeChannelID: number = 0; // ChannelID
  activeThreadID: number = 0; //ThreadID

  channelIDCounter: number=0;
  threadIDCounter: number=0;
>>>>>>> 86b188f4991c5b03276ce033dd2ae1d70df9efd8


  constructor() { }
}
