*/ Created by rui! /*
# What is my ip?
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com)

Check your IPV4 Address And IPV6 Address by going to this link!

Check <a href="https://github.com/kyleearroyo/whatismyip/blob/main/CHANGELOG.md">CHANGELOG.md</a> to see the history ;-;

# Link 🌐
https://ruinaigelreogo.github.io/whatismyip
 
# Open Source
Open-source software is computer software that is released under a license in which the copyright holder grants users the rights to use, study, change, and distribute the software and its source code to anyone and for any purpose. 

Open-source software may be developed in a collaborative public manner.

give me credit ;-;

YES THIS PROJECT IS OPEN SOURCE!

# Owner
All of the files are owned by Rui Naigel Reogo

# How to use this CODE for your own Code!
Just copy this things! ;)

get-ip.js
```
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
```

index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lorem Ipsum Dolor</title>
</head>
<body>
    <script src="get-ip.js"></script>
    <p>Your IPv4 address is: <span id="ipv4-address"></span></p>
</body>
</html>
```
And you are all set ;)
