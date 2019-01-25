(function() {
var updateButton = document.getElementById('updateDetails');
var favDialog = document.getElementById('favDialog');
var outputBox = document.getElementsByTagName('output')[0];

updateButton.addEventListener('click', function() {
favDialog.showModal();
});

})();

function twFermer() {
window.close();
}