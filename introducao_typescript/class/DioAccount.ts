export abstract class DioAccount{
    private readonly name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number){
        this.name = name;
        this.accountNumber = accountNumber;
    }

    getName = (): string => {
        return this.name;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw = (amount: number): void => {
        if(this.validateBalance(amount) && this.validateStatus())
            this.balance -= amount;
        else
            console.error("Saldo insuficiente para depósito!");
    }

    getBalance = (): void => {
        console.log('Seu saldo é: ' + this.balance);
    }

    private validateBalance = (amount: number):  boolean => {
        return this.balance >= amount;
    }

    protected validateStatus(): boolean {
        return this.status;
    }
}