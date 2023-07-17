//Write a function groupBy that takes an array of objects and a property name as parameters. The function should group the objects based on the values of the given property and return an object where the keys are unique property values and the values are arrays of objects with matching property values. For example:

function groupBy(arrs, prop) {
  const groupedData = {};

  for (const obj of arrs) {
    const key = obj[prop];

    if (!groupedData[key]) {
      groupedData[key] = [obj];
    } else {
      groupedData[key].push(obj);
    }
  }

  return groupedData;
}

const students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 21 },
];

const prop = "age";
console.log(groupBy(students, prop));
