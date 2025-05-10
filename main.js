
fetch('data.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error('فشل بجلب الملف');
    }
    return response.json();
  })
  .then((data) => {
  let extention = document.querySelector('.extention');
  data.forEach((data) => {
    extention.innerHTML +=`
    <div class="card">
          <div class="info">
            <div class="logo">
              <img src="${data.logo}" alt="">
            </div>
            <div class="content">
              <h2>${data.name}</h2>
              <p>
${data.description}
              </p>
            </div>
          </div>
          <div class="btns">
            <button>Remove</button>
          <div class="active_div">
            <div class="active_circle"></div>
          </div>
          </div>
        </div>
    
    `
  })
    
let active_div = document.querySelectorAll('.active_div');
let card_ex = document.querySelectorAll('.extention .card')
let button_ex = document.querySelectorAll('.extention .card .btns button')
for(let i = 0 ; i < active_div.length ; i++){
  if(data[i].isActive === true){
    active_div[i].classList.toggle('active')
  }
  active_div[i].addEventListener('click',function(){
    active_div[i].classList.toggle('active');
    if(active_div[i].classList.contains('active')){
    data[i].isActive = true;
    }else{
    data[i].isActive = false;

    }

  })
}


for(let i = 0 ; i < card_ex.length ; i++){
    button_ex[i].addEventListener('click',function(){
        card_ex[i].remove()
    })
}
let all = document.querySelector('.all');
let active_el = document.querySelector('.active_el');
let isActive = document.querySelector('.inactive');
all.addEventListener('click',function(){
        all.classList.add('active');
    active_el.classList.remove('active');
    isActive.classList.remove('active')
    for(let i = 0 ; i < data.length ; i++){
    card_ex[i].style.display ='flex'
    }
})
active_el.addEventListener('click',function(){
    all.classList.remove('active');
    active_el.classList.add('active');
    isActive.classList.remove('active')
    for(let i = 0 ; i < data.length ; i++){
        if(data[i].isActive === true){
         card_ex[i].style.display = ''
        }else{
                     card_ex[i].style.display = 'none'

        }
    }
})
isActive.addEventListener('click',function(){
     all.classList.remove('active');
    active_el.classList.remove('active');
    isActive.classList.add('active')
    for(let i = 0 ; i < data.length ; i++){
        if(data[i].isActive === false){
         card_ex[i].style.display = ''
        }else{
                     card_ex[i].style.display = 'none'

        }
    }
})

  })
  .catch((error) => {
    console.error('صار في خطأ:', error);
  });
