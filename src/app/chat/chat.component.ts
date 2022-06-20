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

}
