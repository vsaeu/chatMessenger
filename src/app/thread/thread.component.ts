import { getLocaleEraNames } from '@angular/common';
import { Component,Input, OnInit } from '@angular/core';
import { Thread } from 'src/models/thread.class';
import { ChannelServiceService } from '../channel-service.service';


@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {
    
  message;

  constructor(public ts: ChannelServiceService) { }

  ngOnInit(): void {
  }

  sendMessage(){   
    this.ts.allThreadAnswers.push(this.message);
    console.log(this.ts.allThreadAnswers);
  }

}
