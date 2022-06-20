import { Component, OnInit } from '@angular/core';
import { Message } from 'src/models/message.class';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  message = new Message();
  messageContent: string;

  constructor() { }

  ngOnInit(): void {
  }
  

  sendMessage(){
    // this.messageContent = 'funktioniert';
    console.log('Message is: ', this.message );
    this.message.content = this.messageContent;
    console.log('Message content is : ', this.messageContent );
  }
}
