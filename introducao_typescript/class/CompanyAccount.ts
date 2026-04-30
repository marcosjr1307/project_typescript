import { DioAccount} from "./DioAccount.js";

export class CompanyAccount extends DioAccount{
    
    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    getLoan = (amount: number): void => {
        if(super.validateStatus())
            super.deposit(amount);
        else
            console.error("Empréstimo negado!");
    }

    deposit = (): void => {
        console.log('A empresa depositou');
    }

}