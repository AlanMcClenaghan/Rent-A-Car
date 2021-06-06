import { LightningElement, api } from 'lwc';

const TILE_WRAPPER_SELECTED_CLASS = "tile-wrapper selected"
const TILE_WRAPPER_UNSELECTED_CLASS = "tile-wrapper"

export default class CarTile extends LightningElement {

    @api car;
    @api carSelectedId;

    get backgroundStyle() {
        return `background-image: url(${this.car.Picture__c})`;
    }

    // Fires event with the Id of the car that has been selected.
    selectCar() {

        console.log('Clicked');

        const carId = this.car.Id;
        console.log('selectCar this.car.Id:' + this.car.Id);
        console.log('selectCar carId:' + carId);
        

        // detail contains only primitives
        const carSelect = new CustomEvent('carselect', 
          {detail: carId } 
        );
        // Fire the event from c-car-tile
        this.dispatchEvent(carSelect);
      }

      get tileClass() {
        if(this.car.Id  === this.carSelectedId){
          return TILE_WRAPPER_SELECTED_CLASS;
        } 
        return TILE_WRAPPER_UNSELECTED_CLASS;
      }

}