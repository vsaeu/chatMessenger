import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateChannelComponent } from 'src/app/dialog-create-channel/dialog-create-channel.component';
import { Channel } from 'src/models/channel.class';

@Component({
  selector: 'app-navigation2-channels',
  templateUrl: './navigation2-channels.component.html',
  styleUrls: ['./navigation2-channels.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Navigation2ChannelsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openChannel(){
    
  }

  openCreateChannelDialog() {
    this.dialog.open(DialogCreateChannelComponent);
  }

}
