export abstract class DioAccount{
    private name: string;
    private readonly accountNumber: number;
    balance: number = 0;

    constructor(name: string, accountNumber: Number){
        this.name = name;
        this.accountNumber = accountNumber;
    }

    setName = (name: string): void => {
        this.name = name;
    }

    getName = (): string => {
        return this.name;
    }

    deposit = (): void => {
        console.log('Você depositou');
    }

    withdraw = (): void => {
        console.log('Você sacou');
    }

    getBalance = (): void => {
        console.log('Seu saldo é: ' + this.balance);
    }
}