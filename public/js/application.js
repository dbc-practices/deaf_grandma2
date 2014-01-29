$(document).ready(function() {


  $("#submit").click(function(){
    var input = document.getElementById('user_text').value
    $.ajax({
    type: "POST",
    url: "/grandma",
    data: {user_input: input},
    success: function(response){
      print_grandma(response)
    }
    })

  })

  var print_grandma = function(res){
    var holder = $("#holder");
        holder.empty()
        holder.append("<p>"+res.response+"</p>")
  }

});


