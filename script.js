const container=document.createElement('div')
container.setAttribute('class','containerid')
document.body.append(container)
container.innerHTML=`
<h1 class="heading">FIND NATIONALITY BY NAME</h1>
<input class="textinput" placeholder ="Type the name"type="text"/>
<button class="button">search</button>
`
const onsearch=document.querySelector('.button')
onsearch.addEventListener('click',(event)=>{
  const name =document.querySelector('.textinput').value;
  displaydataonscreen(name)
})
async function displaydataonscreen(name){
  try{
    let url=`https://api.nationalize.io/?name=${name}`
     const response=await fetch(url)
    const data= await response.json();
    const result = data.country[0];
    const res1=data.country[1];
    const resultcontainer=document.createElement('div')
     resultcontainer.setAttribute('class','resultid')
    document.body.append(resultcontainer)
    const divtamil=document.createElement('div') 
    divtamil.innerHTML=`<p> Nationality(Country ID):${result.country_id}</p>
    <p>Probability:${result.probability}</p>
    <p>Nationality(country ID):${res1.country_id}</p>
    <p>Nationality:${res1.probability}</p>`      
    resultcontainer.append(divtamil)
  }
  catch(error){
    console.log(error.message);
  }
}

