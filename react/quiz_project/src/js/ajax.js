// function load() {
//     let req = new XMLHttpRequest();
//     req.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             console.log(this.responseText);
//         }
//     };
//     req.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
//     req.send();
// }

// load();

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhttp.send();
}
loadDoc();