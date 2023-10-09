//SELECTORS---------------------------------------------

const memePageForm = document.querySelector(".memeForm");
const memesDisplay = document.querySelector(".urMemesDisplay");
const memeMixerBtn = document.querySelector(".submitBtn");
const scrollUpBtn = document.querySelector(".scrlUp")
const newImg = document.querySelector("#mediaLink");
const topMsg = document.querySelector("#userTopInput");
const btmMsg = document.querySelector("#userBtmInput");


// MEME PAGE FORM this function prevents default, scroll user view to new memes section, submits a form inside the memeForm division.

memePageForm.addEventListener("submit", function(event){

    event.preventDefault();
    memesDisplay.scrollIntoView({
        behavior: "smooth",
    });
    addIMG(newImg.value);       

});



//ARRAY to insert user memes input----------------------

const userMemes = [];

//FUNCTION TO ADD IMAGE INTO userMemesArray 

function addIMG (url) {
    
    let img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);
    userMemes.push(img);
    newImg.value = "";

    //creating card

    const newCard = document.createElement("div");
    newCard.classList.add("cardModel");
    newCard.dataset.imgName = userMemes[i];    

};

function topSentence (string) {

    let newTopSentence = document.createElement("li");
    


}




// USER VALUES:

// img.src 
newImg.value
// top message
topMsg.value
// bottom message
btmMsg.value

//FUNCTION to add image from link to array (top and btm msg not included)

let link = newImg.value;
if (link !== "") {

let newImg = document.createElement("img");
Image.src = `"${link}"`;
};



//SCROLL UP BUTTON -----------------------------------------------------------------------
scrollUpBtn.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

