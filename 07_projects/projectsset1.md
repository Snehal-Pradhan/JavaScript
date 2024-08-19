# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code


## project 1 Solution

```javascript
console.log("somu");
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach( (button)=>{
  console.log(button.target);
  console.log(button);
  button.addEventListener('click',function(e){
    //console.log(e);
    //console.log(e.target);
    body.style.backgroundColor = e.target.id;
  })
})
```

## project 2 Solution
```javascript
const form = document.querySelector('form');
//this usecase will be empty
// const height =  parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
  e.preventDefault();
  const height =  parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results');
  if(height === "" || height < 0 || isNaN(height)){
    result.innerHTML=`Please give a Valid height ${height}`;
  }else if(weight === "" || weight < 0 || isNaN(weight)){
    result.innerHTML=`Please give a Valid weight ${weight}`;
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2);
      // show results
      result.innerHTML=`<span>${bmi}</span><br>`
        // <18.6 <24.9 >24.9
        if(bmi<18.6){
          //UnderWeight 
          const element = document.createElement('span');
          element.innerText="UnderWeight";
          element.style.background='yellow';
          element.style.borderRadius='10px';
          element.style.fontSize='20px';
          element.style.color="black";
          element.style.padding='10px';
          result.appendChild(element);
        }
        else if(bmi > 24.6){
          //OverWeight
          const element = document.createElement('span');
          element.innerText="OverWeight";
          element.style.background='orange';
          element.style.borderRadius='10px';
          element.style.fontSize='20px';
          element.style.color="black";
          element.style.padding='10px';
          result.appendChild(element);
        }
        else{
          //Normal Range
          const element = document.createElement('span');
          element.innerText="Normal Range";
          element.style.background='limegreen';
          element.style.borderRadius='10px';
          element.style.fontSize='20px';
          element.style.padding='10px';
          result.appendChild(element);
        }
  }

})

```