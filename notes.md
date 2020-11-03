## Explicit Types

### Simple variables
- Explicit types are very useful for initialising variables of whose the value we don't know initially. Look at the first three lines of code.
- This is my preferred methods of dealing with simple variables.

### Arrays
- Arrays are a bit more complicated. More extensive notes are located in my typescript file under the array section. So I will just summarise it here. Let's say we want to define an array of exclusively strings: 

```javascript
    let ninjas: string[]; // will not work
```

The above will not work because we aren't actually creating an empty array, like we would in javascript. Whereas:

```javascript
    let ninjas: string[] = []; // works
```
Will work because not only are we explicitly defining the strict type of our array, we are making the our empty array, ready to use.

### Objects
- Defining objects are much easier.
- My favourite and recommended method of explicitly defining an object is simply making an object and explicitly defining the types of each property. Consult the **last** 10 lines of code in the file (secondNinja variable).