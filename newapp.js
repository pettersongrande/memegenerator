//SELECTORS---------------------------------------------

const memePageForm = document.querySelector(".memeForm");
const memesDisplay = document.querySelector(".urMemesDisplay");
const memeMixerBtn = document.querySelector(".submitBtn");
const scrollUpBtn = document.querySelector(".scrlUp")
const imgLink = document.querySelector("input[name='newImageLink']");
const topMsg = document.querySelector("input[name='topSentence']");
const btmMsg = document.querySelector("input[name='bottomSentence']");

//USER INPUTS:

// console.log any of these  or use these info: imgLink.value || topMsg.value || btmMsg.value 

//ARRAY to insert user memes input----------------------

const userMemes = [];


//FUNCTION TO grab link and create new card


function userMeme(userLink){

    const newCard = document.createElement("div");
    newCard.classList.add("cardModel");
    newCard.style.backgroundImage = `url(${userLink})`;
    userMemes.push(newCard)

    return newCard;

}



// MEME PAGE FORM this function prevents default, scroll user view to new memes section, submits a form inside the memeForm division.


memePageForm.addEventListener("submit", function(event){

    event.preventDefault();
    if (imgLink.value === "") {

        window.alert("Meme Mixer will only work with a link!")  
        
    }

    else {
    memesDisplay.scrollIntoView({
            behavior: "smooth",
    });
    const newMeme = userMeme(imgLink.value);
    memesDisplay.appendChild(newMeme);
    imgLink.value = '';
    }

});



//SCROLL UP BUTTON -----------------------------------------------------------------------
scrollUpBtn.addEventListener("click", function(){
    memePageForm.scrollIntoView({
    behavior: "smooth",
    });
});

