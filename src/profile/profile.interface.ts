export enum Operation{
    addition = 'addition',
    subtraction = 'subtraction',
    multiplication = 'multiplication',
}

export class ArithmeticDto{
    operation_type: Operation;
    x: number;
    y: number;
    
}