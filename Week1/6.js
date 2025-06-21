function fetchUserData(callback) {
  console.log("Fetching user data...");

  setTimeout(() => {
    console.log("User data received");
    callback(); // Call the next step after 1 second
  }, 1000); // 1 second delay
}

function fetchUserPosts(callback) {
  console.log("Fetching user posts...");

  setTimeout(() => {
    console.log("User posts received");
    callback(); // Final callback after 1.5 seconds
  }, 1500); // 1.5 second delay
}

// Run the nested callbacks
fetchUserData(() => {
  fetchUserPosts(() => {
    console.log("All data loaded successfully!");
  });
});
