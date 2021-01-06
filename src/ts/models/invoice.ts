// NEW: importing the interface
import { HasFormatter } from "../interfaces/HasFormatter.js";
// NEW: using the implements keyword to ensure that at the interface structure is, at the very least, in accordance with part of our class definition. it is a bit difficult to explain. 
//basically, since we are implementing our imported interface using the implements keyword, our class MUST have the a definition of the interface's blueprint SOMEWHERE. What i mean is that we can continue to add our own stuff on top of it, but what's in the interfaces must be here. think of it like extends in regular OOP Javascript, but stricter.
export class Invoice implements HasFormatter {
	constructor(readonly client: string, private details: string, public amount: number) {}

	format() {
		return `${this.client} owes ${this.amount} for ${this.details}`
	}
}