// Create an async function to retrieve the user's IP addresses
async function getIPAddresses() {
  // Show the loading screen
  document.getElementById("loading").style.display = "block";

  // Call the ipinfo API to get the user's IP addresses
  let ipAddress = {};
  try {
    const response = await fetch("https://ipinfo.io/json");
    ipAddress = await response.json();
  } catch (error) {
    console.error(error);
  }
  document.getElementById("ipv4-address").innerHTML = ipAddress.ip;
  document.getElementById("ipv6-address").innerHTML = ipAddress.ipv6;

  // Hide the loading screen
  document.getElementById("loading").style.display = "none";
}

// Call the async function
getIPAddresses();
