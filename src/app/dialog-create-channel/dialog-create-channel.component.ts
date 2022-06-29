import { Component, OnInit } from '@angular/core';
import { Channel } from 'src/models/channel.class';
import { ChannelServiceService } from '../channel-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-create-channel',
  templateUrl: './dialog-create-channel.component.html',
  styleUrls: ['./dialog-create-channel.component.scss']
})
export class DialogCreateChannelComponent implements OnInit {

  channelName: string = '';
  channelDescription: String ='';

  constructor(public cs: ChannelServiceService, public dialogRef: MatDialogRef<DialogCreateChannelComponent>) { }

  channelIDCounter = this.cs.channelIDCounter;
  thread= "Thread1"


  newChannel = {}; 

  ngOnInit(): void {
  }

  createChannel(){
    this.newChannel = new Channel(this.channelName, this.channelDescription, this.channelIDCounter);
    // console.log('newChannel is : ', this.newChannel);
    this.cs.allChannels.push(this.newChannel);
    // console.log('allChannels after push is : ', this.cs.allChannels);
    this.cs.channelIDCounter++; 
    // console.log("activeChannelID: ", this.cs.channelIDCounter)
    // console.log("Thread Zugriff: ", this.newChannel.threads)
    this.channelIDCounter = this.cs.channelIDCounter;
    this.dialogRef.close();

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
