const dino = {
    init(formSelector){
        document
            .querySelector(formSelector)
            .addEventListener('submit', this.addDino)
    },

    addDino(ev){
        ev.preventDefault()
        console.log('good')
    },
}

dino.init('#dino-form')