//Breakfast items button working
//////////////////////////////////////////////////////////////////////
const addBreakfast = document.querySelector('#add-breakfast');
const addLunch=document.querySelector("#add-lunch");
const addDinner=document.querySelector("#add-dinner");
const searchContainer = document.querySelector('#search-container');
const form = document.createElement('form');
const input = document.createElement('input');

addBreakfast.addEventListener('click', () => {
    searchContainer.append(form)
});
addLunch.addEventListener("click",()=>{
    searchContainer.append(form)
});
addDinner.addEventListener("click",()=>{
    searchContainer.append(form)
});

input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'Search Food items')

const searchButton = document.createElement('button')
searchButton.innerText = 'Search'

form.append(input, searchButton)
