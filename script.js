function getHumanChoice() {
    let response = prompt("Veuillez entrer votre (Pierre ou papier ou ciseau) : ")
    response = response === null ? '' : response.toLowerCase()
    if (response === 'pierre' || response === 'papier' || response === 'ciseau') {
        return response
    }
    console.log("Erreur de saisie")
    return getHumanChoice()
}

function getComputerChoice() {
    let choixOrdinateur = Math.floor(Math.random() * 3)
    if (choixOrdinateur === 0) {
        return 'pierre'
    } else if (choixOrdinateur === 1) {
        return 'papier'
    } else {
        return 'ciseau'
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'pierre' && computerChoice === 'papier') {
        return 'computer'
    } else if (humanChoice === 'papier' && computerChoice === 'pierre') {
        return 'human'
    } else if (humanChoice === 'pierre' && computerChoice === 'ciseau') {
        return 'human'
    } else if (humanChoice === 'ciseau' && computerChoice === 'pierre') {
        return 'computer'
    } else if (humanChoice === 'papier' && computerChoice === 'ciseau') {
        return 'computer'
    } else if (humanChoice === 'ciseau' && computerChoice === 'papier') {
        return 'human'
    } else {
        return null
    }
}

let humanScore = 0
let computerScore = 0



function playGame() {
    let result = null
    let hChoise = ''
    let cChoise = ''
    let resultPrompt = ``
    for (let i = 0; i < 5; i++) {
        hChoise = getHumanChoice()
        cChoise = getComputerChoice()
        result = playRound(hChoise, cChoise)
        console.log(result)
        resultPrompt = `Votre choix: ${hChoise}\n Le choix de l'ordinateur: ${cChoise}`
        if (result === null) {
            console.log(resultPrompt)
            console.log("Match null")
        } else if (result === 'human') {
            console.log(resultPrompt)
            console.log("Vous avez gagné!")
            humanScore++
        } else {
            console.log(resultPrompt)
            console.log("Vous avez perdu!")
            computerScore++
        }
    }
    if (humanScore > computerScore) {
        console.log(`Felicitations, vous avez gagné! \nVotre score est: ${humanScore}/5 contre ordinateur, ${computerScore}/5`)
    } else if (humanScore === computerScore) {
        console.log(`Match null!!! \nVotre score est: ${humanScore}/5 cotre ordinateur, ${computerScore}/5`)
    } else {
        console.log(`Oh oh, vous avez perdu. \nVotre score est: ${humanScore}/5 cotre ordinateur, ${computerScore}/5`)
    }
}

playGame()