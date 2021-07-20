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
        url : "./midterm/index.html"
    },
    {
        label : " Week 7 notes",
        url : "./week7/index.html"
    },
    {
        label : " Week 8 notes",
        url : "./week8/index.html"
    },
    {
        label : " Week 9 notes",
        url : "./week9/index.html"
    },
    {
        label : " Week 10 notes",
        url : "./week10/index.html"
    },
    {
        label : " Search Healthy Recipes App ",
        url : "./HelthyRecipes/index.html"
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

