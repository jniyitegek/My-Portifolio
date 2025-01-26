let hamburger = document.getElementById("hamburger");
let navlist = document.getElementById("navlist");
let secondlist = document.getElementById("secondlist");
const getInTouch = document.getElementById ("btn");
let chat = document.getElementById("talk-img");
let chatTsap =document.getElementById("talk-imgone");
let footTsap = document.getElementById("footTsap");
let galTsap= document.getElementById("galTsap");
let getInTsap= document.getElementById("getInTsap");
let projTsap= document.getElementById("projTsap");
let hireTsap= document.getElementById("hireTsap");
let footLn = document.getElementById("footLn");
let galLn = document.getElementById("galLn");
let getInLn = document.getElementById("getInLn");
let projLn = document.getElementById("projLn");
let hireLn = document.getElementById("hireLn");
let galInst = document.getElementById("galInst");
let getInst = document.getElementById("getInst");
let hireInst = document.getElementById("hireInst");
let projInst = document.getElementById("projInst");
let footInst = document.getElementById("footInst");

let galTwit = document.getElementById("galTwit");
let getInTwit = document.getElementById("getInTwit");
let hireTwit = document.getElementById("hireTwit");
let projTwit = document.getElementById("projTwit");
let footTwit = document.getElementById("footTwit");

let galFace = document.getElementById("galFace");
let getInFace = document.getElementById("getInFace");
let hireFace = document.getElementById("hireFace");
let projFace = document.getElementById("projFace");
let footFace = document.getElementById("footFace");


hamburger.onclick = function (){
    hamburger.classList.toggle("active")
    navlist.classList.toggle("active")
    secondlist.classList.toggle ("active")
}
getInTouch.addEventListener("click", ()=>{
    window.location.href = "getintouch.html";
})
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backbtn");
let nextBtn = document.getElementById("nextbtn");



scrollContainer?.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn?.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft +=900;
});

backBtn?.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -=900;
});

[chat, chatTsap,footTsap, galTsap, projTsap,hireTsap, getInTsap].forEach(something=>{
    something?.addEventListener("click",() =>{
        window.open("https://wa.me/250798748795", "_blank");
    });
});
[footLn, galLn, getInLn, projLn, hireLn ].forEach(dothis=>{
    dothis?.addEventListener("click", ()=>{
        window.open("https://www.linkedin.com/in/jean-philippe-niyitegeka-6562b6220/", "_blank");
    });

});
[footInst, galInst, getInst, projInst, hireInst ].forEach(dothis=>{
    dothis?.addEventListener("click", ()=>{
        window.open("https://www.instagram.com/drperfect222/", "_blank");
    });

});

[footTwit, galTwit, getInTwit, projTwit, hireTwit ].forEach(dothis=>{
    dothis?.addEventListener("click", ()=>{
        window.open("https://x.com/jean_niyit26630", "_blank");
    });

});

[footFace, galFace, getInFace, projFace, hireFace ].forEach(dothis=>{
    dothis?.addEventListener("click", ()=>{
        window.open("https://www.facebook.com/profile.php?id=61555629605805", "_blank");
    });

});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");

    form?.addEventListener("submit", async (event) => {
        // Prevent default form submission behavior
        event.preventDefault();

        // Gather input data
        const name = document.querySelector(".fullname").value;
        const phoneOrEmail = document.querySelector(".fullnameOne").value;

        // Construct the WhatsApp message
        const message = `Name: ${name}, Contact: ${phoneOrEmail}`;

        try {
            // Construct the API URL with query parameters
            const apiUrl = `https://api.callmebot.com/whatsapp.php?phone=250798748795&text=${encodeURIComponent(message)}&apikey=5582562`;

            // Send a GET request to the API
            const response = await fetch(apiUrl, { method: "GET" });

            // Handle the API response
        } catch (error) {
            return
        } finally {
            alert("Form submitted successfully!");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const formGetIntouch = document.getElementById("contactformone");

    formGetIntouch?.addEventListener("submit", async (event) => {
        // Prevent default form submission behavior
        event.preventDefault();

        // Gather input data
        const nameOne = document.getElementById("nameone").value;
        const adressOne = document.getElementById("emailone").value;
        const messageOne = document.getElementById("message").value;

        // Construct the WhatsApp message
        const sendToMe = `Name: ${nameOne},\n Contact: ${adressOne},\n Message: ${messageOne}`;

        try {
            // Construct the API URL with query parameters
            const apiUrl = `https://api.callmebot.com/whatsapp.php?phone=250798748795&text=${encodeURIComponent(sendToMe)}&apikey=5582562`;

            // Send a GET request to the API
            const responseOne = await fetch(apiUrl, { method: "GET" });

            // Handle the API response
        } catch (error) {
            return
        } finally {
            alert("Form submitted successfully!");
        }
    });
});

let isomo = document.getElementById("itemthreeTwo");
    isomo?.addEventListener("click", ()=>{
        window.open("https://www.isomo-rw.com/", "_blank");
    });
let aluedu = document.getElementById("itemthreeOne");
    aluedu?.addEventListener("click", ()=>{
        window.open("https://www.alueducation.com/", "_blank");
    });

 var typed = new Typed(".auto-type",{
        strings: ["Digitalize your idea!","Create your online presence", "Increase your customer","Do all together"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    })





