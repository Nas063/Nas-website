window.onload = function() {
    // code to be executed  when the document finishes loading
    const year = new Date().getFullYear();
const owner = "Nas construction company";
document.getElementById("copyright").innerHTML = 
`&copy; ${year} ${owner}. All rights reserved.`;
            
    

document.getElementById("showpicbutton").addEventListener("click", function() {
  document.getElementsByClassName("sideeq")[0].classList.add("make-it-visible");
    document.getElementsByClassName("sideeq")[1].classList.add("make-it-visible");
    document.getElementsByClassName("sideeq")[2].classList.add("make-it-visible");

});



                   
console.log("document loaded!");
};