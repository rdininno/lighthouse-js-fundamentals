const instructorWithLongestName = function(instructors) {
  let longest = 0;
  let arr = instructors;
  let longestInstructor = {};

  for(let i = 0; i < arr.length; i++){
    if(arr[i].name.length > longest){
      longest = arr[i].name.length;
      longestInstructor = arr[i];
    }
  }

  return longestInstructor;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));


console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
