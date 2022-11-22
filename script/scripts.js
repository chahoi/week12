const clickMeButton = document.querySelector(".click-me");

//It will remove the eventListener
// function handleClickMeButton()
// {
//     alert("something");   
// }

// clickMeButton.addEventListener('click',handleClickMeButton);

// clickMeButton.removeEventListener('click', handleClickMeButton);


//It does not remove event listener
// clickMeButton.addEventListener('click',function handleClickMeButton()
// {
//     alert("something");   
// });

// clickMeButton.removeEventListener('click', function handleClickMeButton()
// {
//     alert("something");   
// });

//Make it only alert once after page is loaded first time
// clickMeButton.addEventListener('click',function handleClickMeButton()
// {
//     alert("something");   
//     clickMeButton.removeEventListener('click', handleClickMeButton);
// });

//Another way to alert only once. .addEventListener('click',function,option);

function handleClickMeButton(event)
{
    alert("something");   
    // console.log(event);
}

clickMeButton.addEventListener('click', handleClickMeButton, {once:true});



//changing background color

// function backgroundCLC()
// {
//     1 way
//     document.body.style.backgroundColor = "pink";

//     2 way
//     document.body.classList.add("pink");
// }

// clickMeButton.addEventListener('click', backgroundCLC);


//change button text when clicked

// function changeText ()
// {
//     clickMeButton.textContent = "Clicked!!!!";
// }

// clickMeButton.addEventListener('click', changeText);


//writing if statement
// function changeText ()
// {
//     if(clickMeButton === "Click Me"){
//         clickMeButton.textContent = "Clicked!!!!";
//     } else if(clickMeButton === "Clicked!!!!"){
//         clickMeButton.textContent = "Click Me";
//     }
    
// }

// clickMeButton.addEventListener('click', changeText);

//create new button

// function createAddButton()
// {
//     const purpleButton = document.createElement("button");
//     purpleButton.textContent = "Purple";
//     purpleButton.addEventListener("mousemove", changeBGGreen);
//     document.body.appendChild(purpleButton);
// }

// clickMeButton.addEventListener('click', createAddButton);


// function createPara()
// {
//     const para = document.createElement("p");
//     para.textContent = "my para";
//     purpleButton.addEventListener("mousemove", changeBGGreen);
//     document.body.appendChild(para);
// }

// clickMeButton.addEventListener('click', createPara);

// function changeBGGreen(event)
// {
//     event.target.classList.add("green-background");
// }

const buttonContainer = document.querySelector(".buttonContainer");
buttonContainer.addEventListener("mouseover", buttonContainer)