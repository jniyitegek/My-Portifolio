// this the declaration for area in DOM where we will map our stuffs
const projectSection = document.getElementById('projectSection');
// this si the array with objects that contain our info about projects
const projectList = [
  {
    title: "SOUL HOSTEL'S WEBSITE",
    description: "It offers accommodation for students around Kigali",
    picture: "./Images/soulhostels.png",
    link:"google.com"
  },
  {
    title: "BOWSTRING'S WEBSITE",
    description: "It is online opportunities plaform for students and professionals",
    picture: "./Images/Aguka.png",
    link:"google.com"
  },
  {
    title: "GIFTFIT'S WEBSITE",
    description: "They collect idle clothes and distribute it to the poor",
    picture: "./Images/giftfit.png",
    link:"google.com"
  },
  {
    title: "SOMA FOUNDATION RWANDA WEB",
    description: "They Sponsor vurnerable students to get education",
    picture: "./Images/somaf.png",
    link:"google.com"
  },
  {
    title: "ADVANCED UNIQUE PORTFOLIO WEB",
    description: "Made with NEXT JS and showcases my creativity",
    picture: "./Images/myweb.png",
    link:"google.com"
  }
];

// the mapping is happening here and it is rendering the result to the DOM in projects.html
const markup = projectList
  .map(item => `
    <div class="projectdiv">
      <img id="projectback" src="${item.picture}" alt="${item.title} image" />
      <h1>${item.title}</h1>
      <p>${item.description}</p>
      <button>Visit</button>
    </div>
  `)
  .join('');          

projectSection.innerHTML = markup;
// the end 
