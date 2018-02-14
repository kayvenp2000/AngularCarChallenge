import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';
import * as Vehicle from './car/car.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Want to make a Car?';
  
  colors: any;
  door: any;
  mpg: any;
  model: any;
  carObject: any;
  carArrays = [];


  newCar(){
    this.carObject = {
      incomingColors: this.colors,
      incomingDoors: this.door,
      incomingMpg: this.mpg,
      incomingModel: this.model,
    }
  }

  let myNewVehicle = new this.myNewVehicle.car(this.carObject);
  this.carArrays.push(myNewVehicle);


