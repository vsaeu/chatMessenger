import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/models/message.class';
import { Thread } from 'src/models/thread.class';
import { ChannelServiceService } from '../channel-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  typedMessage;
  msg = new Message;
  chatId: string;
  newThread;
  threadContent: string = '';

  constructor(public cs: ChannelServiceService, private firestore: AngularFirestore,private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    //   console.log(params['id']);
    //   this.chatId = params['id'];
    //   params['id']
    // })
    this.
        firestore
        .collection('chat')
        .doc()
        .valueChanges()
        .subscribe((msg: any) => {
          // console.log('Game update', game);
          // this.msg.author = msg.author;
          // this.msg.timestamp = msg.timestamp;
          // this.msg.channelName = msg.channelName;
          // this.msg.content = msg.content;
          // this.msg.image = msg.image;
          // this.msg.messageID = msg.message;
        });
  }
  

  sendMessage(){
    // .doc(params['id'])
    console.log(this.msg);
    // this.save();

    this.newThread = new Thread(this.cs.activeChannelID, this.cs.threadIDCounter, this.typedMessage)
    
    this.cs.allThreads.push(this.newThread);
    this.cs.threadIDCounter++;
    
    // this.messageContent = 'funktioniert';
    // console.log('Message is: ', this.message );
    // let content = this.msg.content;
    // console.log('Message content is : ', content );

    //versuch Thread zu erstellen:
    
    console.log('newThread is : ', this.newThread);
    console.log('allThreads', this.cs.allThreads)
    // this.newThread.messages = this.threadContent;

    // console.log('messages [0] at [0] after push is : ', this.cs.allThreads[0].messages);
    // console.log(this.cs.allThreads);
    
  }

  save(){
this.
      firestore
      .collection('chat')
      .doc()
      .update(this.msg.toJson());
}
}


