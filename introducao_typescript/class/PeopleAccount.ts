import { DioAccount } from "./DioAccount.js";

export class PeopleAccount extends DioAccount{
    doc_id: number;

    constructor(name: string, accountNumber: Number, doc_id: number){
        super(name, accountNumber);
        this.doc_id = doc_id;
    }
}