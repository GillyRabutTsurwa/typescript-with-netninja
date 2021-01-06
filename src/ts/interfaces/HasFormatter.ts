//NEW: interface that has a method that returns a string. 
// NEWNOTE: interfaces can also be used in conjuction with classes to add upon an existing class. look at invoice.ts, where we are importing this interface
export interface HasFormatter {
    format(): string
}