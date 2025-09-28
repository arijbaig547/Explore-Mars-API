gsap.registerPlugin(ScrollTrigger);

gsap.fromTo("#space", { x: -150 }, { x: 0, duration: 2 });

gsap.to("#space", {
  y: 20,
  duration: 2,
  ease: "power1.out",
  repeat: -1,
  yoyo: true
});



gsap.fromTo(".nav", { x: 100 }, { x: 0, duration: 1 });

gsap.to(".welcome h6", {
  y: -90,
  duration: 5,
  repeat: -1,
  yoyo: true
});

// gsap.fromTo(".card", 
//   { y: -100,duration:2 },         // from (start) state
//   { 
//     y: 0,             // to (end) state
//     scrollTrigger: {
//       trigger: "#explore",
//       start: "top 80%",
//       end: "top 30%",
//       scrub: true,
//       markers: true
//     }
//   }
// );


// Animate the section title
gsap.from("#explore h1", {
  scrollTrigger: {
    trigger: "#explore h1",
    start: "top 80%",  // jab title viewport ke 80% position pe aaye
   
  },
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out"
});

// Image animation jab scroll ho ke image dikhe
gsap.from(".card-img-top", {
  scrollTrigger: {
    trigger: ".card-img-top",
    start: "top 80%",
   
  },
  duration: 1,
  opacity: 0,
  scale: 0.9,
  ease: "power3.out"
});

// Card body text animation
gsap.from(".card-body", {
  scrollTrigger: {
    trigger: ".card-body",
    start: "top 80%",
  
  },
  duration: 1,
  opacity: 0,
  y: 30,
  ease: "power3.out"
});

gsap.from(".item", {
  scrollTrigger: {
    trigger: ".item",
    start: "top 80%",
  
  },
  duration: 3,
  opacity: 0,
  y: 30,
  ease: "power3.out"
});

gsap.from(".marsimg img", {
  scrollTrigger: {
    trigger: ".marsimg img",
    start: "top 80%",
  
  },
 scale:0.8,
 opacity:0,
  ease: "power3.out",
  duration:4
});

gsap.to(".marsimg img", {
  rotate: 360,
  duration: 20,
  repeat: -1,
  ease: "linear",
});

gsap.from("#AboutH1", {
  scrollTrigger: {
    trigger: "#AboutH1",
    start: "top 80%",
  
  },
 y:50,
 opacity:0,
  ease: "power3.out",
  duration:4


});




gsap.to("#earth", {
  rotate: 360,
  duration: 20,
  repeat: -1,
  ease: "none" // constant speed, no easing
});





function fetchAPOD() {
  const apiKey = "bvl03nJEAMKRBP1BsgBlgJLFhrwPhdOyiW4kO53D";
  const count = 1;
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

  var cardTitle = document.querySelector(".card-title");
  var cardText = document.querySelector(".card-text");
  var cardImage = document.querySelector(".card-img-top");
  var dateText=document.querySelector(".picture-text h6")
 var date = new Date();
var splitDate = date.toDateString().split(" ").slice(0, 4).join(" ");
  

  fetch(url)
    .then(response => response.json())
    .then(data => {
      let apodData = data[0]; // Better variable name

      cardText.textContent = apodData.explanation; // 🔁 Fixed spelling
      cardTitle.textContent = apodData.title;
      cardImage.src = apodData.url;
      dateText.textContent=splitDate
    })
    .catch(error => {
      console.error("Error fetching APOD:", error);
    });
}

fetchAPOD();


function fetchRoverPhotos(){
  const apiKey = "bvl03nJEAMKRBP1BsgBlgJLFhrwPhdOyiW4kO53D";
  let sol=1000;
  let roverPictures=document.querySelector(".rover-pictures");
  const cam="NAVCAM"

   const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${cam}&api_key=${apiKey}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      data.photos.forEach(photo => {
        const img = document.createElement("img");
        img.src = photo.img_src;
        img.className="img-fluid"
        img.alt = `Photo taken by ${photo.rover.name} on ${photo.earth_date}`;
     
        roverPictures.appendChild(img);
      });
    })
    .catch(err => {
      console.error("Error fetching rover photos:", err);
    });
}


fetchRoverPhotos();