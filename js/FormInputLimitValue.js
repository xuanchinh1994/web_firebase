var valueTopTem, valueTopTur,valueTopSan,valueToppH;
var valueBottomTem, valueBottomTur,valueBottomSan,valueBottompH;
var initLimitValue = false;
function ShowHideCharts(){
	var div = document.getElementById("chatsAnalysis");
    if (div.style.display !== 'none') {
        div.style.display = 'none';

    }
    else {
        div.style.display = 'block';
    }
}
function ShowHideForm(){
	var div = document.getElementById("FormInputLimitValue");
    if (div.style.display !== 'none') {
        div.style.display = 'none';

    }
    else {
        div.style.display = 'block';
    }
    debugger;
   	var manualcheck = document.getElementById("premium").checked;
	if(manualcheck)
	{
				document.getElementById("TopTem").placeholder="Please wait";
               document.getElementById("TopTem").removeAttribute('disabled');

               document.getElementById("BottomTem").placeholder="Please wait";
               document.getElementById("BottomTem").removeAttribute('disabled');

               document.getElementById("TopSan").placeholder="Please wait";
               document.getElementById("TopSan").removeAttribute('disabled');

               document.getElementById("BottomSan").placeholder="Please wait";
               document.getElementById("BottomSan").removeAttribute('disabled');

               document.getElementById("TopTur").placeholder="Please wait";
               document.getElementById("TopTur").removeAttribute('disabled');

               document.getElementById("BottomTur").placeholder="Please wait";
               document.getElementById("BottomTur").removeAttribute('disabled');

               document.getElementById("ToppH").placeholder="Please wait";
               document.getElementById("ToppH").removeAttribute('disabled');

               document.getElementById("BottompH").placeholder="Please wait";
               document.getElementById("BottompH").removeAttribute('disabled');
	}
	socket.emit('getValueLimitCurrent');
}


// <a ... onclick="myFunc();">..</a>

// socket.on('getValueLimitCurrent', function(msg) {
// alert("valueTopTem#####################");   
//         valueTopTem= msg.valueTopTem;
//         valueTopSan= msg.valueTopSan;
//         valueTopTur= msg.valueTopTur;
//         valueToppH= msg.valueToppH;
         
//         valueBottomTem= msg.valueBottomTem;
//         valueBottomSan= msg.valueBottomSan;
//         valueBottomTur= msg.valueBottomTur;
//         valueBottompH= msg.valueBottompH;  

//     });

function chooseShrimp(){
               document.getElementById("TopTem").value = 31;
               document.getElementById("TopTem").setAttribute('disabled', true);

               document.getElementById("BottomTem").value = 29;
               document.getElementById("BottomTem").setAttribute('disabled', true);

               document.getElementById("TopSan").value = 15;
               document.getElementById("TopSan").setAttribute('disabled', true);

               document.getElementById("BottomSan").value = 5;
               document.getElementById("BottomSan").setAttribute('disabled', true);

               document.getElementById("TopTur").value = 60;
               document.getElementById("TopTur").setAttribute('disabled', true);

               document.getElementById("BottomTur").value = 50;
               document.getElementById("BottomTur").setAttribute('disabled', true);

               document.getElementById("ToppH").value = 7.8;
               document.getElementById("ToppH").setAttribute('disabled', true);

               document.getElementById("BottompH").value = 7.2;
               document.getElementById("BottompH").setAttribute('disabled', true);
}

function chooseFish(){
               document.getElementById("TopTem").value = 30;
               document.getElementById("TopTem").setAttribute('disabled', true);

               document.getElementById("BottomTem").value = 22;
               document.getElementById("BottomTem").setAttribute('disabled', true);

               document.getElementById("TopSan").value = 2;
               document.getElementById("TopSan").setAttribute('disabled', true);

               document.getElementById("BottomSan").value = 0;
               document.getElementById("BottomSan").setAttribute('disabled', true);

               document.getElementById("TopTur").value = 60;
               document.getElementById("TopTur").setAttribute('disabled', true);

               document.getElementById("BottomTur").value = 50;
               document.getElementById("BottomTur").setAttribute('disabled', true);

               document.getElementById("ToppH").value = 8;
               document.getElementById("ToppH").setAttribute('disabled', true);

               document.getElementById("BottompH").value = 6.5;
               document.getElementById("BottompH").setAttribute('disabled', true);
}

function chooseManual(){
  
               document.getElementById("TopTem").value = "";
               document.getElementById("BottomTem").value = "";
               document.getElementById("TopSan").value ="";
               document.getElementById("BottomSan").value ="";
               document.getElementById("TopTur").value = "";
               document.getElementById("BottomTur").value ="";
               document.getElementById("ToppH").value ="";
               document.getElementById("BottompH").value ="";
            


               document.getElementById("TopTem").placeholder="Please wait";
               document.getElementById("TopTem").removeAttribute('disabled');

               document.getElementById("BottomTem").placeholder="Please wait";
               document.getElementById("BottomTem").removeAttribute('disabled');

               document.getElementById("TopSan").placeholder="Please wait";
               document.getElementById("TopSan").removeAttribute('disabled');

               document.getElementById("BottomSan").placeholder="Please wait";
               document.getElementById("BottomSan").removeAttribute('disabled');

               document.getElementById("TopTur").placeholder="Please wait";
               document.getElementById("TopTur").removeAttribute('disabled');

               document.getElementById("BottomTur").placeholder="Please wait";
               document.getElementById("BottomTur").removeAttribute('disabled');

               document.getElementById("ToppH").placeholder="Please wait";
               document.getElementById("ToppH").removeAttribute('disabled');

               document.getElementById("BottompH").placeholder="Please wait";
               document.getElementById("BottompH").removeAttribute('disabled');
               socket.emit('getValueLimitCurrent');
}


function SubmitValueLimit(){

	valueTopTem=document.getElementById("TopTem").value;
	valueTopSan=document.getElementById("TopSan").value;
	valueTopTur=document.getElementById("TopTur").value;
	valueToppH=document.getElementById("ToppH").value;

	valueBottomTem=document.getElementById("BottomTem").value;
	valueBottomSan=document.getElementById("BottomSan").value;
	valueBottomTur=document.getElementById("BottomTur").value;
	valueBottompH=document.getElementById("BottompH").value;
	
	if(valueTopTem === "" || valueTopSan === "" || valueTopTur ==="" || valueToppH ==="" || valueBottomTem === "" || valueBottomSan === "" || valueBottomTur ==="" || valueBottompH ==="" )
	{
	 	alert("Please fill all value!");
	}
	else {
	location.href = "#portfolio";
	var div = document.getElementById("FormInputLimitValue");
	div.style.display = 'none';
	socket.emit('ValueLimit', {valueTopTem: valueTopTem, valueTopSan: valueTopSan, valueTopTur: valueTopTur, valueToppH: valueToppH,
						valueBottomTem: valueBottomTem, valueBottomSan: valueBottomSan, valueBottomTur: valueBottomTur,valueBottompH: valueBottompH, initLimitValue: initLimitValue, userId: userId});
	}

}