## READ ME 

---
The FP Package provides ``` map, filter, reduce, concat splice``` functionalities to methods. 

---

**map** - iterates through an array to return a new array with the new values
**filter** - iterates through an array and returns a new array after filtering through the array
**reduce** - iterates through an array and returns a single value
**concat** - returns a single array with all the values from other arrays
**splice** - adds/deletes elements in an array using the index

### USAGE
``` javascript
	
	//fp.map(<array>, <function to run on each element>)
	fp.map([1,2,3], (n) => n +1);
	//Returns a results of [2,3,4]
	
	//fp.filter(<array>, <function to run on each element>)
	fp.filter([1,2,3,4,5,], n => n > 3);
	//Returns a result of [4,5]
	
	//fp.reduce(<array>, <function to run on each element>)
	fp.reduce([5,5,5,5], (c,a) => c+a);
	//Returns a result of 20

	//fp.concat(<array>, <array of values to concat>)
	fp.concat(['Rafiki '],[['is ', 'freakin '],['dope']])
	//Returns a result of  [ 'Rafiki ', 'is ', 'freakin ', 'dope' ]

	//fp.splice(<array>, <[index to start, (optional) number of items to delete, (optional)items to insert ....]
	let arr = [1,2,4] 
	fp.splice(arr, [2,0,3]);
	//Returns a result of []
	//Mutates the values of the array passed
	//arr = [1,2,3,4]
```