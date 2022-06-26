export class Thread {
   public channelID: number = 0;
   public threadID: number = 0;
   public messages: any = [];

    constructor(activeChannelID, threadID, message) {

        this.channelID = activeChannelID;
        this.threadID = threadID;
        this.messages.push(message); 
    }

}
