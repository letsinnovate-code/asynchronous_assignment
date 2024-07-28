const button = document.querySelector("button");
const main = document.querySelector(".main");

button.addEventListener("click", display );


function display(){

    console.log("button clicked");
    const newDiv = document.createElement("div");
    newDiv.classList.add("content")
    main.appendChild(newDiv);
    newDiv.innerHTML="Loading......";
    
    function fetchData(url){
      return new Promise((response,reject)=>{
        fetch(url)
        .then(response=>{

          if(!response.ok){
            throw new Error("network response was not ok.");
          }
          return response.json();
        })
        .then(data=>response(data))
        .catch(error=>reject(error));
      })

    }
    
    fetchData('https://jsonplaceholder.typicode.com/posts/1')    
    .then(result=>document.querySelector(".content").textContent =`${result.title}`)
    .catch(err=>document.querySelector(".content").textContent ="error while fetching the data")
    
    
    
}