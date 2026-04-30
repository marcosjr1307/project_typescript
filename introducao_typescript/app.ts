import { PeopleAccount } from "./class/PeopleAccount.js";
import { CompanyAccount } from "./class/CompanyAccount.js";

const newAccount = new PeopleAccount('John Doe', 123456, 987654);
newAccount.deposit();

const companyAccount = new CompanyAccount('Acme Inc.', 654321);
companyAccount.deposit();
