document.getElementById("searchBtn").addEventListener('click',function(){
    
    const inputName=document.getElementById('input-name').value;
    
      getInput(inputName);
        
});

const getInput=(inputName)=>{
        const url =`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputName}`;

    // const url=`https://www.themealdb.com/api/json/v1/1/filter.php?c=${inputName}`;
    fetch(url)
   .then(res=>res.json())
   .then(data=>displayFood(data.meals))
  //  .catch(error=>displayError('please insert the food  category and try'))
 
}
            
const displayFood =data=>{
  const inputName=document.getElementById('input-name').value='';
    const foodContainDiv=document.getElementById('foodContain');
    foodContainDiv.innerHTML='';
    data.forEach(i=> {        
    const foodDiv=document.createElement('div');
    
    foodDiv.className='foodDiv';
    // foodDiv.id='detailUrl';
    
 
    const foodInfo=`
    <img  src="${i.strMealThumb}">
    <h2>${i.strMeal}</h2>
    <button onclick="displayFoodDetails('${i.strMeal}','${i.strMealThumb}')">Details</button>
    
    `            
    // detailUrl('foodDiv');
    foodDiv.innerHTML=foodInfo;
    foodContainDiv.appendChild(foodDiv); 

    });  
  }

const displayFoodDetails =(name,img)=>{
    const displayFoodInfo=document.getElementById('foodShowDetail')
    displayFoodInfo.innerHTML='';
    const showDiv=document.createElement('div');
    const foodInfo=`
        <img src=${img} />
        <h2>${name} </h2>
        <h3>Ingredient</h3>
        <p>${ingredient(name)} </p>   
    `
    showDiv.innerHTML=foodInfo;
    displayFoodInfo.appendChild(showDiv);   
}
const ingredient=name =>{
    const url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
   .then(res=>res.json())    
  .then(data=> strIngredient(data.meals))
  .catch(error=>displayError('something wrong please try again later!'))
}

const strIngredient =(data) => {
  const displayFoodInfo=document.getElementById('foodShowDetail')
        data.forEach(i => {
        const showDiv=document.createElement('div');
        const foodInfo=`
            <p>${i.strIngredient1}</p>
            <p>${i.strIngredient2}</p>
            `    
        showDiv.innerHTML=foodInfo;
        displayFoodInfo.appendChild(showDiv);
        
        });
      }
      // .addEventListener('click',function(){
      //   displayFoodDetails('${i.strMeal}','${i.strMealThumb}');
      // });
      const detailUrl = id =>{
        const getId= document.getElementById(id).addEventListener('click',function(){
          console.log('click add');
        })
        // getId.addEventListener('click',function(){
        //   displayFoodDetails('${i.strMeal}','${i.strMealThumb}');
        // });
        // // console.log(getId);
      }
      const displayError= error =>{
        const displayError=document.getElementById('displayError');
        displayError.innerHTML=error;
        
      }
