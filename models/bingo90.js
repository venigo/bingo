

var Bingo90 = function(){ 
	/*this.cards = cards;
	this.pattern = pattern;
	this.card_name = {};
	this.winnerLine1 = 0;
	this.winnerLine1Shown = 0;
	this.winnerLine2 = 0;
	this.winnerLine2Shown = 0;
	this.winnerLine3 = 0;
	this.winnerLine3Shown = 0;*/

	this.sayHello = function(){
		return 'Hello' + this.cards;
	}
	this.newCards = function(){
		var table = '';
        var nm = 0;
		if(this.cards > 0){
            for(var i=0; i < this.cards; i++) {
                
                if(i<37 && i>=30){
                    nm = 36;
                } else if(i<30 && i>=24) {
                    nm = 30;
                } else if(i<24 && i>=18) {
                    nm = 24;
                }else if(i<18 && i>=12) {
                    nm = 18;
                }else if(i<12 && i>=6) {
                    nm = 12;
                }else{
                    nm = 6;
                }
		table += '<div class="col-md-6 card-nm'+nm+'>">\
                    <div class="card90"><table class="table90 pattern" id="card_'+i+'">\
                        <tr>\
                            <td id="card_'+i+'_square0">&nbsp;</td>\
                            <td id="card_'+i+'_square1">&nbsp;</td>\
                            <td id="card_'+i+'_square2">&nbsp;</td>\
                            <td id="card_'+i+'_square3">&nbsp;</td>\
                            <td id="card_'+i+'_square4">&nbsp;</td>\
                            <td id="card_'+i+'_square5">&nbsp;</td>\
                            <td id="card_'+i+'_square6">&nbsp;</td>\
                            <td id="card_'+i+'_square7">&nbsp;</td>\
                            <td id="card_'+i+'_square8">&nbsp;</td>\
                        </tr>\
                        <tr>\
                            <td id="card_'+i+'_square10">&nbsp;</td>\
                            <td id="card_'+i+'_square11">&nbsp;</td>\
                            <td id="card_'+i+'_square12">&nbsp;</td>\
                            <td id="card_'+i+'_square13">&nbsp;</td>\
                            <td id="card_'+i+'_square14">&nbsp;</td>\
                            <td id="card_'+i+'_square15">&nbsp;</td>\
                            <td id="card_'+i+'_square16">&nbsp;</td>\
                            <td id="card_'+i+'_square17">&nbsp;</td>\
                            <td id="card_'+i+'_square18">&nbsp;</td>\
                        </tr>\
                        <tr>\
                            <td id="card_'+i+'_square20">&nbsp;</td>\
                            <td id="card_'+i+'_square21">&nbsp;</td>\
                            <td id="card_'+i+'_square22">&nbsp;</td>\
                            <td id="card_'+i+'_square23">&nbsp;</td>\
                            <td id="card_'+i+'_square24">&nbsp;</td>\
                            <td id="card_'+i+'_square25">&nbsp;</td>\
                            <td id="card_'+i+'_square26">&nbsp;</td>\
                            <td id="card_'+i+'_square27">&nbsp;</td>\
                            <td id="card_'+i+'_square28">&nbsp;</td>\
                        </tr>\
                    </table></div></div>';
                }
            }
        return table;
	}
    this.winner90 = function(data){
        var obj_length = Object.keys(data.card_name).length;
        for(key in data.card_name){
            if(data.card_name[key] == data.counter_ball){
                data.card_name[key] = 'matched';
            }
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
                (   data.card_name["card_"+i+"_square11"] == 'matched' &&
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
                (   data.card_name["card_"+i+"_square0"] == 'matched' &&
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
            if( data.card_name["card_"+i+"_square0"] == 'matched' &&
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
        
        return data;
    }
}

module.exports = Bingo90;