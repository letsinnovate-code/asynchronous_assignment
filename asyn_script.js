const button = document.querySelector("button");
const main = document.querySelector(".main");

button.addEventListener("click", display );


function display(){

    console.log("button clicked");
    const newDiv = document.createElement("div");
    newDiv.classList.add("content")
    main.appendChild(newDiv);
    newDiv.innerHTML="Loading......";
    // created the async function fetchData  and return the data from the fetch url 
    async  function  fetchData (url) {
      try{
      const response = await  fetch(url);       

          if(!response.ok){
            throw new Error("network error");
          }
          const data =await response.json();
          return data;
        }
         catch (error){
            console.error("fetch error ", error);

        }
        
        
      }
// create the async function getData to display on screen 
      async function getData (){
        try{
            let  data = await  fetchData('https://jsonplaceholder.typicode.com/posts/');  
             
            console.log(data);
            document.querySelector(".content").textContent = data.body;
        }
        catch {
            document.querySelector(".content").textContent = "Error while fetching the data";
        }
    }



      getData();

    }
    
     
    
      