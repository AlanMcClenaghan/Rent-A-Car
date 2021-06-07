import { LightningElement, api, track, wire } from 'lwc';
import getCars from '@salesforce/apex/CarSearchResultsController.getCars';
import { showToastEvent } from 'lightning/platformShowToastEvent';

export default class CarSearchResults extends LightningElement {
    @api carTypeId;

    @track cars = [];
    @track selectedCarId;

    @wire(getCars, {carTypeId : '$carTypeId'})
    wiredGetCars({ data, error }) {
        if (data) {
            this.cars = data;
        } else if (error) {
            this.showToast('ERROR', error.body.message, 'error');
        }
    }

    get carsFound() {
        if (this.cars.length > 0) {
            return true;
        }
        return false;
    }

    carSelectHandler(event) {
        const carId = event.detail;
        console.log('carSelectHandler - clicked');
        console.log('carSelectHandler:' + carId);
        this.selectedCarId = carId;
        console.log('carSelectHandler:' + this.selectedCarId);
    }

    showToast(title, message, variant) {
        const errorEvent = new showToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(errorEvent);
    }
}