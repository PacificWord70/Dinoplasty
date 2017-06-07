const dino = {
    init(formSelector){
        document
            .querySelector(formSelector)
            .addEventListener('submit', this.addDino)
    },

    addDino(ev){
        ev.preventDefault()
        const dinoName = ev.target.dinoName.value
        console.log(dinoName)
    },
}

dino.init('#dino-form')