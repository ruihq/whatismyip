*/ coded by rui /*
// Create an async function to retrieve the user's IP addresses
async function getIPAddresses() {
  // Show the loading screen
  document.getElementById("loading").style.display = "block";

  // Call the ipapi API to get the user's IPv4 address
  let ipv4Address = "Error retrieving IPv4 address";
  try {
    const response1 = await fetch("https://api.ipify.org?format=json");
    const data1 = await response1.json();
    ipv4Address = data1.ip;
  } catch (error) {
    console.error(error);
  }
  document.getElementById("ipv4-address").innerHTML = ipv4Address;

  // Call the api6.ipify.org API to get the user's IPv6 address
  let ipv6Address = "Error retrieving IPv6 address";
  try {
    const response2 = await fetch("https://ipapi.co/json/");
    const data2 = await response2.json();
    ipv6Address = data2.ip;
  } catch (error) {
    console.error(error);
  }
  document.getElementById("ipv6-address").innerHTML = ipv6Address;

  // Hide the loading screen
  document.getElementById("loading").style.display = "none";
}

// Call the async function
getIPAddresses();
