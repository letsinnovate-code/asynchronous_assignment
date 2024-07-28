const button = document.querySelector("button");
const main = document.querySelector(".main");

button.addEventListener("click", display );


function display(){

    console.log("button clicked");
    const newDiv = document.createElement("div");
    newDiv.classList.add("content")
    main.appendChild(newDiv);
    newDiv.innerHTML="Loading......";
    
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
    
     
    
      