function taskOne() {
  console.log("Task 1 completed");
}

function taskTwo(callback) {
  console.log("Task 2 completed");
  callback(); // Execute the callback after Task 2
}

// Execute taskTwo, passing taskOne as the callback
taskTwo(taskOne);
