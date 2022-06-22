import { Component, OnInit } from '@angular/core';
import { Message } from 'src/models/message.class';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  message = new Message();
  

  constructor() { }

  ngOnInit(): void {
  }
  

  sendMessage(){
    // this.messageContent = 'funktioniert';
    console.log('Message is: ', this.message );
    let content = this.message.content;
    console.log('Message content is : ', content );
  }
}
