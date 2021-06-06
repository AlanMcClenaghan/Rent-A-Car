import { LightningElement, track } from 'lwc';

export default class CarSearch extends LightningElement {

    @track carTypeId = '';
    
    searchCars(event) {
        console.log(event.detail);
        this.carTypeId = event.detail;
        console.log(this.carTypeId);
    }
}