## Arrays & Objects

### Arrays

- Arrays and objects get strict types as well (reminder, all these definitions we are covering are still implicit)

- An array full of numbers (for example):
    - cannot expect a value that is not a number
    - cannot have one of its values changed (we can't change to something that is not a number)
    - this is because typescript is infering the array to be one that strictly holds number values only.
    - Look at lines 1 - 11, to see examples of this concept.

- The more various values an array takes are the values that the array will accept. Therefore, un tableu qui consiste des chiffres et des chaînes n'acceptent que ces telles valeurs

### Objects
- Whereas for objects, it's the values of the properties of the objects that get their strict type definitions. Implicitly, we just make an object as usual, and the data types of the properties will get inferred.
- I prefer to do this, as well as near everything else in Typescript, explicitly. This will come later.
- Just like arrays, changing the value of the object property will not work once defined.
- Also, something new to note is that we won't be able to add more properties to the object (*I could be wrong on this so I will come back after I have verified this*).