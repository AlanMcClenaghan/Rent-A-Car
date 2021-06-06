import { LightningElement, track } from 'lwc';

export default class CarSearch extends LightningElement {

    @track carTypeId = '';
    
    searchCars(event) {
        this.carTypeId = event.detail;
    }
}