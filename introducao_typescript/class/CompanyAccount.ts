import { DioAccount} from "./DioAccount.js";

export class CompanyAccount extends DioAccount{
    
    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    getLoan = (): void => {
        console.log('Você solicitou um empréstimo');
    }

    deposit = (): void => {
        console.log('A empresa depositou');
    }

}