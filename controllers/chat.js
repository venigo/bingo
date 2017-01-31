module.exports = function(http){
	console.log('in chat');
	var users = [];
	var connections = [];
	var io = require('socket.io')(http);


	io.on('connection', function(socket){
		connections.push(socket);
		console.log('conncted : %s user(s) connected..!', connections.length);
		socket.on('send message', function(data){
			console.log(data); 
			socket.join(data.user_room);
			
			//data.users_in_room = users;
			//update_user_list(data.user_room);
			io.to(data.user_room).emit('show message', data);
			//io.emit('show message', data);
		});
		socket.on('get user list', function(data){
			//callback(true);
			socket.join(data.user_room);
			console.log(data, 'get user list CALLED')
			socket.user_room = data.user_room;
			socket.username = data.user;
			if(users.indexOf(data.user) == -1 ){
				users.push(socket.username);
			}
			update_user_list(data.user_room);
			//data.users_in_room = users;
			
			
			//io.emit('show message', data);
		});
		function update_user_list(user_room){
			io.to(user_room).emit('show user list', users);
			console.log(users, user_room,'users: show user list CALLED');
		}
		
		socket.on('game counter', function(data){
			console.log(data.user_room,  'game counter');
			var array90 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
	                       21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
	                       41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,
	                       61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,
	                       81,82,83,84,85,86,87,88,89,90];
			stopCounter = setInterval(function(){
				var ball= array90[Math.floor(Math.random()*array90.length)];
				var index = array90.indexOf(ball);
				if (index > -1) {
					array90.splice(index, 1);
				}
				data.counter_ball = ball;
				var obj_length = Object.keys(data.card_name).length;
				for(key in data.card_name){
					if(data.card_name[key] == data.counter_ball){
						data.card_name[key] = 'matched';
					}
				}
				if(array90.length == 0 || data.winnerLine3 == 1){
	                clearInterval(stopCounter);
	                return;
            	}
				for(i=0;i<obj_length;i++){
					//line 1 winner
					if(!data.winnerLine1){
						if(data.card_name["card_"+i+"_square0"] == 'matched'  &&
							data.card_name["card_"+i+"_square2"] == 'matched' &&
							data.card_name["card_"+i+"_square3"] == 'matched' &&
							data.card_name["card_"+i+"_square7"] == 'matched' &&
							data.card_name["card_"+i+"_square8"] == 'matched'){
							data.winnerLine1 = 1;
							//data.winnerLine1Shown = 1;
						}
						if(data.card_name["card_"+i+"_square11"]  == 'matched' &&
							data.card_name["card_"+i+"_square12"] == 'matched' &&
							data.card_name["card_"+i+"_square14"] == 'matched' &&
							data.card_name["card_"+i+"_square15"] == 'matched' &&
							data.card_name["card_"+i+"_square16"] == 'matched'){
							data.winnerLine1 = 1;
							//data.winnerLine1Shown = 1;
						}
						if(data.card_name["card_"+i+"_square20"] == 'matched' &&
							data.card_name["card_"+i+"_square21"] == 'matched' &&
							data.card_name["card_"+i+"_square23"] == 'matched' &&
							data.card_name["card_"+i+"_square25"] == 'matched' &&
							data.card_name["card_"+i+"_square28"] == 'matched'){
							data.winnerLine1 = 1;
							//data.winnerLine1Shown = 1;
						}
					}
					//2 lines winner
					if(!data.winnerLine2){
						if((data.card_name["card_"+i+"_square0"] == 'matched' &&
							data.card_name["card_"+i+"_square2"] == 'matched' &&
							data.card_name["card_"+i+"_square3"] == 'matched' &&
							data.card_name["card_"+i+"_square7"] == 'matched' &&
							data.card_name["card_"+i+"_square8"] == 'matched' && 
							data.card_name["card_"+i+"_square11"] == 'matched' &&
							data.card_name["card_"+i+"_square12"] == 'matched' &&
							data.card_name["card_"+i+"_square14"] == 'matched' &&
							data.card_name["card_"+i+"_square15"] == 'matched' &&
							data.card_name["card_"+i+"_square16"] == 'matched') 
						||
						(	data.card_name["card_"+i+"_square11"] == 'matched' &&
							data.card_name["card_"+i+"_square12"] == 'matched' &&
							data.card_name["card_"+i+"_square14"] == 'matched' &&
							data.card_name["card_"+i+"_square15"] == 'matched' &&
							data.card_name["card_"+i+"_square16"] == 'matched' &&
							data.card_name["card_"+i+"_square20"] == 'matched' &&
							data.card_name["card_"+i+"_square21"] == 'matched' &&
							data.card_name["card_"+i+"_square23"] == 'matched' &&
							data.card_name["card_"+i+"_square25"] == 'matched' &&
							data.card_name["card_"+i+"_square28"] == 'matched')
						||
						(	data.card_name["card_"+i+"_square0"] == 'matched' &&
							data.card_name["card_"+i+"_square2"] == 'matched' &&
							data.card_name["card_"+i+"_square3"] == 'matched' &&
							data.card_name["card_"+i+"_square7"] == 'matched' &&
							data.card_name["card_"+i+"_square8"] == 'matched' && 
							data.card_name["card_"+i+"_square20"] == 'matched' &&
							data.card_name["card_"+i+"_square21"] == 'matched' &&
							data.card_name["card_"+i+"_square23"] == 'matched' &&
							data.card_name["card_"+i+"_square25"] == 'matched' &&
							data.card_name["card_"+i+"_square28"] == 'matched')){
							data.winnerLine2 = 1;
							//data.winnerLine2Shown = 1;
						}
					}
					//full house win
					if(	data.card_name["card_"+i+"_square0"] == 'matched' &&
						data.card_name["card_"+i+"_square2"] == 'matched' &&
						data.card_name["card_"+i+"_square3"] == 'matched' &&
						data.card_name["card_"+i+"_square7"] == 'matched' &&
						data.card_name["card_"+i+"_square8"] == 'matched' && 
						data.card_name["card_"+i+"_square11"] == 'matched' &&
						data.card_name["card_"+i+"_square12"] == 'matched' &&
						data.card_name["card_"+i+"_square14"] == 'matched' &&
						data.card_name["card_"+i+"_square15"] == 'matched' &&
						data.card_name["card_"+i+"_square16"] == 'matched' &&
						data.card_name["card_"+i+"_square20"] == 'matched' &&
						data.card_name["card_"+i+"_square21"] == 'matched' &&
						data.card_name["card_"+i+"_square23"] == 'matched' &&
						data.card_name["card_"+i+"_square25"] == 'matched' &&
						data.card_name["card_"+i+"_square28"] == 'matched'){
						data.winnerLine3 = 1;
						//data.winnerLine3Shown = 1;
					}
				} // for loop 
				console.log(data.counter_ball,array90.length,  'data.counter_ball');
				/*if(array90.length == 0 || data.winnerLine3Shown == 1){
	                clearInterval(stopCounter);
	                return;
            	}*/

				io.to(data.user_room).emit('show counter ball', data);
			}, 2500);
		});

		socket.on('disconnect', function(data){
			//users.splice(users.indexOf(socket.username), 1);
			//update_user_list(socket.user_room);
			connections.splice(connections.indexOf(socket), 1);
			console.log('disconncted : %s user(s) connected..!', connections.length);
		});

	}); 



}

