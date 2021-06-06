import { LightningElement, track, wire } from 'lwc';
import getCarTypes from "@salesforce/apex/CarSearchFormController.getCarTypes";
import { showToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class CarSearchForm extends NavigationMixin(LightningElement) {

    @track searchOptions;

    // Wire a custom Apex method
    @wire(getCarTypes)
    wiredCarTypes({ data, error }) {
      if (data) {
        this.searchOptions = data.map(type => {
          // TODO: complete the logic
          return {
            label: type.Name,
            value: type.Id
          }
        });
        // this.searchOptions.unshift({ label: 'All Types', value: '' });
      } else if (error) {
        this.showToast('ERROR', error.body.message, 'error')
      }
    }

    handleCarTypeChange(event) {

        const carTypeId = event.detail.target;

        // Create the const searchEvent
        // searchEvent must be the new custom event search
        const searchEvent = new CustomEvent('search',
            { detail : carTypeId }
        );
        this.dispatchEvent(searchEvent);
    }

    createNewCarType() {
        // Navigate to the New Boat page
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Car_Type__c',
                actionName: 'new',
            },
        });
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