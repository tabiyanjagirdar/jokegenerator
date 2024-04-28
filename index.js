const  jokeConatiner = document.querySelector('#joke');
const btn = document.querySelector('#btn');
const URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


let getJoke = async() =>{
    jokeConatiner.classList.remove('fade')
     let response = await fetch(URL)
    let data = await response.json();
    jokeConatiner.innerHTML = `${data.joke}`
    jokeConatiner.classList.add('fade')
}



btn.addEventListener('click',getJoke)

getJoke();

