function openNav() {
    let navBarOpen = true;
    let x = window.innerWidth;
    console.log("Screen width: " + x);
    if(window.innerWidth > "829"){
        document.getElementById("navigationMenu").style.width = "300px";
        console.log("Screen width more than 700px");
    } else{
        document.getElementById("navigationMenu").style.width = "100vw";
        console.log("Screen width less than 700px");
    }

}

function closeNav() {
    document.getElementById("navigationMenu").style.width = "0%";
}