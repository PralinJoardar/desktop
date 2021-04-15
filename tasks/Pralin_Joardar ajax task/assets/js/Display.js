function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let dataObj = this.responseText;
            let data = JSON.parse(dataObj);
            console.log(data);
            let mydata = `<tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Website</th>
                      </tr>`;
            for (i in data) {
                mydata += `<tr>
                                <td>${data[i].id}</td>
                                <td>${data[i].name}</td>
                                <td>${data[i].username}</td>
                                <td>${data[i].email}</td>
                                <td>${data[i].phone}</td>
                                <td>${data[i].website}</td>
                            </tr>`;
            }

            document.getElementById("main-table").innerHTML = mydata;
        }
    };

    xhttp.send();
}