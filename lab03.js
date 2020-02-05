var checkinJs = false;
function addartist() {


    if (!checkinJs) {
        document.getElementById('addingsection').style.display = "block";
        checkinJs = true;
    } else {
        checkinJs = false;
        document.getElementById('form').reset();
        document.getElementById('addingsection').style.display = "none";
    }
}

function testing() {


    document.getElementById('addingsection').style.display == "none" ? "block" : "none";
}

function actualaddartist() {

    var artistName = "";
    var desc = "";
    var URL = "";
    var getData = document.getElementById("inputcontainer");
    artistName = getData.elements[0].value;
    desc = getData.elements[1].value;
    URL = getData.elements[2].value;
    if (URL.length == 0) {
        URL = "https://img.icons8.com/carbon-copy/100/000000/question-mark.png";
    }

    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var artistList = document.createElement("div");
    var artistDescSection = document.createElement("div");
    var img = document.createElement("img");
    var artistNameSection = document.createElement("p");
    var artistDesc = document.createElement("p");
    var del_Btn = document.createElement("div");
    var butt = document.createElement("button");

    img.setAttribute("id", "myImg")
    img.setAttribute("src", URL);
    img.setAttribute("alt", name);
    img.setAttribute("onError", "imageNotFound(this)")

    artistList.setAttribute("id", "person");
    artistDescSection.setAttribute("id", "info");
    artistNameSection.setAttribute("id", "name");
    del_Btn.setAttribute("id", "delSection");
    butt.setAttribute("id", "actualDelBtn");
    butt.setAttribute("onClick", "deletefunc(this)");

    ul.insertBefore(li, ul.firstChild);
    li.appendChild(artistList);
    artistList.appendChild(img);
    artistList.appendChild(artistDescSection);
    artistDescSection.appendChild(artistNameSection);
    artistDescSection.appendChild(artistDesc);
    artistNameSection.appendChild(document.createTextNode(artistName));
    artistDesc.appendChild(document.createTextNode(desc));
    artistList.appendChild(del_Btn);
    del_Btn.appendChild(butt);
    butt.appendChild(document.createTextNode("Delete"));
    showDiv();
}
function imageNotFound(image) {
    image.src = "https://img.icons8.com/carbon-copy/100/000000/question-mark.png";

}
function deletefunc(btn) {
    (btn.parentNode.parentNode.parentNode.parentNode).removeChild(btn.parentNode.parentNode.parentNode);
}


