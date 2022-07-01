import { Component, OnInit } from '@angular/core';
import { ChannelServiceService } from '../channel-service.service';

@Component({
  selector: 'app-thread-message',
  templateUrl: './thread-message.component.html',
  styleUrls: ['./thread-message.component.scss']
})
export class ThreadMessageComponent implements OnInit {
 
  constructor(public ts: ChannelServiceService) { }

  ngOnInit(): void {
  }

}
