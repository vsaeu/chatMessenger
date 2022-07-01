import { Component, OnInit } from '@angular/core';
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
    this.message = '';    
  }

}
