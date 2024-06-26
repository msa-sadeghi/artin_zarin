function myFunction(){
    var item = document.getElementById("mynav");
    if (item.className === "nav"){
        item.className += " responsive";
    }
    else{
        item.className = "nav"
    }
}