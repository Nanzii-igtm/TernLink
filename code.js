document.addEventListener("DOMContentLoaded", () => {
  // Grab the form so we can work with it
  const form = document.querySelector("form");
  const skillDropdown = document.getElementById("skill");
  const locationInput = document.getElementById("location");

  // When user clicks the submit button
  form.addEventListener("submit", (e) => {
    event.preventDefault(); // stop the page from refreshing

    // Get what the user picked/typed
    let userSkill = skillDropdown.value;
    let userLocation = locationInput.value.trim(); // .trim() removes extra spaces

    // Check if they forgot to fill something
    if (userSkill === "" || userLocation === "") {
      alert("Please select your skill and type your location first!");
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

if (window.location.pathname.includes('opportunities.html')) {
    const userSkill = localStorage.getItem('ternlink_skill');
    const userLocation = localStorage.getItem('ternlink_location');
    const greeting = document.getElementById('greeting');
    const gigList = document.getElementById('gig-list');

    if (userSkill && userLocation) {
        // THIS REPLACES "Checking for your gigs..."
        greeting.textContent = `Showing ${userSkill} gigs in ${userLocation};`;

        // THIS ADDS THE ACTUAL GIG CARDS
        gigList.innerHTML = `
            <div class="gig-card">
                <h4>${userSkill} Needed - Local Client</h4>
                <p>Location: ${userLocation}</p>
                <p>Pay: KES 1,500 for 3 hours</p>
            </div>
            
            <div class="gig-card">
                <h4>Remote ${userSkill} Project</h4>
                <p>Work from home</p>
                <p>Pay: KES 3,000 per task</p>
            </div>
        `;
    } else {
        greeting.textContent = 'Oops! Go back to Home and pick a skill first!';
    }
}

// clearbutton with no refreshing
const clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', function() {
  document.getElementById("gigForm").reset();
  localStorage.removeItem("gigs");
});