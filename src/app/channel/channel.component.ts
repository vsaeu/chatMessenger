import { Component, OnInit } from '@angular/core';
import { Channel } from 'src/models/channel.class';
import { ChannelServiceService } from '../channel-service.service';


@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  // channel: Channel = new Channel();

  constructor(public cs: ChannelServiceService) { 
  }

  allThreadsInChannel = this.cs.renderedThreads;

  ngOnInit(): void {
  }



}
