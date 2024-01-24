// Function to open the modal
function openModal(modelId) {
  document.getElementById(modelId).style.display = "block";
}

// Function to close the modal
function closeModal(modelId) {
  document.getElementById(modelId).style.display = "none";
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    closeModal();
  }
};
