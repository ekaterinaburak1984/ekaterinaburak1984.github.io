let burger = document.querySelector('.burger-menu');
let nav = document.querySelector('.main-nav');
function openBurger() {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
}
burger.addEventListener('click',openBurger);
$('.visitors-carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
   prevArrow: '<button class="slick-prev">&#8249;</button>',
   nextArrow: '<button class="slick-next">&#8250;</button>',
   slidesToShow: 5,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.horses-carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
  
    arrows: true,
   prevArrow: '<button class="slick-prev2">&#8249;</button>',
   nextArrow: '<button class="slick-next2">&#8250;</button>',
   slidesToShow: 3,
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
  $('.about-carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
  
    arrows: true,
   prevArrow: '<button class="slick-prev3">&#8249;</button>',
   nextArrow: '<button class="slick-next3">&#8250;</button>',
   slidesToShow: 2,
   responsive: [
    
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

  // проверка формы

  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let valid=true;
    let name=document.getElementById("name");
    let nameerror=document.getElementById("nameerror");
    let namepattern=/^[А-Яа-яЁёA-Za-z\s]+$/;
    if (!namepattern.test(name.value.trim())){
      nameerror.textContent='вводите буквы';
      nameerror.classList.add('active');
      name.classList.add('error');
      name.classList.remove('valid');
      valid=false;
    }else{
      nameerror.textContent='';
      nameerror.classList.remove('active');
      name.classList.remove('error');
      name.classList.add('valid');
    }

    let telefone=document.getElementById("telefone");
    let telefoneerror=document.getElementById("telefoneerror");
    let telefonepattern=/^[0-9\s]+$/;
    if (!telefonepattern.test(telefone.value.trim())){
      telefoneerror.textContent='вводите цифры';
      telefoneerror.classList.add('active');
      telefone.classList.add('error');
      telefone.classList.remove('valid');
      valid=false;
    }else{
      telefoneerror.textContent='';
      telefoneerror.classList.remove('active');
      telefone.classList.remove('error');
      telefone.classList.add('valid');
    }

    let agreement=document.getElementById("agreement");
    let agreementerror=document.getElementById("agreementerror");
    if (!agreement.checked){
      agreementerror.textContent='подтвердите согласие';
      agreementerror.classList.add('active');
      agreement.classList.add('error');
      agreement.classList.remove('valid');
      valid=false;
    }else{
      agreementerror.textContent='';
      agreementerror.classList.remove('active');
      agreement.classList.remove('error');
      agreement.classList.add('valid');
    }
    if (valid){
      alert('форма успешно отправлена')
    }
  });