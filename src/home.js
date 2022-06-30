
function grid(){
    document.getElementById("graph").style.display = "block";
    document.getElementById("line").style.display = "none";
};

function tile(){
    document.getElementById("graph").style.display = "none";
    document.getElementById("line").style.display = "block"; 
};


function closeModal(){
    document.getElementById("profile").style.display = "none";
}
function closeLastModal(){
    document.getElementById("lastModal").style.display = "none";
}

function openModal(){
    document.getElementById("profile").style.display = "flex"
}


function showManifest(){
    document.getElementById("manifest").style.display = "flex";
    document.getElementById("probody").style.display = "none";
}

function submit(){  
    document.getElementById("green-btn").style.display = "none";   
    document.getElementById("sub").style.display = "flex"; 
    document.getElementById("green-a").style.display = "block";  
    let elements = document.querySelectorAll("v-flex-grey");
    for (let e of elements){
        e.classList.add("v-flex-grey")
    } 
    
}


function voted(){
    let element = document.querySelectorAll("#v-btn");
    for (let e of element ){
        e.classList.add("v-btn-voted");
        e.innerText = "Voted";
    }
}

function vote(){
    document.getElementById("lastModal").style.display = "flex";
}

function finalVote(){ 
    document.getElementById("nots").style.display = "flex"; 
    document.getElementById("lastModal").style.display = "none"; 
    setTimeout(location.replace("lastpage.html"), 9000);
}


