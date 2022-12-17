// JavaScript file (get-ip.js)

// Call an API to get the user's IP address
fetch("https://api.ipify.org?format=json")
  .then(response => response.json())
  .then(data => {
    // Update the page with the IP address
    document.getElementById("ip-address").innerHTML = data.ip;
  });

