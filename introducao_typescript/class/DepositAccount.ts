import { DioAccount } from "./DioAccount.js";

export class DepositAccount extends DioAccount{

    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    deposit = (amount: number): void => {
        super.deposit(amount + 10);
    }
}