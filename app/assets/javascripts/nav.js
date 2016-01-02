(function() {
  var mobileMenuButton = '.js-mobile-menu-button';
  var $mobileMenu = $('.mobile-nav');

  function toggleMobileMenu() {
    $mobileMenu.toggleClass('showing');
  }

  $('.js-nav-dropdown').on('click', function() {
    var $menu = $('.nav-header__container--subheader');
    $menu.toggleClass('showing');
  });

  $(mobileMenuButton).on('click', function() {
    toggleMobileMenu();
  });

  $('body').on('click', function() {
    if ($mobileMenu.hasClass('showing')) {
      toggleMobileMenu();
    }
  });

  $('body').on('click', mobileMenuButton, function(e) {
    e.stopPropagation();
  });

})();
