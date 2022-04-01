// window.alert('j') // за кулисами alert
// window.prompt('What is your name?')
// window.confirm('What is your name?')

const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0] // устарел
// const heading2 = document.getElementsByClassName('h2-class')[0] // устарел
// const heading2 = document.querySelector('.h2-class')
// const heading2 = document.querySelector('#sub-hello')
const heading2 = document.querySelector('h2')
// const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
const heading3 = h2List[h2List.length - 1]
// console.log(heading3)


setTimeout (() => {
    addStylesTo(heading, 'JavaScript')
}, 1500)

const link = heading3.querySelector('a')

link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')

    window.location = url
})
setTimeout (() => {
    addStylesTo(link, 'Практикуйся', 'blue')
}, 3000)

setTimeout (() => {
    addStylesTo(heading2, 'И всё получится!', 'yellow', '2rem')
}, 4500)



function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2em'
    node.style.display = 'block'
    node.style.width = '100%'
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = 'black'
        heading.style.backgroundColor = '#fff'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = 'black'
    }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'yellow') {
        heading2.style.color = 'black'
        heading2.style.backgroundColor = '#fff'
    } else {
        heading2.style.color = 'yellow'
        heading2.style.backgroundColor = 'black'
    }
})


