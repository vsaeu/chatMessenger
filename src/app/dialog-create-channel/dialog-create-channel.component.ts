import { Component, OnInit } from '@angular/core';
import { Channel } from 'src/models/channel.class';
import { ChannelServiceService } from '../channel-service.service';

@Component({
  selector: 'app-dialog-create-channel',
  templateUrl: './dialog-create-channel.component.html',
  styleUrls: ['./dialog-create-channel.component.scss']
})
export class DialogCreateChannelComponent implements OnInit {

  channelName: string = '';
  channelDescription: String ='';

  constructor(public cs: ChannelServiceService) { }

  newChannel = {}; 

  ngOnInit(): void {
  }

  createChannel(){
    this.newChannel = new Channel();
    console.log('newChannel is : ', this.newChannel);
    this.cs.allChannels.push(this.newChannel);
    console.log('allChannels after push is : ', this.cs.allChannels);
  }

}
