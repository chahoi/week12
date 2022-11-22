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

function handleClickMeButton()
{
    alert("something");   
}

clickMeButton.addEventListener('click', handleClickMeButton, {once:true});