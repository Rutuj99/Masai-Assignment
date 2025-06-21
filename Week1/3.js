// Start the loading message
const loadingInterval = setInterval(() => {
  console.log("Loading...");
}, 1000); // Every 1 second

// Stop after 5 seconds
setTimeout(() => {
  clearInterval(loadingInterval);
  console.log("Loaded successfully!");
}, 5000); // After 5 seconds
