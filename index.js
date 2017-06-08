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
            id: ++this.max,
            star: false
        }

        const d = this.renderListItem(dino)
        this.list.insertBefore(d,this.list.childNodes[0])
        this.dinos.push(dino)
        
            
        ev.target.dinoName.value = ''

        document.querySelector('#star').style.backgroundColor='white'

        document.querySelector('#star')
            .addEventListener('click', app.doStar)
        document.querySelector('#remove')
            .addEventListener('click', app.doRemove)
        document.querySelector('#up')
            .addEventListener('click', app.doUp)
        document.querySelector('#down')
            .addEventListener('click', app.doDown)
    },

    doStar(ev){
        if(this.style.backgroundColor!='white')
        {
            this.style.backgroundColor='white'
            app.dinos[this.parentElement.querySelector('p').id-1].star=false
        } else {
            this.style.backgroundColor='#EAFAF1'
            app.dinos[this.parentElement.querySelector('p').id-1].star=true
        }
    },

    doRemove(){
        this.parentElement.remove(this.parentElement)
        console.log((this.parentElement.querySelector('p').id)-1)
        delete app.dinos[(this.parentElement.querySelector('p').id)-1]
    },

    doUp(){
        console.log(this.parentElement)
    },

    doDown(){

    },

    renderListItem(dino){
        const listItem = document.createElement('p')
        listItem.innerHTML = 
            `
                <p id="${dino.id}"><br />${dino.name}</p>
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