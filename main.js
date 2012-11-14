(function(){

  var $bgsize = $('#bgsize'),
      $spinner = $('#example');

  $bgsize.on('change', function() {
    $spinner.css('backgroundSize', $(this).val() + '%');
  });

})();