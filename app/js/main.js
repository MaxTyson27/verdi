

$(function () {

  lightbox.option({
    albumLabel: false,
    positionFromTop: 200,
  })


  $('.burger').on('click', function () {
    $(this).toggleClass('burger--active');
    $('.header__top-contacts').toggleClass('header__top-contacts--active');
    $('.icon-phone').toggleClass('icon-phone-black');
    $('.logo').toggleClass('logo-black');
  });


  $('.slider__big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider__thumb',
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
        }
      },
    ]
  });
  $('.slider__thumb').slick({
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider__big',
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="91" height="92" viewBox="0 0 91 92" fill="none" xmlns="http://www.w3.org/2000/svg">< g filter="url(#filter0_d)" ><circle r="21.5" transform="matrix(-1 0 0 1 44.5 42.3486)" fill="white" /></><path d="M46.2589 48.4687L51.8308 42.8969C47.0007 42.8969 35.7096 42.8969 35.7096 42.8969C35.2271 42.8969 34.8354 42.5053 34.8354 42.0228C34.8354 41.5402 35.2271 41.1486 35.7096 41.1486C35.7096 41.1486 46.9997 41.1486 51.8308 41.1486L46.2589 35.5768C45.9177 35.2356 45.9177 34.6822 46.2589 34.3405C46.6001 33.9989 47.1535 33.9994 47.4951 34.3405L54.559 41.4044C54.5995 41.4448 54.6359 41.4898 54.6679 41.5377C54.6824 41.5592 54.6924 41.5827 54.7044 41.6052C54.7193 41.6327 54.7363 41.6591 54.7483 41.6886C54.7603 41.7176 54.7673 41.7475 54.7758 41.7775C54.7833 41.8025 54.7928 41.826 54.7978 41.8519C54.8202 41.9648 54.8202 42.0812 54.7978 42.1946C54.7928 42.2201 54.7833 42.244 54.7758 42.269C54.7673 42.299 54.7603 42.329 54.7483 42.3579C54.7363 42.3874 54.7193 42.4139 54.7044 42.4413C54.6919 42.4638 54.6824 42.4873 54.6679 42.5088C54.6359 42.5567 54.5995 42.6017 54.559 42.6421L47.4952 49.705C47.154 50.0461 46.6006 50.0461 46.2589 49.705C45.9172 49.3638 45.9177 48.8099 46.2589 48.4687Z" fill="#010B24"/><defs><filter id="filter0_d" x="0" y="0.848633" width="91" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="1" dy="4"/><feGaussianBlur stdDeviation="12"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg ></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="91" height="92" viewBox="0 0 91 92" fill="none" xmlns="http://www.w3.org/2000/svg">< g filter="url(#filter0_d)" ><circle r="21.5" transform="matrix(-1 0 0 1 44.5 42.3486)" fill="white" /></><path d="M46.2589 48.4687L51.8308 42.8969C47.0007 42.8969 35.7096 42.8969 35.7096 42.8969C35.2271 42.8969 34.8354 42.5053 34.8354 42.0228C34.8354 41.5402 35.2271 41.1486 35.7096 41.1486C35.7096 41.1486 46.9997 41.1486 51.8308 41.1486L46.2589 35.5768C45.9177 35.2356 45.9177 34.6822 46.2589 34.3405C46.6001 33.9989 47.1535 33.9994 47.4951 34.3405L54.559 41.4044C54.5995 41.4448 54.6359 41.4898 54.6679 41.5377C54.6824 41.5592 54.6924 41.5827 54.7044 41.6052C54.7193 41.6327 54.7363 41.6591 54.7483 41.6886C54.7603 41.7176 54.7673 41.7475 54.7758 41.7775C54.7833 41.8025 54.7928 41.826 54.7978 41.8519C54.8202 41.9648 54.8202 42.0812 54.7978 42.1946C54.7928 42.2201 54.7833 42.244 54.7758 42.269C54.7673 42.299 54.7603 42.329 54.7483 42.3579C54.7363 42.3874 54.7193 42.4139 54.7044 42.4413C54.6919 42.4638 54.6824 42.4873 54.6679 42.5088C54.6359 42.5567 54.5995 42.6017 54.559 42.6421L47.4952 49.705C47.154 50.0461 46.6006 50.0461 46.2589 49.705C45.9172 49.3638 45.9177 48.8099 46.2589 48.4687Z" fill="#010B24"/><defs><filter id="filter0_d" x="0" y="0.848633" width="91" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="1" dy="4"/><feGaussianBlur stdDeviation="12"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg ></button>',
    focusOnSelect: true,

  });

  $('.popup-link').on('click', function (e) {
    e.preventDefault();
    $('#form-popup').addClass('form-popup--active');
    $('.popup-close').addClass('popup-close--active');
  })

  $('.popup-close, .popup-close-icon').on('click', function () {
    $('.popup-close').removeClass('popup-close--active');
    $('#form-popup').removeClass('form-popup--active');
  });

  // $('#inputName, #inputNamePopup').keypress(function (e) {
  //   if (e.keyCode == 32) return false;
  //   if (this.value.length == 1) {
  //     this.value = this.value.toUpperCase();
  //   }
  // });

  // $('#inputPhone, #inputPhonePopup').inputmask({ "mask": "+7(999) 999-99-99" });

  $('#name, #name2').keypress(function (e) {
    if (e.keyCode == 32) return false;
    if (this.value.length == 1) {
      this.value = this.value.toUpperCase();
    }
  });

  $('#phone, #phone2').inputmask({ "mask": "+7(999) 999-99-99" });

});


const registrationForm = document.querySelector('#form')
const registrationFormPopup = document.querySelector('#form2')
const registrationInputs = Array.from(registrationForm.querySelectorAll('.page__input'));
const registrationInputsPopup = Array.from(registrationFormPopup.querySelectorAll('.page__input'));
const registrationSubmitButton = registrationForm.querySelector('.form__form-btn')
const registrationSubmitButtonPopup = registrationFormPopup.querySelector('.form__form-btn')

function checkForm() {
  var valid = registrationForm.checkValidity();
  registrationInputs.forEach(input => {
    const error = input.closest('.page__item').querySelector('.page__error');
    const border = input.closest('.page__item').querySelector(".page__border");

    if (input.id == 'phone') {
      input.addEventListener('keypress', () => {
        if (input.validity.valid) {
          error.classList.add('page__error_hidden')
          border.classList.remove('error-red')
        } else {
          error.classList.remove('page__error_hidden')
          border.classList.add('error-red')
        }
      })
    }

    input.addEventListener('input', () => {
      if (input.validity.valid) {
        error.classList.add('page__error_hidden')
        border.classList.remove('error-red')
      } else {
        error.classList.remove('page__error_hidden')
        border.classList.add('error-red')
      }
    })

    input.addEventListener('invalid', () => {
      error.classList.remove('page__error_hidden');
      border.classList.add('error-red')
    })
  })

  return valid
}

function checkFormPopup() {
  var valid = registrationFormPopup.checkValidity();
  registrationInputsPopup.forEach(input => {
    const error = input.closest('.page__item').querySelector('.page__error');
    const border = input.closest('.page__item').querySelector(".page__border");

    if (input.id == 'phone2') {
      input.addEventListener('keypress', () => {
        if (input.validity.valid) {
          error.classList.add('page__error_hidden')
          border.classList.remove('error-red')
        } else {
          error.classList.remove('page__error_hidden')
          border.classList.add('error-red')
        }
      })
    }

    input.addEventListener('input', () => {
      if (input.validity.valid) {
        error.classList.add('page__error_hidden')
        border.classList.remove('error-red')
      } else {
        error.classList.remove('page__error_hidden')
        border.classList.add('error-red')
      }
    })

    input.addEventListener('invalid', () => {
      error.classList.remove('page__error_hidden');
      border.classList.add('error-red')
    })
  })

  return valid
}