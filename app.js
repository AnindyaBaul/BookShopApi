var booKStore = document.getElementById("booKStore");
var mother=document.getElementById("mother")
var apiLink = 'https://openlibrary.org/search.json?author=${name}'
var bookApi = "`https://openlibrary.org/search.json?title=${book}"
var input = document.getElementById("valueInput")

function btn() {

    var book = input.value
    fetch(`https://openlibrary.org/search.json?title=${book}`)
        .then(res => res.json())
        .then(data => loadData(data))

    // console.log(data)
}
function loadData(data) {
    var docs=data.docs
    console.log(docs)
    for(const doc of docs) {
        var isbn = doc.isbn[1]
        var title = doc.title
        console.log(title)
        var imgUrl=`https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg?default=false`
        var http = new XMLHttpRequest();
        http.open('HEAD', imgUrl, false);
        http.send();
        if (http.status == 404 || http.status == 500) {
            var newDiv=document.createElement("div")
            newDiv.classList=`col`
            newDiv.innerHTML=`<img src="./New folder/new-book-coming-soon.webp"> <p>${title}</P>`
            mother.appendChild(newDiv)
        }
            //  do something
        else{
            var newDiv=document.createElement("div")
            newDiv.classList=`col`
            newDiv.innerHTML=`<img src="https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg?default=false"> <p>${title}</P>`
            mother.appendChild(newDiv)
        }
           
        
        // console.log(`https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg?default=false`)
    }
    // var chobi=``
    // console.log(chobi)
    //     booKStore.innerHTML=`<img src="${chobi}">`




}