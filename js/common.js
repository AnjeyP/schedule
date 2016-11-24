$(init);
function init(){
	
	var td = $('td');
	
	//filling months and days
	var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var day=0;
	var month=0;
	td.each(function(index){
		if (index>=0 && index<=30) $(this).text(++day).css("background-color","pink");
		if (index==31 || index==63 || index==95 || index==127  || index==159  || index==191  
			|| index==223   || index==255   || index==287  || index==319   
			|| index==351 || index==383)
			$(this).text(monthArr[month++]).css("background-color","lightblue");
	})

	//generating working schedule '1by2' for employee
	td.each(function(index){
			//checking first row and column to be not allowed to addClass
			
			if ((index-32)%3===0	&& index>31 && index<63) $(this).addClass("user1");
			if ((index-33)%3===0	&& index>31 && index<63) $(this).addClass("user2");
			if ((index-34)%3===0 && index>31 && index<63) $(this).addClass("user3");

			if ((index-64)%3===0	&& index>63 && index<93) $(this).addClass("user2");
			if ((index-65)%3===0	&& index>63 && index<93) $(this).addClass("user3");
			if ((index-66)%3===0 && index>63 && index<93) $(this).addClass("user1");

			if ((index-96)%3===0	&& index>95 && index<127) $(this).addClass("user1");
			if ((index-97)%3===0	&& index>95 && index<127) $(this).addClass("user2");
			if ((index-98)%3===0 && index>95 && index<127) $(this).addClass("user3");

			if ((index-128)%3===0	&& index>127 && index<158) $(this).addClass("user2");
			if ((index-129)%3===0	&& index>127 && index<158) $(this).addClass("user3");
			if ((index-130)%3===0 && index>127 && index<158) $(this).addClass("user1");

			if ((index-160)%3===0	&& index>159 && index<191) $(this).addClass("user2");
			if ((index-161)%3===0	&& index>159 && index<191) $(this).addClass("user3");
			if ((index-162)%3===0 && index>159 && index<191) $(this).addClass("user1");

			if ((index-192)%3===0	&& index>191 && index<222) $(this).addClass("user3");
			if ((index-193)%3===0	&& index>191 && index<222) $(this).addClass("user1");
			if ((index-194)%3===0 && index>191 && index<222) $(this).addClass("user2");

			if ((index-224)%3===0	&& index>223 && index<255) $(this).addClass("user3");
			if ((index-225)%3===0	&& index>223 && index<255) $(this).addClass("user1");
			if ((index-226)%3===0 && index>223 && index<255) $(this).addClass("user2");

			if ((index-256)%3===0	&& index>255 && index<287) $(this).addClass("user1");
			if ((index-257)%3===0	&& index>255 && index<287) $(this).addClass("user2");
			if ((index-258)%3===0 && index>255 && index<287) $(this).addClass("user3");

			if ((index-288)%3===0	&& index>287 && index<318) $(this).addClass("user2");
			if ((index-289)%3===0	&& index>287 && index<318) $(this).addClass("user3");
			if ((index-290)%3===0 && index>287 && index<318) $(this).addClass("user1");

			if ((index-320)%3===0	&& index>319 && index<351) $(this).addClass("user2");
			if ((index-321)%3===0	&& index>319 && index<351) $(this).addClass("user3");
			if ((index-322)%3===0 && index>319 && index<351) $(this).addClass("user1");

			if ((index-352)%3===0	&& index>351 && index<382) $(this).addClass("user3");
			if ((index-353)%3===0	&& index>351 && index<382) $(this).addClass("user1");
			if ((index-354)%3===0 && index>351 && index<382) $(this).addClass("user2");

			if ((index-384)%3===0	&& index>383 && index<415) $(this).addClass("user3");
			if ((index-385)%3===0	&& index>383 && index<415) $(this).addClass("user1");
			if ((index-386)%3===0 && index>383 && index<415) $(this).addClass("user2");

	})

	//determining the current date
	var data = new Date();
	var date = data.getDate();
	var montn = data.getMonth();
	var year = data.getFullYear();
	$("th").text(year);
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
		if (index==res || index==res-date || index==date-1) $(this).addClass("current");
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
	
	$("#filters").on('click', '.btn1', function(){
	
		td.filter('.user2').toggleClass('hide');
		td.filter('.user3').toggleClass('hide');
		$('.btn1').toggleClass('highlight_blue');
	
	}).on('click','.btn2', function(){
	
		td.filter('.user1').toggleClass('hide');
		td.filter('.user3').toggleClass('hide');
		$('.btn2').toggleClass('highlight_green');
	}).on('click','.btn3', function(){
		
		td.filter('.user1').toggleClass('hide');
		td.filter('.user2').toggleClass('hide');
		$('.btn3').toggleClass('highlight_pink');
	})


}