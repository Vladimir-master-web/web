// Slider (Swiper)

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
    },
  
    // Navigation arrows
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },



    autoplay: {
        delay: 5000,
    }
});

// Tabs


document.querySelectorAll(".step-list-link").forEach(function(tabsBtn) {
    tabsBtn.addEventListener("click", function(event) {
        const path = event.currentTarget.dataset.path

        document.querySelectorAll(".how-we-work-bottom").forEach(function(tabContent) {
            tabContent.classList.remove("tab_content_active")
        })
        document.querySelector(`[data-target="${path}"]`).classList.add("tab_content_active")
    })    
})


// Accordion 

$( function() {
    $( "#accordion" ).accordion( {
        heightStyle: "content",
        collapsible: true
    });
} );


//bg-menu

$('.bg-menu').on('click', () => {
    $('.list-menu-mob').toggleClass('active');
    $('.bg-menu').toggleClass('open');
});