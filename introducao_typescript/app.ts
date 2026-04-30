import { PeopleAccount } from "./class/PeopleAccount.js";
import { CompanyAccount } from "./class/CompanyAccount.js";
import { DepositAccount } from "./class/DepositAccount.js";

const peopleAccount = new PeopleAccount('Conta de Pessoa', 123456, 123456789);
console.log("Testando a conta de pessoa");
console.log(peopleAccount.getBalance());
peopleAccount.deposit(100);
console.log(peopleAccount.getBalance());
peopleAccount.withdraw(50);
console.log(peopleAccount.getBalance());
peopleAccount.withdraw(100);
console.log(peopleAccount.getBalance());

const companyAccount = new CompanyAccount('Conta de Empresa', 654321);
console.log("Testando a conta de empresa");
console.log(companyAccount.getBalance());
companyAccount.getLoan(1000);
console.log(companyAccount.getBalance());


const depositAccount = new DepositAccount('Conta de Depósito', 123456);
console.log("Testando a conta de depósito");
console.log(depositAccount.getBalance());
depositAccount.deposit(100);
console.log(depositAccount.getBalance());