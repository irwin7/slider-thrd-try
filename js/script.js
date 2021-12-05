let elSliderInner = document.querySelector(".slider-inner");
let count = 1;
let elSliderItems = document.querySelectorAll(".slider-item");

function change(direction){
  // elSliderItems[count].classList.remove("active")
  
  if(direction=="left"){
    if(count <= 0){
      count = 3
    }
    count-=1
  }
  else{
    if(count >= 3){
      count = -1
    }
    count+=1
  }
  elSliderItems.forEach((item)=>{
    item.className = `slider-item item-${count}`
  });
  elSliderItems[count].classList.add("active")
  console.log(count);
}