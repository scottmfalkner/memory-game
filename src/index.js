document.addEventListener('DOMContentLoaded', () =>{
    //card options

    const cardArray = [
        {
            name: 'garry',
            img: 'src/images/dragon1.png'
        },
        {
            name: 'davo',
            img: 'src/images/dragon2.png'
        },
        {
            name: 'mick',
            img: 'src/images/dragon3.png'
        },
        {
            name: 'july',
            img: 'src/images/dragon4.png'
        },
        {
            name: 'lucy',
            img: 'src/images/dragon5.png'
        },
        {
            name: 'meg',
            img: 'src/images/dragon6.png'
        },
        
        {
            name: 'garry',
            img: 'src/images/dragon1.png'
        },
        {
            name: 'davo',
            img: 'src/images/dragon2.png'
        },
        {
            name: 'mick',
            img: 'src/images/dragon3.png'
        },
        {
            name: 'july',
            img: 'src/images/dragon4.png'
        },
        {
            name: 'lucy',
            img: 'src/images/dragon5.png'
        },
        {
            name: 'meg',
            img: 'src/images/dragon6.png'
        },
        
    ]



    let randomNumber

    cardArray.sort(() => 0.5 - Math.random())
    console.log(cardArray)


    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon = []

    function createBoard(){
        for (let i = 0; i < cardArray.length; i++){
            const card = document.createElement('img')
            card.setAttribute('src', 'src/images/pattern.png')
            card.setAttribute('data-id', i)
            card.setAttribute('class', 'imagesize')
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function flipCard(){
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenIds.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]

        if (optionOneId === optionTwoId){
            alert('you have clicked the same image')
            cards[optionOneId].setAttribute ('src', 'src/images/pattern.png')
            cards[optionTwoId].setAttribute ('src', 'src/images/pattern.png')
        } else if (cardsChosen[0] === cardsChosen[1]){
            alert('you have found a match')
            cards[optionOneId].setAttribute ('src', 'src/images/correct.png')
            cards[optionTwoId].setAttribute ('src', 'src/images/correct.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute ('src', 'src/images/pattern.png')
            cards[optionTwoId].setAttribute ('src', 'src/images/pattern.png')
            alert('sorry, try again')

        }
        cardsChosen = []
        cardsChosenIds = []
        resultDisplay.textContent = cardsWon.length
            if (cardsWon.length === cardArray.length / 2){
                resultDisplay.textContent = 'Congrats you have won'
            }

        console.log(cardsChosen);
        console.log(cardsWon);
    }
    createBoard()
})