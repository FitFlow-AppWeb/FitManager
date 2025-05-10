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