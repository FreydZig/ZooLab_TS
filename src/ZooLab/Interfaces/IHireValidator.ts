import {IEmployee} from "./IEmployee";

export interface IHireValidator{
    ValidateEmployee(employee: IEmployee) : Array<string>;//Array<ValidationError>
}