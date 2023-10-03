//SELECTORS---------------------------------------------

const memePageForm = document.querySelector(".memeForm");
const memeMixerBtn = document.querySelector(".submitBtn");
const scrollUpBtn = document.querySelector(".scrlUp")
const newImg = document.querySelector("#mediaLink");
const topMsg = document.querySelector("#userTopInput");
const btmMsg = document.querySelector("#userBtmInput");


// MEME MIXER BUTTON - this button prevents default and console log all inputs---------------------------------

memeMixerBtn.addEventListener("click", function(e){
    e.preventDefault();
    // console.log(newImg.value, topMsg.value, btmMsg.value);
});

//ARRAY to insert user memes input----------------------

const userMemes = [];

// USER VALUES:

// img.src 
newImg.value
// top message
topMsg.value
// bottom message
btmMsg.value

//FUNCTION to add image from link to array (top and btm msg not included)

function addingImages() {

    

}


//SCROLL UP BUTTON -----------------------------------------------------------------------
scrollUpBtn.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

