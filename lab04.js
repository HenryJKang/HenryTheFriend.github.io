


//--------- Storages
var checkinJs = false;
myStorage = window.localStorage;
//---------



loadLocalStorage();




//Artist Input Fields
function addartist() {


    if (!checkinJs) {
        document.getElementById('addingsection').style.display = "block";
        checkinJs = true;
    } else {
        checkinJs = false;
        document.getElementById('inputcontainer').reset();
        document.getElementById('addingsection').style.display = "none";
    }
}


//
function actualaddartist() {
    var count = 0;
    var timestamp = new Date().valueOf();
    count++;
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
    

    var dataset = [artistName, desc, URL];
    myStorage.setItem(timestamp, JSON.stringify(dataset));

    addartist();
    location.reload();
}
function loadLocalStorage(){
    var keys = Object.keys(localStorage);
    var i = keys.length;

    while(i--){
        let data = JSON.parse(localStorage.getItem(keys[i]));
        actualaddartistLS(keys[i], data[0],data[1],data[2]);

        
    }
}

function actualaddartistLS(count, artistName, artistDesc, URL) {
    
     artistName = artistName;
     desc = artistDesc;
     URL = URL;

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

    console.log(ul);
    console.log(li);

    img.setAttribute("id", "myImg")
    img.setAttribute("src", URL);
    img.setAttribute("alt", name);
    img.setAttribute("onError", "imageNotFound(this)")

    artistList.setAttribute("id", "person");
    li.setAttribute("id", count);
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
    


}


function imageNotFound(image) {
    image.src = "https://img.icons8.com/carbon-copy/100/000000/question-mark.png";

}


function deletefunc(btn) {
    (btn.parentNode.parentNode.parentNode.parentNode).removeChild(btn.parentNode.parentNode.parentNode);
    myStorage.removeItem(btn.parentNode.parentNode.parentNode.id);
    
}


function searching(){

    //reset();
    var x = document.getElementById('searchbar');
    getData = x.value.toString().toLowerCase().trim();
    var keys = Object.keys(localStorage);

    

    var i;

    for (i =0; i<keys.length; i++){
        let data = JSON.parse(localStorage.getItem(keys[i]));
        let artistName = data[0].toString().toLowerCase();
        let displayList = document.getElementById(keys[i]);
        if(artistName.search(getData) != -1){

            displayList.style.display = 'block';
        }else{
            displayList.style.display = 'none';
        }
    }

    x.value ='';

}


function reset(){
    var i;

    var keys = Object.keys(localStorage);

    for (i=0; i<keys.length; i++){
        let displayList = document.getElementById(keys[i]);

        displayList.style.display = 'block';
    }
}







// --------------- Completed

