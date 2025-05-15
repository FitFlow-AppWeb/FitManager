// 
// This JavaScript class `IncomeData` is used to store and manage income information for a specific date, month, and year. 
// It includes properties such as the date, month, year, and income values for monthly, quarterly, and yearly periods.
// The constructor initializes these properties with default values provided if no data is passed.
// 
// Author: Renzo Luque
//

export class IncomeData {
    constructor(date='', month='', year='', monthly='', quarterly='', yearly='')
    {
        this.date = date;
        this.month = month;
        this.year = year;
        this.monthly = monthly;
        this.quarterly = quarterly;
        this.yearly = yearly;
    }
}
