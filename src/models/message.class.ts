export class Message {
    author: string;
    timestamp;
    channelName: string;
    content: string;
    image: string;
    messageID: string;
    
    constructor(obj?: any) {
        this.author = obj ? obj.author : '';
        this.timestamp = obj ? obj.timestamp : '';
        this.channelName = obj ? obj.channelName : '';
        this.content = obj ? obj.content : '';
        this.image = obj ? obj.image : '';
        this.messageID = obj ? obj.messageID : '';
    }
    public toJson(){
        return {
          author: this.author,
          timestamp: this.timestamp,
          channelName: this.channelName,
          content: this.content,
          image: this.image,
          messageID: this.messageID
          
        }
      }
}
