import { Component, OnInit, Input } from '@angular/core';
import { ChannelServiceService } from '../channel-service.service';

@Component({
  selector: 'app-thread-answer',
  templateUrl: './thread-answer.component.html',
  styleUrls: ['./thread-answer.component.scss']
})
export class ThreadAnswerComponent implements OnInit {  
 
  constructor(public ts: ChannelServiceService) { }

  ngOnInit(): void {
  }

}
