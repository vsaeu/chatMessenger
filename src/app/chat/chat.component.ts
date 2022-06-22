import { Component, Input, OnInit } from '@angular/core';
import { Thread } from 'src/models/thread.class';
import { ChannelServiceService } from '../channel-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  newThread;
  threadContent: string = '';

  constructor(public cs: ChannelServiceService) { }

  ngOnInit(): void {
  }
  

  sendMessage(){
    // this.messageContent = 'funktioniert';
    // console.log('Message is: ', this.message );
    // let content = this.message.content;
    // console.log('Message content is : ', content );

    //versuch Thread zu erstellen:
    this.newThread = new Thread();
    console.log('newThread is : ', this.newThread);
    this.newThread.messages = this.threadContent;
    this.cs.allThreads.push(this.newThread);
    console.log('messages [0] at [0] after push is : ', this.cs.allThreads[0].messages);
    console.log(this.cs.allThreads);
    
  }
}
