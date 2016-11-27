$(init);
function init(){
	
	var td = $('#tabs-1').find('td');
	
	//filling months and days
	var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var day=0;
	var month=0;
	td.each(function(index){
		if (index>=0 && index<=30) $(this).text(++day).css("background-color","pink");
		if (index==31 || index==63 || index==95 || index==127  || index==159  || index==191  
			|| index==223   || index==255   || index==287  || index==319   
			|| index==351 || index==383)
			$(this).text(monthArr[month++]).css("background-color","lightblue").hover(function(){
				$(this).toggleClass("highlight_month")});
	})
	

	//generating working schedule '1by2' for employee
	td.each(function(index){
			//checking first row and column to be not allowed to addClass
			//jan
			if ((index-32)%3===0	&& index>31 && index<63) $(this).addClass("user1");
			if ((index-33)%3===0	&& index>31 && index<63) $(this).addClass("user2");
			if ((index-34)%3===0 && index>31 && index<63) $(this).addClass("user3");
			//feb
			if ((index-64)%3===0	&& index>63 && index<93) $(this).addClass("user2");
			if ((index-65)%3===0	&& index>63 && index<93) $(this).addClass("user3");
			if ((index-66)%3===0 && index>63 && index<93) $(this).addClass("user1");
			//march
			if ((index-96)%3===0	&& index>95 && index<127) $(this).addClass("user1");
			if ((index-97)%3===0	&& index>95 && index<127) $(this).addClass("user2");
			if ((index-98)%3===0 && index>95 && index<127) $(this).addClass("user3");
			//april
			if ((index-128)%3===0	&& index>127 && index<158) $(this).addClass("user2");
			if ((index-129)%3===0	&& index>127 && index<158) $(this).addClass("user3");
			if ((index-130)%3===0 && index>127 && index<158) $(this).addClass("user1");
			//may
			if ((index-160)%3===0	&& index>159 && index<191) $(this).addClass("user2");
			if ((index-161)%3===0	&& index>159 && index<191) $(this).addClass("user3");
			if ((index-162)%3===0 && index>159 && index<191) $(this).addClass("user1");
			//june
			if ((index-192)%3===0	&& index>191 && index<222) $(this).addClass("user3");
			if ((index-193)%3===0	&& index>191 && index<222) $(this).addClass("user1");
			if ((index-194)%3===0 && index>191 && index<222) $(this).addClass("user2");
			//july
			if ((index-224)%3===0	&& index>223 && index<255) $(this).addClass("user3");
			if ((index-225)%3===0	&& index>223 && index<255) $(this).addClass("user1");
			if ((index-226)%3===0 && index>223 && index<255) $(this).addClass("user2");
			//august
			if ((index-256)%3===0	&& index>255 && index<287) $(this).addClass("user1");
			if ((index-257)%3===0	&& index>255 && index<287) $(this).addClass("user2");
			if ((index-258)%3===0 && index>255 && index<287) $(this).addClass("user3");
			//september
			if ((index-288)%3===0	&& index>287 && index<318) $(this).addClass("user2");
			if ((index-289)%3===0	&& index>287 && index<318) $(this).addClass("user3");
			if ((index-290)%3===0 && index>287 && index<318) $(this).addClass("user1");
			//october
			if ((index-320)%3===0	&& index>319 && index<351) $(this).addClass("user2");
			if ((index-321)%3===0	&& index>319 && index<351) $(this).addClass("user3");
			if ((index-322)%3===0 && index>319 && index<351) $(this).addClass("user1");
			//november
			if ((index-352)%3===0	&& index>351 && index<382) $(this).addClass("user3");
			if ((index-353)%3===0	&& index>351 && index<382) $(this).addClass("user1");
			if ((index-354)%3===0 && index>351 && index<382) $(this).addClass("user2");
			//december
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
		if (index==res-date) 	$(this).css('color','red');
		//hardcode need to fix
		if (index<=29 && ((index-4)%7==0 || (index-5)%7==0))
			$(this).css("background-color","red");
		else if (index<=30) $(this).css("background-color","pink");
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
			else if (count%2===0 && count%4!==0) $(this).addClass("user2").removeClass("user1 user3");
			else if (count%3===0) $(this).addClass("user3").removeClass("user1 user2");
			/*if (count%4===0) $(this).removeClass("user1 user2 user3");*/
		}

	})


	})
	//employee filtering
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
	//weekend's highlight
	//jan
	weekendMapping(31,30,1,2);
	//feb
	weekendMapping(63,28,5,6);
	//mar
	weekendMapping(95,30,4,5);
	//apr
	weekendMapping(127,29,1,2);
	//may
	weekendMapping(159,30,0,6);
	//june
	weekendMapping(191,29,3,4);
	//july
	weekendMapping(223,30,1,2);
	//august
	weekendMapping(255,30,5,6);
	//september
	weekendMapping(287,29,2,3);
	//october
	weekendMapping(319,30,0,1);
	//november
	weekendMapping(351,29,4,5);
	//december
	weekendMapping(383,30,2,3);

	//auxilary functions
	function weekendMapping(a,b,c,d){
		$(td[a]).click(function(){
			$(this).css('color','red');
				//to obtain universal array for comparising
				var monthIndexArray = [31, 63, 95, 127, 159, 191, 223, 255, 287, 319, 351, 383];
				var position = monthIndexArray.indexOf(a);
				monthIndexArray.splice(position,1);
				td.each(function(index){
					for (i in monthIndexArray) if (index == monthIndexArray[i]) $(this).css('color','black');})
				td.each(function(index){
					if (index<=b && ((index-c)%7==0 || (index-d)%7==0))
						$(this).css("background-color","red");
					else if (index<=30) $(this).css("background-color","pink");

				})	
			})
	}
		//tabs-13 december
		var tab2_td = $('#tabs-13').find('td');
		var janDay=0;
		var dayArrIndex=0;
		var dayArr = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];
		tab2_td.each(function(index){
			if (index>=0 && index<=30) $(this).text(++janDay).css("background-color","pink");
			if (index>=0 && index<=30 && ((index-2)%7==0 || (index-3)%7==0)) $(this).css("background-color","red");
			if (index>=32 && index<=62 && ((index-2)%7==0 || (index-3)%7==0)) $(this).css("background-color","red");

			if (index>=32 && index<=62 && (index-32)%7==0) $(this).text('th').css("background-color","pink");
			if (index>=32 && index<=62 && (index-33)%7==0) $(this).text('fr').css("background-color","pink");
			if (index>=32 && index<=62 && (index-34)%7==0) $(this).text('sa').css("background-color","red");
			if (index>=32 && index<=62 && (index-35)%7==0) $(this).text('su').css("background-color","red");
			if (index>=32 && index<=62 && (index-36)%7==0) $(this).text('mo').css("background-color","pink");
			if (index>=32 && index<=62 && (index-37)%7==0) $(this).text('tu').css("background-color","pink");
			if (index>=32 && index<=62 && (index-38)%7==0) $(this).text('we').css("background-color","pink");
		})

			//generating working schedule '1by2' for employee
			var htmlString1 = "<div class='tooltip1'>.<pre class='tooltiptext1'></br><em>Name:</em> Andrii Parfeniuk </br><em>Department:</em> New Channel Development </br><em>Position:</em>Senior Director of Broadcasting </br><em>Phone:</em> +38(050)123-45-67</pre></div>";
			var htmlString2 = "<div class='tooltip2'>.<pre class='tooltiptext2'></br><em>Name:</em> Victor Shevchuk </br><em>Department:</em> New Channel Development </br><em>Position:</em>Director of Broadcasting </br><em>Phone:</em> +38(050)789-10-11</pre></div>";
			var htmlString3 = "<div class='tooltip3'>.<pre class='tooltiptext3'></br><em>Name:</em> Leonid Kravets </br><em>Department:</em> New Channel Development </br><em>Position:</em>Director of Broadcasting </br><em>Phone:</em> +38(050)123-45-67</pre></div>";
			
			tab2_td.each(function(index){
				if(index>=64 && index<=94 && (index-64)%3==0) $(this).addClass('user3').html(htmlString3);
				if(index>=98 && index<=126 && (index-98)%3==0) $(this).addClass('user2').html(htmlString2);
				if(index>=129 && index<=158 && (index-129)%3==0) $(this).addClass('user1').html(htmlString1);
			})
			//user stats call
			userStatistics();
			// switch employee by click in month view tab
			//user2
			tab2_td.each(function(index){
				$(this).click(function(){
					if (index>=96 && index<=126) {
						$(tab2_td[index]).addClass('user2').html("").html(htmlString2);
						//representing the changes also in year view
						$(td[index+288]).addClass('user2').removeClass('user1 user3');
						$(tab2_td[index-32]).removeClass('user3').html("");
						$(tab2_td[index+32]).removeClass('user1').html("");
						userStatistics();
					}
				})
			})
			//user3
			tab2_td.each(function(index){
				$(this).click(function(){
					if (index>=64 && index<=94) {
						$(tab2_td[index]).addClass('user3').html(htmlString3);
						$(td[index+320]).addClass('user3').removeClass('user1 user2');
						$(tab2_td[index+32]).removeClass('user2').html("");
						$(tab2_td[index+64]).removeClass('user1').html("");
						userStatistics();
					}
				})
			})
			//user1
			tab2_td.each(function(index){
				$(this).click(function(){
					if (index>=128 && index<=158) {
						$(tab2_td[index]).addClass('user1').html(htmlString1);
						$(td[index+256]).addClass('user1').removeClass('user3 user2');
						$(tab2_td[index-32]).removeClass('user2').html("");
						$(tab2_td[index-64]).removeClass('user3').html("");
						userStatistics();
					}
				})
			})
			//auxilary functions
			//statistics per user
			function userStatistics(){
				var user3Count=0;
				var user2Count=0;
				var user1Count=0;
				tab2_td.each(function(){
					if ($(this).hasClass('user3')) $(tab2_td[95]).text(user3Count++);
					if ($(this).hasClass('user2')) $(tab2_td[127]).text(user2Count++);
					if ($(this).hasClass('user1')) $(tab2_td[159]).text(user1Count++);
				})
			}
		//highlighting vacation days
		$('#check').click(function(){
			var startData = $('#datepicker').val();
			var endData = $('#datepicker2').val();
			var startVacation = Number(startData.split("")[3]+startData.split("")[4]);
			var endVacation = Number(endData.split("")[3]+endData.split("")[4]);
			var optionArr = $('select').children();
			for (key in optionArr) if (optionArr[key].selected==true) var user = optionArr[key].value;
			if (user =="User3")
						tab2_td.each(function(index){
								
								if(index>=64+startVacation-1 && index<=64+endVacation-1) {
									if ($(this).hasClass("vacation_month")) $(this).removeClass("vacation_month");
									$(tab2_td[index]).addClass("vacation_month");
									$(td[index+320]).addClass("vacation_year");
								}
							})	
			if (user =="User2")
						tab2_td.each(function(index){
							
							if(index>=96+(startVacation-1) && index<=96+(endVacation-1)) {
								if ($(this).hasClass("vacation_month")) $(this).removeClass("vacation_month");
								$(this).addClass("vacation_month");
								$(td[index+288]).addClass("vacation_year");
							}
						})
			if (user =="User1")
						tab2_td.each(function(index){
							
							if(index>=128+(startVacation-1) && index<=128+(endVacation-1)) {
								if ($(this).hasClass("vacation_month")) $(this).removeClass("vacation_month");
								$(this).addClass("vacation_month");
								$(td[index+256]).addClass("vacation_year");
							}
						})	
		})
		
			

}