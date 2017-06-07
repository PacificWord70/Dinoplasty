const app = {
    init(selectors){
        this.max=0
        this.list = document.querySelector(selectors.listSelector)
        document
            .querySelector(selectors.formSelector)
            .addEventListener('submit', this.addDino.bind(this))
    },

    addDino(ev){
        ev.preventDefault()
        
        const dino = {
            name: ev.target.dinoName.value,
            id: ++this.max
        }

        this.list.appendChild(this.renderListItem(dino))

        ev.target.dinoName.value = ''
    },

    renderListItem(dino){
        const listItem = document.createElement('li')
        listItem.textContent = dino.name
        return listItem
    }
}

app.init({
    formSelector: '#dino-form',
    listSelector: '#dino-list',
})