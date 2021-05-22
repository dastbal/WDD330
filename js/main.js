const links =[
    {
        label :" Week 1 notes",
        url : "./week1/index.html"
    },
    {
        label :" Week 2 notes",
        url : "./week2/index.html"
    },
    {
        label :" Week 3 notes",
        url : "./week3/index.html"
    },
    {
        label :" Week 4 notes",
        url : "./week4/index.html"
    },
    {
        label :" Week 5 notes",
        url : "./week5/index.html"
    },
    {
        label :" Midterm",
        url : "./week6/index.html"
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

