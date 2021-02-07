document.getElementById("searchBtn").addEventListener('click',function(){
    const inputName=document.getElementById('input-name').value;
    getInput(inputName);
});

const getInput=(inputName)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/filter.php?c=${inputName}`;
    fetch(url)
    .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(data=>{
        const foodContainDiv=document.getElementById('foodContain');
        data.meals.forEach(i=> {        
        const foodDiv=document.createElement('div');
        foodDiv.className='foodDiv';
        const foodInfo=`
        <img  src="${i.strMealThumb}">
        <h2>${i.strMeal}</h2>
        <button onclick="displayFoodDetails('${i.strMeal}','${i.strMealThumb}')">Details</button>
        `            
        foodDiv.innerHTML=foodInfo;
        foodContainDiv.appendChild(foodDiv); 
    
            })
            inputName.value=""
      .catch((error) => {
        console.log(error)
      });
    });
} 

const displayFoodDetails =(name,img)=>{
    const displayFoodInfo=document.getElementById('foodShowDetail')
    const showDiv=document.createElement('div');
    const foodInfo=`
        <img src=${img} />
        <h2>${name} </h2>
        <h3>Ingredient</h3>
        <p>${ingredient(name)}</p>    
    `
    showDiv.innerHTML=foodInfo;
    displayFoodInfo.appendChild(showDiv);   
}
const ingredient=name =>{
    const url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
    .then(res=>res.json())    
    .then(data=>{
        const displayFoodInfo=document.getElementById('foodShowDetail')
        data.meals.forEach(i => {
        const showDiv=document.createElement('div');
        const foodInfo=`
            <p>${i.strIngredient1}</p>
            <p>${i.strIngredient2}</p>
            `    
        showDiv.innerHTML=foodInfo;
        displayFoodInfo.appendChild(showDiv);
        });
        
    })
}



