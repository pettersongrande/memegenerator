const memePageForm = document.querySelector(".memeForm");
const memeMixerBtn = document.querySelector(".submitBtn");
const scrollUpBtn = document.querySelector(".scrlUp")
const newImg = document.querySelector(".newMediaLink");
const topMsg = document.querySelector(".newUserTopMsg");
const btmMsg = document.querySelector(".newUserBtmMsg");


//ARRAY to insert user memes input-------------------------

const userMemes = [];



// MEME MIXER BUTTON - CONSOLE LOG AND PREVENTING DEFAULT ---------------

memeMixerBtn.addEventListener("click", function(e){
    e.preventDefault()
    console.log(e);
});



//SCROLL UP BUTTON -----------------------------------------------------------------------
scrollUpBtn.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});



// memePageForm.addEventListener("submit", function(e){
//     e.preventDefault();
// })

//     if (newImg.value == "" || topMsg.value == "" || btmMsg.value == "") {
//     alert ("No value in any fields");
// };


// This function renders a new user new image into a "transparent card", add top and bottom input text into image, append it into html structure ------------------------


function makingMemeBox(userMemes) {

    for (let i =o; i < userMemes.length; i++){

        const newBlock = document.createElement("div");
        newCard.classList.add("cardModel");

    }

};