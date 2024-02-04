const btn = document.querySelector('#btn')
const search = document.querySelector('#search')
const container = document.querySelector('#container')

const get_movie = async (id) =>{
    try{
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=ab0c77a&s=${id}`)
        const data = await response.json()
            
        container.innerHTML = ''

        data.Search.forEach(element => {
            const card = document.createElement('div')
            const img = document.createElement('img')
            img.src = element.Poster

            card.appendChild(img)
            container.appendChild(card)
        }); 

    }catch(err){
        console.log(err+ ' '+'Ocorreu algum erro.')
    }
}

btn.addEventListener('click',()=>{
    const name = search.value
    if (name===''){
        alert('Digite um nome de um filme.')
    } else {
        get_movie(name)
    }
    
})
document.addEventListener('keyup',(event)=>{
    const name = search.value
    if (event.keyCode === 13){
        if (name===''){
            alert('Digite um nome de um filme.')
        } else {
            get_movie(name)
        }
    }
})