import { Component, OnInit } from '@angular/core';
import { ChannelServiceService } from '../channel-service.service';


@Component({
  selector: 'app-single-thread',
  templateUrl: './single-thread.component.html',
  styleUrls: ['./single-thread.component.scss']
})
export class SingleThreadComponent implements OnInit {

  constructor(public cs: ChannelServiceService) { }

  ngOnInit(): void {
  }

}
