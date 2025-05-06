// Scroll to section based on dropdown selection
function scrollToLeague(id) {
    if (id) {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Intersection Observer for fade-in animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  
  document.querySelectorAll('.jersey-section').forEach(section => {
    observer.observe(section);
  });



  function navigateLeague(select) {
    const page = select.value;
    if (page) {
      window.location.href = page;
    }
  }


/*contact us form

  $('.form__btn').click(function() {
    $('.mail__letter').toggleClass('move');
    $('.mail__top').toggleClass('closed');
    $('.form__btn--invisible').toggleClass('visible');
    $('.form__btn--visible').toggleClass('invisible');
  });
  
  $('input').focus(function() {
    $(this).parent().addClass('active');
    $('input').focusout(function() {
      if($(this).val() == '') { $(this).parent().removeClass('active');
      } else { $(this).parent().addClass('active');
      }
    })
  });*/