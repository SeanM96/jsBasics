const account = {
    name: 'Sean',
    expenses:[],
    income:[],

    addExpense: function(desc, amnt) {
        return this.expenses.push({
            description: desc,
            amount: amnt
        })
    },

    addIncome: function(desc, amnt) {
        return this.income.push({
            description: desc,
            amount: amnt
        })
    },


    getAccountSummary: function() {
        let totalExpenses = 0;
        let totalIncome = 0;
        this.expenses.forEach(function(element) {
            totalExpenses = totalExpenses + element.amount
        });
        this.income.forEach(function(element) {
            totalIncome = totalIncome + element.amount
        });

        return `${this.name} has a balance of £${totalIncome - totalExpenses}. They have £${totalIncome} in income and £${totalExpenses} in expenses.`
    }
};

account.addExpense('Coffee', 5);
account.addExpense('Cheese', 15);
account.addExpense('Petrol', 5);
account.addIncome('Petrol', 500);
account.addIncome('Cheese', 5);
console.log(account.expenses);
console.log(account.income);
console.log(account.getAccountSummary());

//Expense -> Description, amount
//addExpense -> Desc, amount
//getAccountSummary