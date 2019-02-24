document.addEventListener("DOMContentLoaded", function () {
    loadJSON();
});

function loadJSON() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                loadImages(JSON.parse(xmlhttp.responseText));
            }
            else if (xmlhttp.status == 400) {
                alert('There was an error 400');
            }
            else {
                alert('something else other than 200 was returned');
            }
        }
    };
    xmlhttp.open("GET", "data.json", true);
    xmlhttp.send();
}

function loadImages(imageData){
	for(let i = 0; i < imageData.length; i++){

		var mySlideDiv = document.createElement("div");
        mySlideDiv.setAttribute('class', 'mySlide');

		var img = document.createElement("img");
		img.setAttribute('class', 'imgClass');
		img.src = "img/" + imageData[i].src;

        var title = document.createElement("div");
        title.setAttribute('class', 'titleText');
        title.innerHTML = imageData[i].title;

		var desc = document.createElement("div");
		desc.setAttribute('class', 'descText');
		desc.innerHTML = imageData[i].description;

        var btn = document.createElement("button");
        btn.setAttribute('class', 'btn');
        btn.innerHTML = imageData[i].button + " &#10095";
        if(imageData[i].button == ""){
            btn.style.display = "none";
        } else{
            btn.style.display = "block";
        }

		document.getElementById("slideshow").appendChild(mySlideDiv);

		mySlideDiv.appendChild(img);
        mySlideDiv.appendChild(title);
		mySlideDiv.appendChild(desc);
        mySlideDiv.appendChild(btn);
	}
	showSlides(slideIndex);
    console.log(imageData);
}

var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlide');
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}