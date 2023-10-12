//SELECTORS---------------------------------------------

const memePageForm = document.querySelector(".memeForm");
const memesDisplay = document.querySelector(".urmemesDisplay");
const memeMixerBtn = document.querySelector(".submitBtn");
const scrollUpBtn = document.querySelector(".scrlUp");
const imgLink = document.querySelector("input[name='newImageLink']");
const topMsg = document.querySelector("input[name='topSentence']");
const btmMsg = document.querySelector("input[name='bottomSentence']");

//USER INPUTS:

// console.log any of these  or use these info: imgLink.value || topMsg.value || btmMsg.value 

//ARRAY to insert user memes input----------------------

const userMemes = [];


//THIS FUNCTION grabs the user img url, creates a card and pushes into the userMemes array.


function userMeme(userLink, userTopMsg, userBtmMsg){
    
    const newCard = document.createElement("div");
    const topSubt = document.createElement("p");
    const btmSubt = document.createElement("p");
    const newBtn = document.createElement("button");
        topSubt.classList.add("topTxt");
        topSubt.innerHTML = userTopMsg;
        newCard.append(topSubt);

        btmSubt.classList.add("btmTxt");
        btmSubt.innerHTML = userBtmMsg;
        newCard.append(btmSubt);

        newCard.classList.add("cardModel");
        newCard.style.backgroundImage = `url(${userLink})`;

        newBtn.innerHTML = "&#x1F5D1";
        newBtn.classList.add("deleteBtn");
        newBtn.addEventListener("click", function(e) {
            e.target.parentElement.remove();
        });
        newCard.append(newBtn);

        
    // userMemes.push(newCard);

    return newCard;
    
};



// MEME PAGE FORM this function prevents default, scroll user view to new memes section, submits the form inside the memeForm division.


memePageForm.addEventListener("submit", function(event){

    event.preventDefault();

        if (imgLink.value === "") {

            memeMixerBtn.classList.add("error");
            setTimeout(function(){
                memeMixerBtn.classList.remove("error");
            }, 500);
        
    }

        else {
            memesDisplay.scrollIntoView({
            behavior: "smooth",
    });

    const newMeme = userMeme(imgLink.value, topMsg.value, btmMsg.value);
            userMemes.push(newMeme);
            memesDisplay.appendChild(newMeme);
            // console.log(userMemes)
            imgLink.value = '';
            topMsg.value = '';
            btmMsg.value = '';

    }

});


//SCROLL UP BUTTON -----------------------------------------------------------------------
scrollUpBtn.addEventListener("click", function(){
    memePageForm.scrollIntoView({
    behavior: "smooth",
    });
});

