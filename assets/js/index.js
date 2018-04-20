
  	$(".dropdown-trigger").dropdown();

   	 $(document).ready(function(){
    $('.sidenav').sidenav();
  });

   	   $(document).ready(function(){
    $('.modal').modal();
  });

// Above is the materialize code to activate some features



//get the value of the checkboxes

 $(".btn1").click(function(){	
 	event.preventDefault()

	var values = (function() {
                var a = [];
                $("#checkboxes:checked").each(function() {
                    a.push(this.value);

					console.log(a)
                });
                return a;
            })()

            // run a for loop to show how many boxes were clicked

             for (var i = 0; i < values.length; i++) {
         		

             	

	var diet = values 

	for (var i = 0; i < diet.length; i++) {
		
	}

 	console.log(diet)

	
	// API is called 

$.ajax({
	type:"GET",
	url:"https://api.edamam.com/search?app_id=379298f3&app_key=eb7fcc65eed9fa2e1d2bc02df28905b6&q=diet=" +diet+"&to=50"

	

}).done(function (response) {

console.log(response)


});

   
};

});

	

 $.ajax({
	type:"GET",
	url:"https://api.edamam.com/search?app_id=379298f3&app_key=eb7fcc65eed9fa2e1d2bc02df28905b6&q=diet=low-fat,high-protein&to=50"

	

}).done(function (response) {

console.log(response)


});











