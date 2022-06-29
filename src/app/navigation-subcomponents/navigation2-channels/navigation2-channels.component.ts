import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateChannelComponent } from 'src/app/dialog-create-channel/dialog-create-channel.component';
import { Channel } from 'src/models/channel.class';
import { ChannelServiceService } from '../../channel-service.service';


@Component({
  selector: 'app-navigation2-channels',
  templateUrl: './navigation2-channels.component.html',
  styleUrls: ['./navigation2-channels.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Navigation2ChannelsComponent implements OnInit {

  constructor(public dialog: MatDialog, public cs: ChannelServiceService) { }

  ngOnInit(): void {
  }

  openChannel(channelID) {
    this.cs.activeChannelID = channelID;
    console.log('active Channel ID:', this.cs.activeChannelID)
    // Rendern in Channel Komponente
    this.cs.renderThreadsByChannelID();
  }

  openCreateChannelDialog() {
    this.dialog.open(DialogCreateChannelComponent);
    this.cs.renderThreadsByChannelID();

  }

}
