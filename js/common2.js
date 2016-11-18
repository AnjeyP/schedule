$(init);
function init(){
	
	var td = $('td');
	
	//filling months and days
	/*var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var day=0;
	var month=0;
	td.each(function(index){
		if (index>=0 && index<=30) $(this).text(++day).css("background-color","pink");
		if (index==31 || index==63 || index==95 || index==127  || index==159  || index==191  
			|| index==223   || index==255   || index==287  || index==319   
			|| index==351 || index==383)
			$(this).text(monthArr[month++]).css("background-color","lightblue");
	})*/

	//generating working schedule '1by2' for employee
	td.each(function(index){
			//checking first row and column to be not allowed to addClass
			if (index!==60 && index!==61 && index!==123 && index!==185 && index!==278 && 
				index!==340){
				if (index%3===0) $(this).addClass("user1");
			if ((index-1)%3===0) $(this).addClass("user2");
			if ((index-2)%3===0) $(this).addClass("user3");

		}	
	})

	//determining the current date
	var data = new Date();
	var date = data.getDate();
	var montn = data.getMonth();
	/*var month=6;
	var date = 5;*/

	switch (month-1) {
		case 1: res = 32+date-1;
		break;
		case 2: res = 64+date-1;
		break;
		case 3: res = 96+date-1;
		break;
		case 4: res = 128+date-1;
		break;
		case 5: res = 160+date-1;
		break;
		case 6: res = 192+date-1;
		break;
		case 7: res = 224+date-1;
		break;
		case 8: res = 256+date-1;
		break;
		case 9: res = 288+date-1;
		break;
		case 10: res = 320+date-1;
		break;
		case 11: res = 352+date-1;
		break;
		case 12: res = 384+date-1;
		break;
	}
	td.each(function(index){
		if (index==res) $(this).addClass("current");
	})

	// switch employee by click
	td.each(function(index){
		var count = 0;
		$(this).click(function(){
			//checking first row and column to be not allowed to addClass
			if (index>31 && index!==63 && index!==95 && index!==127 && index!==159 && index!==191 && 
				index!==223 && index!==255 && index!==287 && index!==319 && index!==351 && index!==383
				&& index!==93 && index!==94 && index!==158 && index!==222 && index!==318 && 
				index!==382 && index>=res){
				count++;
			if (count%2!==0 && count%3!==0) $(this).addClass("user1").removeClass("user2 user3");
			if (count%2===0 && count%4!==0) $(this).addClass("user2").removeClass("user1 user3");
			if (count%3===0) $(this).addClass("user3").removeClass("user1 user2");
			if (count%4===0) $(this).removeClass("user1 user2 user3");
		}

	})


	})
	
	


}