const links =[
    {
        label :" Week 1 notes",
        url : "./week1/index.html"
    },
]


let ol = document.getElementById("weeks")
links.forEach(
    link => {
        let li = document.createElement('li')
        let a = document.createElement('a')

        a.textContent = link.label
        a.href = link.url
        a.target = '_blank'
        li.appendChild(a)
        ol.appendChild(li)

    }



)

