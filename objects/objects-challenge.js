let myAccount = {
    name: 'Sean',
    expenses: 0,
    income: 0
};


let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount;
    return `${amount} added to expenses.`;
};

let addIncome = function(account, amount) {
    account.income = account.income + amount;
    return `${amount} added to income.`;
};

let resetAccount = function(account) {
    account.expenses = account.expenses - account.expenses;
    account.income = account.income - account.income;
    return 'Account reset.';
};

let getAccountSummary = function(account) {
    return `The account currently has $${account.expenses} expenses, and $${account.income} income. Total, the account has $${account.income - account.expenses}`
};

console.log(getAccountSummary(myAccount));
console.log(addExpense(myAccount, 50));
console.log(addIncome(myAccount, 100));
console.log(getAccountSummary(myAccount));
console.log(resetAccount(myAccount));
console.log(getAccountSummary(myAccount));