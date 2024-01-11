
const loadApp = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
 

  

  let show = false;

  const appsContainer = document.getElementById('app-container');

  const showAll = document.getElementById('show-all');

  const showLess = document.getElementById('show-less');

  

  console.log(show);

  let array = [];

  
  if (show === false && data.data.tools.length > 5) {

    array = data.data.tools.slice(0, 5);

    showAll.classList.remove('d-none');

    console.log(array);

    displayApps(array);


  } 
  else if (show == true) {
    

    displayApps(data.data.tools);

    showLess.classList.add('d-none');



  }


 

  showAll.addEventListener('click', function (array) {
 
 
   

  show = true;

    array = data.data.tools;
    
    displayApps(array)
    console.log(data.data.tools);
    console.log(array);

    showAll.classList.add('d-none');
    showLess.classList.remove('d-none');




  })


  showLess.addEventListener('click', function (array) {

   appsContainer.innerHTML= '';


      show = false;
  
      array = data.data.tools;
      
  
      console.log(data.data.tools);
      console.log(array);
  
    array = data.data.tools.slice(0, 5);
    
    displayApps(array);


    
      showAll.classList.remove('d-none');
      showLess.classList.add('d-none');
  
  
    }) 

  

};



const displayApps = (apps) => {




  //  display only 20 phones



  // document.getElementById('btn-show-all').addEventListener('click', function () {

  // // else {

  // //   showAll.classList.add('d-none');

  // // }


  // })








  apps.map(app => {


    // sortDate(app);



    //  console.log(app);

    const appsContainer = document.getElementById('app-container');

    // const sortDate = document.getElementById('sort-date');


    const appDiv = document.createElement('div');

    appDiv.classList.add('col');




    appDiv.innerHTML = `




        <div class="col">
        <div class="card h-100">
          <img src="${app.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Feature</h5>
            <p class="card-text">
            1.${app.features[0] ? app.features[0] : 'no data found'} <br>
            2.${app.features[1] ? app.features[1] : 'no data found'} <br>
            3.${app.features[2] ? app.features[2] : 'no data found'} <br>    
            </p>

            <hr>
          <div class="d-flex justify-content-between">
          <h6>${app.name}</h6>

          <button onclick="loadAppDetails(${app.id})" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#appModal">

          <i class="fa-solid fa-arrow-right"></i>
        </button>        
          </div>

          <div class="d-flex gap-1">

          <div>

          <i class="fa-regular fa-calendar-days"></i>
          </div>

          <div>

          ${app.published_in}
          </div>

        

        
          
          </div>
          </div>
        </div>
      </div>
        `;

    appsContainer.appendChild(appDiv);






  });




}



const loadAppDetails = idApp => {

  let url;

  if (idApp < 10) {

    url = `https://openapi.programming-hero.com/api/ai/tool/0${idApp}`;

  }

  else {

    url = `https://openapi.programming-hero.com/api/ai/tool/${idApp}`;

  }



  console.log(url);

  fetch(url)
    .then(res => res.json())
    .then(data => displayAppDetails(data.data))







}

const displayAppDetails = app => {



  console.log(app);

  document.getElementById('title').innerText = app.description;

  const threeDiv = document.getElementById('threeDiv');

  threeDiv.innerHTML = `
  
  <div class=" bg-white text-success size rounded-3 fw-bold">${app.pricing[0].price} ${app.pricing[0].plan}</div>
<div class=" bg-white text-info size rounded-3 fw-bold">${app.pricing[1].price} ${app.pricing[1].plan}</div>
<div class="bg-white text-danger size rounded-3 fw-bold">${app.pricing[2].price} ${app.pricing[2].plan}</div>


  `


  const featureIntegration = document.getElementById('featureIntegration');

  featureIntegration.innerHTML = `

  <div>
                                            <h4 class="text-start">Features</h4>

                                            <ul class="text-start">
                                              
                                               <li>${app.features[1].feature_name ? app.features[1].feature_name : 'no data found'}</li>
                                               
                                            
                                               <li> ${app.features[2].feature_name ? app.features[2].feature_name : 'no data found'}</li>
                                               <li>${app.features[3].feature_name ? app.features[3].feature_name : 'no data found'}</li>
                                            </ul>

                                        </div>
                                        <div >
                                            <h4 class="text-start">Integrations</h4>

                                            <ul>
                                               <li>${app.integrations[0]}</li>
                                               
                                            
                                               <li> ${app.integrations[1] ? app.integrations[1] : 'no data found'}</li>
                                               <li> ${app.integrations[2] ? app.integrations[2] : 'no data found'}</li>
                                            </ul>

                                        </div>

                                    
  
  
  
  `



  const secondDiv = document.getElementById('secondDiv');

  secondDiv.innerHTML = `
  
  
  
  <div class="mt-3">
  <img class="rounded-4" src="${app.image_link[0]}" 
  style="max-width: 100%; max-height: 100%;">

</div>

<div ">

  <h3 class="my-3 ">${app.input_output_examples[0].input}</h3>

  <p class="my-3">${app.input_output_examples[0].output}</p>


</div>
  
  `




}




//  sortDate(); 
loadApp('');

