// import { ChannelServiceService } from '../channel-service.service';


export class Channel {
   public channelName: string = '';
   public channelDescription: string = '';
   public channelID: string = '';
   public threads: string;

   constructor(channelName, channelDescription, channelID, thread) {

    this.channelName = channelName;
    this.channelDescription = channelDescription;
    this.channelID = channelID;
    this.threads = thread
   }

}
