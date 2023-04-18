let image1 = document.getElementById('image1')
let image2 = document.getElementById('image2')
let image3 = document.getElementById('image3')
let image4 = document.getElementById('image4')

let slides = [image1, image2, image3, image4]

var index = 0;

function prev () {

  if(index > 0){

  (slides[index - 1]).style.display = 'block'

  change ()
  index--
  }
   
  else{
    change()
    index = 3;

    (slides[index]).style.display = 'block'
  } 

  console.log(index)
}


function next () {

  if(index < 3){

  (slides[index + 1]).style.display = 'block'

  change (slides)
  index++
  } 
  
  else{
    change()
    index = 0;

    (slides[index]).style.display = 'block'
  } 
  console.log(index)
}

function change () {
  (slides[index]).style.display = 'none'
}






