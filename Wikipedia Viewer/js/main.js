$(document).ready(function(){
 $(".search").keypress(function(e){ 
              
    var searchKey = $('#searchKey').val(); // get search input value
    var wiki = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchKey+'&format=json&callback=?';
   
    $.getJSON({
      type: "GET",
      url: wiki,
      action: searchKey,
      async: false,
      datatype: "JSON",
      generator: 'search',
      
      success: function(data){ // if search went well
        $('#output').html('');
        $('#output').html('');
        
        // output link + title first and description under the link title after
  for (var i=0; i < data[1].length; i++){
    $('#output').prepend("<li><a href= " +data[3][i]+ ">" +data[1][i]+ "</a><p>" +data[2][i]+ "</p></li>"); 
          } 
      },
      
      error: function(errorMessage){ // if there was a problem
        alert('Error');
      }
    });
  });
});  