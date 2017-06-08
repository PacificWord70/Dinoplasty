const app = {
    init(selectors){
        this.max=0
        this.dinos=[]
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
        this.dinos[this.max-1]=dino

            
        ev.target.dinoName.value = ''
    },

    doStar(){
        console.log(this)
        this.style.backgroundColor='green'
    },

    doRemove(){

    },

    doUp(){

    },

    doDown(){

    },

    renderListItem(dino){
        const listItem = document.createElement('p')
        listItem.innerHTML = 
            `
            <p><br />${dino.name}</p>
                <button
                    type="click"
                    class="button success hollow" href="#"
                    id="star"
                >
                    Star
                </button>
                <button
                    type="click"
                    class="button success hollow" href="#"
                    id="remove"
                >
                    Remove
                </button>
                <button
                    type="click"
                    class="button success hollow" href="#"
                    id="up"
                >
                    Up
                </button>
                <button
                    type="click"
                    class="button success hollow" href="#"
                    id="down"
                >
                    Down
                </button>
            `
        
        return listItem
    }
}

app.init({
    formSelector: '#dino-form',
    listSelector: '#dino-list',
})