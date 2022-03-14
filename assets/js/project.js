AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Crypto InfoHub",
    cardImage: "assets/images/project-page/crypto.jpg",
    description: "An crypto infohub contains basic statistics of different cryptocurrencies based on React and some APIs.",
    tagimg: "",
    Previewlink: "https://cryptosinfohub.netlify.app/",
    Githublink: "https://github.com/kenzoyan/cryptocurrency",
  },
  {
    title: "Music Room",
    cardImage: "assets/images/project-page/music.gif",
    description: "A project for music control. You can get votes > requrie to skip the current annoying song. Django + React + Spotify API",
    tagimg: "",
    Previewlink: "https://github.com/kenzoyan/music",
    Githublink: "https://github.com/kenzoyan/music",
  },
  {
    title: "E-commerce clone",
    cardImage: "assets/images/project-page/ecommerce.png",
    description: "E-commerce clone built using React.js & Django",
    tagimg: "",
    Previewlink: "https://github.com/kenzoyan/Ecommerce-Django",
    Githublink: "https://github.com/kenzoyan/Ecommerce-Django",
  },
  {
    title: "Food Agent",
    cardImage: "assets/images/project-page/foodagent.png",
    description: "You can find food, hotels, attractions info according to your location. React + RapidAPI",
    tagimg: "",
    Previewlink: "https://foodagent.netlify.app/",
    Githublink: "https://github.com/kenzoyan/travel_agent",
  },
  {
    title: "VideoChat Room",
    cardImage: "assets/images/project-page/videochat.png",
    description: "A videochat website using Django + javscript + AgoraApi ",
    tagimg: "",
    Previewlink: "https://videochatyan.herokuapp.com/",
    Githublink: "https://github.com/kenzoyan/videochat",
  },
  {
    title: "Data-Mining",
    cardImage: "assets/images/project-page/default.jpg",
    description: "Project and Assignments of CS-E4650-Methods-of-Data-Mining",
    tagimg:'',
    Previewlink: "https://github.com/kenzoyan/CS-E4650-Methods-of-Data-Mining",
    Githublink: "https://github.com/kenzoyan/CS-E4650-Methods-of-Data-Mining",
  },
  {
    title: "Reinforcement Learning",
    cardImage: "assets/images/project-page/default.jpg",
    description: "The exercises and projects in ELEC-E8125-Reinforcement-Learning, Aalto University.",
    tagimg: "",
    Previewlink: "https://github.com/kenzoyan/ELEC-E8125-Reinforcement-Learning",
    Githublink: "https://github.com/kenzoyan/ELEC-E8125-Reinforcement-Learning",
  },
  {
    title: "Bachelor Thesis",
    cardImage: "assets/images/project-page/default.jpg",
    description: "A clothing try-on image generation model based on the GAN (generative adversarial network)",
    tagimg: "",
    Previewlink: "",
    Githublink: "",
  },
  
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage,description, Previewlink, Githublink }) => {
    output += `
          
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h2 class="title"><a href="${Githublink}">${title}</a></h2>
                <p><a href="${Githublink}" style='color: inherit;'>${description}</a></p>
                </div>
                <ul class="menu-content">
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    `
    
        ;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
