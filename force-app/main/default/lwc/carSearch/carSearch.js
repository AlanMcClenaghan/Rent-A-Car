import { LightningElement } from 'lwc';

export default class CarSearch extends LightningElement {

    searchCars(event) {
        console.log(event.target.value)
    }
}