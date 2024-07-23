const button = document.querySelector("button");
const main = document.querySelector(".main");

button.addEventListener("click", display );


function display(){

    console.log("button clicked");
    const newDiv = document.createElement("div");
    newDiv.classList.add("content")
    main.appendChild(newDiv);
    newDiv.innerHTML="Callback executed after 5 seconds";
    
    
    const promise = new Promise((res, rej)=>{
      fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response=>response.json())
      .then(result=>document.querySelector(".content").textContent =`${result.title}`)
      .catch(err=>document.querySelector(".content").textContent ="error while fetching the data")
    })
    
    setTimeout(() => {
      
     

    }, 5000);
    
}