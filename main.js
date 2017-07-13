/**********
*
* Define global variables
* at the top of the page
*
***********/

// Get the modal
var modal = document.getElementById('modal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

/**********
*
* Add event handlers below
*
***********/


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//  Open modal 3 seconds after page load
window.addEventListener("load", function(){
	setTimeout(function(){
			// remove 'hidden' class from modal classList
			modal.classList.remove("hidden")
		}, 3000)
	})