export class ConsoleOutput{
    protected message: string
    OutPut(message):string{
        this.message = message;
        return this.message;
    }
}