const app = {
    init(selectors){
        this.dinos=[]
        if(localStorage.dinos!=''){app.loadDinos()}
        if(localStorage.dinos!=''){this.max=app.dinos.length}
        else {this.max=0}
        this.list = document.querySelector(selectors.listSelector)
        document
            .querySelector(selectors.formSelector)
            .addEventListener('submit', this.addDino.bind(this))
    },

    loadDinos(){
        const JSONdinos = localStorage.getItem('dinos')
        const dinoArray = JSON.parse(JSONdinos)
        app.dinos = dinoArray
    },

    saveDinos(){
        localStorage.setItem('dinos',JSON.stringify(this.dinos))
    },

    addDino(ev){
        ev.preventDefault()
        
        const dino = {
            name: ev.target.dinoName.value,
            breed: ev.target.dinoBreed.value,
            age: ev.target.dinoAge.value,
            id: ++this.max,
            star: false
        }

        const d = this.renderListItem(dino)
        this.list.insertBefore(d,this.list.childNodes[0])
        this.dinos.push(dino)
        
            
        ev.target.dinoName.value = ''
        ev.target.dinoBreed.value = ''
        ev.target.dinoAge.value = ''
        app.saveDinos()

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
            this.textContent = 'Star'
            app.dinos[this.parentElement.querySelector('p').id-1].star=false
        } else {
            this.style.backgroundColor='#EAFAF1'
            this.textContent = 'Starred'
            app.dinos[this.parentElement.querySelector('p').id-1].star=true
        }
        app.saveDinos()
    },

    doRemove(){
        this.parentElement.remove(this.parentElement)
        delete app.dinos[(this.parentElement.querySelector('p').id)-1]
        app.saveDinos()
    },

    doUp(){
        app.dinos.splice((this.parentElement.querySelector('p').id)-1, 2, app.dinos[(this.parentElement.querySelector('p').id)], app.dinos[(this.parentElement.querySelector('p').id)-1]);
        app.saveDinos()
        const currentNode = app.max-(this.parentElement.querySelector('p').id)
        const newItem = document.createElement('div')
        newItem.innerHTML = this.parentElement.innerHTML
        const parent = app.list.childNodes[currentNode-1]
        this.parentElement.remove(this.parentElement)
        app.list.insertBefore(newItem,app.list.childNodes[currentNode-1])
          
    },

    doDown(){
        const currentNode = app.max-(this.parentElement.querySelector('p').id)
        const currentThing = app.list.childNodes[currentNode]
        const nextThing = app.list.childNodes[currentNode+1]
        app.dinos.splice(currentNode-2, 2, app.dinos[(this.parentElement.querySelector('p').id)-1], app.dinos[(this.parentElement.querySelector('p').id)-2]);
        app.saveDinos()
        const newItem = document.createElement('div')
        newItem.innerHTML = this.parentElement.innerHTML
        const parent = app.list.childNodes[currentNode-1]
        this.parentElement.remove(this.parentElement)
        app.list.insertBefore(newItem,app.list.childNodes[currentNode+1])
    },

    renderListItem(dino){
        const listItem = document.createElement('p')
        listItem.innerHTML = 
            `
                <p id="${dino.id}"><br />Breed: ${dino.breed}<br />Name: ${dino.name}<br />Age: ${dino.age}</p>
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