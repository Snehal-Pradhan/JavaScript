# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code


## project 1

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