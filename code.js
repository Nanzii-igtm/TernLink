document.addEventListener("DOMContentLoaded", () => {
  // Grab the form so we can work with it
  const form = document.querySelector("form");
  const skillDropdown = document.getElementById("skill");
  const locationInput = document.getElementById("location");

  // When user clicks the submit button
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop the page from refreshing

    // Get what the user picked/typed
    let userSkill = skillDropdown.value;
    let userLocation = locationInput.value.trim(); // .trim() removes extra spaces

    // Check if they forgot to fill something
    if (userSkill === "" || userLocation === "") {
      alert("Hey, please select your skill and type your location first!");
      return; // stop running if form is empty
    }

    // Save their info so other pages can use it later
    localStorage.setItem("ternlink_skill", userSkill);
    localStorage.setItem("ternlink_location", userLocation);

    // Quick feedback so user knows it worked
    alert(
      "Got it! Taking you to gigs for " + userSkill + " in " + userLocation,
    );

    // Send them to the opportunities page
    window.location.href = "opportunities.html";
  });
});
