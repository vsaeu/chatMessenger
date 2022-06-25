// import { ChannelServiceService } from '../channel-service.service';


export class Channel {
   public channelName: string = '';
   public channelDescription: string = '';
   public channelID: string = '';
   public threads: [] = [];

   constructor(channelName, channelDescription, channelID) {

    this.channelName = channelName;
    this.channelDescription = channelDescription;
    this.channelID = channelID;
   }

}
