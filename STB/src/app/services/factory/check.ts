  export class Check {
    constructor(
    public Idcheck?: String,
    public amount?: String,
    public currency_check= String('TND'),
    public date= new Date(),
    public statue= String('IN_BANK'),
    public reciver=String(0)+String(2),
    public owner?:String,
    public compte_owner?: String,
  
    ) { }
  }