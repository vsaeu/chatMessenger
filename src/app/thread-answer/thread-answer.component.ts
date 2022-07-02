import { Component, OnInit, Input } from '@angular/core';
import { ChannelServiceService } from '../channel-service.service';

@Component({
  selector: 'app-thread-answer',
  templateUrl: './thread-answer.component.html',
  styleUrls: ['./thread-answer.component.scss']
})
export class ThreadAnswerComponent implements OnInit {  
  showToolBar;
  message;  

  constructor( public ts: ChannelServiceService ) {
    this.message = ts.allThreadAnswers;
    this.showToolBar= true;    
   }

  ngOnInit(): void {
  }

  setShowToolBar(show: boolean) {
    this.showToolBar = show;        
  }

}
