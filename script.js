// var mysound = document.getElementById("mysound");
// var icon = document.getElementById("icon");

// // Creating a function that will change
// // pause to play and vice-versa
// icon.onclick = function() {
//     if (mysound.paused) {

//         // If paused then play the
//         // music and change the image
//         mysound.play();
//         icon.src =
// "https://media.geeksforgeeks.org/wp-content/uploads/20210402235545/Pause.png";
//     } else {

//         // If playing then pause the
//         // music and change the image
//         mysound.pause();
//         icon.src =
//         "https://media.geeksforgeeks.org/wp-content/uploads/20210402235520/play.png";
        
//     }
// }



console.log("Script running...");
document.querySelector(".cross").style.display = "none";

document.querySelector(".hamburger").addEventListener("click", () => {
	document.querySelector(".sidebar").classList.toggle("sidebarGo");
	if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
		document.querySelector(".ham").style.display = "inline";
		document.querySelector(".cross").style.display = "none";
	} else {
		document.querySelector(".ham").style.display = "none";
		setTimeout(() => {
			document.querySelector(".cross").style.display = "inline";
		}, 300);
	}
});


