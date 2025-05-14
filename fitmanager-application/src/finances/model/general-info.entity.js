// 
// This JavaScript class `GeneralInfo` is designed to store and manage general information about financial data for a specific month and year. 
// It includes properties such as total income, total expenses, earnings, and a breakdown of membership income (monthly, quarterly, and annual).
// The constructor allows for the initialization of these properties, with default values provided if no data is supplied.
// 
// Author: Renzo Luque
//

export class GeneralInfo {
    constructor(month='',
                year='',
                total_income=0,
                total_expenses=0,
                earnings = 0,
                membership_income_breakdown = { monthly: 0, quarterly: 0, annual: 0 })
    {
        this.month = month;
        this.year = year;
        this.total_income = total_income;
        this.total_expenses = total_expenses;
        this.earnings = earnings;
        this.membership_income_breakdown = membership_income_breakdown;
    }
}
