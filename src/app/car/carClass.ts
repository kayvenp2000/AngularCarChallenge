export interface NewCar {
    incomingColors: any;
      incomingDoors: any;
      incomingMpg: any;
      incomingModel: any;
}

export class car {
    color: any;
    doors: any;
    mpg: any;
    model: any;


constructor(labelledObj: NewCar) {
    this.color = labelledObj.incomingColors
    this.doors = labelledObj.incomingDoors
    this.mpg = labelledObj.incomingMpg
    this.model = labelledObj.incomingModel
}
}