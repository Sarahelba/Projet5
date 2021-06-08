let app = document.getElementById("app");
let api = "http://localhost:3000/api/teddies";
let row = document.createElement("div");
row.classList.add("row");
app.appendChild(row);

fetch(api).then((reponse)=>{
  reponse.json().then((data) => {
   
    data.forEach((element) => {
      let content = `<div class="col-md-4 mb-3"><div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${element.imageUrl}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">${element.description}</p>
        <a href="produit.html?id=${element._id}" class="btn btn-primary">Voir les détails</a>
      </div>
    </div></div>`;
   row.innerHTML +=content;
      console.log(element); //ligne de la console
      //let a = document.createElement("a");
      //let img = document.createElement("img");
     // img.src = element.imageUrl;

    
     // a.innerHTML = element.name;
     // a.href = "produit.html";
     // let col = document.createElement("div");
      //col.classList.add("col-md-3");
     // col.appendChild(a);
     // col.appendChild(img);
     // row.appendChild(col);

     // let p = document.createElement("p");
    //  p.innerHTML = element.description;
    
    //  col.appendChild(p);
 
      
  


    });
  
  });
});

