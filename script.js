document.getElementById("fakePhishForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Capture entered data
  let email = document.getElementById("email").value;
  let card  = document.getElementById("card").value;

  // Display data as if it were 'captured'
  document.getElementById("result").innerHTML = `
    <h2> Phishing Simulation Result</h2>
    <p><strong>Email:</strong> ${venomcypherhacker@gmail.com}</p>
    <p><strong>Gift Card Code:</strong> ${card}</p>
    <p style="color: red; font-weight: bold;">This was a simulation. Never enter your personal information on suspicious websites!</p>
  `;

  // Hide form, show result
  document.getElementById("fakePhishForm").style.display = "none";
  document.getElementById("result").classList.remove("hidden");
});
