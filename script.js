window.onload = function()
{
    displayAPI();
}

async function displayAPI() 
{
    let respostaFetch = await fetch("https://hp-api.onrender.com/api/characters")

    let resposta = await respostaFetch.json();

    let body = document.querySelector("body");

    let cardContainer = document.createElement("div")
    cardContainer.classList.add("cardContainer")

    for (let character of resposta)
    {
        let card = document.createElement("div")
        card.classList.add("card")

        let name = document.createElement("h1")
        name.classList.add("name")
        name.innerHTML=character.name;
        card.append(name)

        let image = document.createElement("img")
        image.classList.add("image")
        image.src=character.image
        card.append(image)
        
        let details = document.createElement("div")
        details.classList.add("details")     

        let species = document.createElement("h2")
        species.classList.add("species")
        species.innerHTML=character.species;
        details.append(species)

        let ancestry = document.createElement("h2")
        ancestry.classList.add("ancestry")
        if (character.ancestry!="") 
        {
            ancestry.innerHTML= character.ancestry;
        }
        else
        {
            ancestry.innerHTML = "NOT KNOWN"
        }
        details.append(ancestry)

        let house = document.createElement("h2")
        house.classList.add("house")
        if (character.house!="") 
        {
            house.innerHTML=character.house;
        }
        else
        {
            house.innerHTML = "NOT KNOWN"
        }   
        details.append(house)

        let age = document.createElement("div")
        age.classList.add("age")
        if (character.yearOfBirth!=null) 
        {
            age.innerHTML= 2025 - character.yearOfBirth;
        }
        else
        {
            age.innerHTML = "NOT KNOWN"
        }
        details.append(age)
        card.append(details) 

        cardContainer.append(card)
        body.append(cardContainer)
    }

    let divButtons = document.createElement("div")
    divButtons.classList.add("divButtons")

    let buttonLeft= document.createElement("button")
    buttonLeft.classList.add("buttonLeft")
    buttonLeft.innerHTML= "<"
    divButtons.append(buttonLeft)

    let buttonRight= document.createElement("button")
    buttonRight.classList.add("buttonRight")
    buttonRight.innerHTML= ">"
    divButtons.append(buttonRight)
    
    body.append(divButtons)

    // SCROLL dreta i esquerra fent click sobre botons.

    let rightScroll =  document.querySelector(".buttonRight")
    rightScroll.addEventListener('click', scrollRight)

    let leftScroll =  document.querySelector(".buttonLeft") 
    leftScroll.addEventListener('click', scrollLeft)

    // CAMBIAR la imatge del background del body amb contextMenu 
    let anyElement = body.querySelector(".cardContainer")
    anyElement.addEventListener("contextmenu", changeBackground)
}

    function scrollRight(event)
    {
        let cardToRight = document.querySelector(".cardContainer")
        cardToRight.scrollLeft += 1300;
    };

    function scrollLeft(event)
    {
        let cardToRight = document.querySelector(".cardContainer")
        cardToRight.scrollLeft -= 1300;
    };

    function changeBackground(event)
    {
        let body = document.querySelector("body")
        body.classList.toggle("bodyImageChange")
        event.preventDefault();
    }