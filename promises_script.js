const button = document.querySelector("button");
const main = document.querySelector(".main");

button.addEventListener("click", display );


function display(){

    console.log("button clicked");
    const newDiv = document.createElement("div");
    newDiv.classList.add("content")
    main.appendChild(newDiv);
    newDiv.innerHTML="Loading......";
    
    function fetchData(url, timeout = 5000){
      return new Promise((response,reject)=>{
        // created a time out promise 
        const timer = new Promise ((_,reject)=>{
          setTimeout(()=>{
            reject(new error("Timed out maximum time given to fetch the data is 5 seconds")),timeout
          })

        })
        // Race the fetch promise against the timeout promise 
        Promise.race([
          fetch(url)
          .then(response=>{
  
            if(!response.ok){
              throw new Error("network response was not ok.");
            }
            return response.json();
          })
        ])
       
        .then(data=>response(data))
        .catch(error=>reject(error));
      });

    }
    // calling the fetchData function and put the value into the screen using then and catch  
    fetchData('https://jsonplaceholder.typicode.com/posts/1')    
    .then(result=>document.querySelector(".content").textContent =`${result.body}`)
    .catch(err=>document.querySelector(".content").textContent ="error while fetching the data")
    
    
    
}