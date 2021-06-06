public with sharing class CarSearchFormController {

    @AuraEnabled(Cacheable=true)
    public static List<Car_Type__c> getCarTypes() {
        return [SELECT Name, Id FROM Car_Type__c WITH SECURITY_ENFORCED ORDER BY Name];
    }

}
