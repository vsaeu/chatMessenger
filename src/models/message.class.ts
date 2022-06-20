export class Message {
    public author: string='';
    public timestamp: string ='';
    public channelName: string='';
    public content: string = '';
    public image: string = '';
    public messageID: string = '';

    constructor(obj: any){
        this.author = obj ? obj.author : 'Dirk';
        this.timestamp = obj ? obj.timestamp : 'Timestamp';
        this.channelName = obj ? obj.channelName : 'Name';
        this.content = obj ? obj.content : 'Content';
        this.image = obj ? obj.image : 'img';
        this.messageID = obj ? obj.messageID : 'MessageID';
    }
} 