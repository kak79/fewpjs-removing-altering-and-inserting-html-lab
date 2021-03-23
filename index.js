let element1 = document.createElement('div') 

document.body.appendChild(element1) 

let ul = document.createElement('ul')

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}

element1.appendChild(ul) 

let p = document.createElement('p')

p.id = 'greeting'

element1.appendChild(p)

let element2 = document.querySelector("p#greeting");
element2.innerHTML = 'Hello, DOM!' 

let div = document.createElement('div')

div.id = 'header'

element1.appendChild(div)

let header = document.getElementById('header');
header.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>"; 

header.style.bold

let main = document.getElementById('main')
main.remove()

let newHeader = document.createElement('h1')

newHeader.id = 'victory'

newHeader.innerHTML = "<h1> Kim is the champion </h1>"

