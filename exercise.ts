type bankAccountType = {money: number, deposit: (value: number) => void };
let bankAccount: bankAccountType = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};

type myselfType = {name: string, bankAccount: bankAccountType, hobbies: string[]};
let myself: myselfType = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

