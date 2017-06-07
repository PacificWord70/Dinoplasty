const app = {
    init(formSelector){
        this.max=0
        document
            .querySelector(formSelector)
            .addEventListener('submit', this.addDino.bind(this))
    },

    addDino(ev){
        ev.preventDefault()
        
        const dino = {
            name: ev.target.dinoName.value,
            id: ++this.max
        }

        console.log(dino.name+":"+dino.id)
        ev.target.dinoName.value = ''
    },
}

app.init('#dino-form')