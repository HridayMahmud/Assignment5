// hadle input and button for function
const input = document.getElementById('couponinput');
const couponbutton = document.getElementById('couponbutton');
const grandtotal = document.getElementById('showgrand-total');
const discount = document.getElementById('discount');
const discountprice = document.getElementById('discountprice');
//couponCode.classList.remove('opacity-50');
function couponCheck(overallprice,selectedSeat){
  if(selectedSeat===4){
    
    
    input.removeAttribute('disabled');
    couponbutton.removeAttribute('disabled');
    couponbutton.classList.remove('opacity-30');
   
  }
 input.addEventListener('input',function(e){
  let couponCode = input.value;

   // console.log('coupon matched');

  //  couponbutton.style.background ="#1DD100";
  //  couponbutton.style.color ="white";
   couponbutton.addEventListener('click',function(){
   const counponcontainer = document.getElementById('couponcontainer');

    if(couponCode === "NEW15"){
      let offer = overallprice - overallprice*(15/100);
      grandtotal.innerText = "BDT"+" "+offer;
      let discountPrice = overallprice*(15/100);
      discount.innerText = "DiscountPrice:";
      discountprice.innerText = "BDT"+" "+discountPrice;
      counponcontainer.style.display="none";

    }
    else if (couponCode === "Couple 20"){
     offer = overallprice - overallprice*(20/100);
     let discountPrice = overallprice*(20/100);
     grandtotal.innerText = "BDT"+" "+offer;
     discount.innerText = "DiscountPrice:";
     discountprice.innerText ="BDT"+" "+discountPrice;
     counponcontainer.style.display="none";

    }
   
    
    });

});
}



//show ticket function
const show = document.getElementById('ticket');
const ticketclass = document.getElementById('ticketclass');
const ticketprice = document.getElementById('ticketprice');
const pcscontainer = document.getElementById('pcscontainer');
 
 
//Function show ticket
function showticket(seatnumber,seat){

if(seat.disabled===false){
  const li = document.createElement('li');
const ul = document.createElement('ul');
const ul2 = document.createElement('ul');
const ul3 = document.createElement('ul');
const classlist = document.createElement('li');
const pricelist = document.createElement('li');
pricelist.innerHTML =  550;
classlist.innerHTML = "Economy";

li.innerText = seatnumber;
ul.appendChild(li);
ul2.appendChild(classlist);

ul3.appendChild(pricelist);
 
  show.appendChild(ul);
  ticketclass.appendChild(ul2);
  ticketprice.appendChild(ul3);
  pcscontainer.appendChild(ticketprice,ticketclass,show);
  pcscontainer.classList.add('flex');

  pcscontainer.classList.add('gap-24');
}
 
}


//check number of total clicks for valid button
let totalClicks = 0;
function updateTotalClicks(seat) {
  totalClicks++;

 if(totalClicks>4){
  seat.setAttribute('disabled',true);
  totalClicks--;
  seat.style.background = "#F7F8F8";
  seat.style.color = "#03071280";
  alert("sorry!you can select maximum four tickets");
  
 }
 getting_availableSeats(totalClicks);
}



//getseatNumber function
function getSeatNumber(seat){

    let count = 0;
  
    seat.addEventListener('click',function(event){
       
        const seatnumber = seat.innerText;
         count++;
        seat.style.background = "#1DD100";
        seat.style.color = "white";
        
    
     if(count>1){
      
      seat.setAttribute('disabled',true);
    }
    if(seat.disabled===false){
      updateTotalClicks(seat);
    }
 
   //function showticket 
  showticket(seatnumber,seat);

     });
   
}

function selectSeatByClass(seats){

  for(let seat of seats){

   getSeatNumber(seat);
  }

}

//showtotal-money-after-selecting-ticket
const totalprice = document.getElementById('showtotal');
function showtotalMoney(selectedSeat){
  const overallprice = selectedSeat * 550;
totalprice.innerText ="BDT"+" "+overallprice;
grandtotal.innerText = "BDT"+" "+overallprice;

//2.coupon-check function
couponCheck(overallprice,selectedSeat);

//3.submit function
submit(selectedSeat);


}

function removeBodyshowSection(totalbody){
  const removesec = document.getElementById(totalbody);
  removesec.classlist.add('hidden');
 
}

function addSuccessfullSection(successcontainer){
  const addsection = document.getElementById(successcontainer);
   addsection.classList.remove('hidden');
}

//submit function
const submitbutton = document.getElementById('submit');
const phonnumberinput = document.getElementById('phonenumber');
// const successcontainer = document.getElementById('success-container');
// const totalbody = document.getElementById('totalbody');
function submit(selectedSeat){
  phonnumberinput.addEventListener('input',function(){
    if(selectedSeat>=1 && phonnumberinput.value!==null){
      submitbutton.removeAttribute('disabled');
      submitbutton.classList.remove('opacity-30');
    }
  });
  submitbutton.addEventListener('click',function(){
    removeBodyshowSection('totalbody');
    addSuccessfullSection('success-container');
  });
 
}

//select items by class
const seats = document.getElementsByClassName('item');
//total seat by default
const totalSeats = 40;
const leftseat = document.getElementById('leftseats');
const availables = document.getElementById('available');
const showseat = document.getElementById('seatnumber');

availables.innerText = totalSeats;
//function getiing available seatsl
function getting_availableSeats(selectedSeat){
  showseat.innerText = selectedSeat;
  showseat.style.borderRadius = "5px";
  showseat.style.background = "#1DD100";
  showseat.style.color = "white";
  showseat.style.fontSize = "15px";
  const availableseat = totalSeats - selectedSeat;
availables.innerText = availableseat;
leftseat.innerText = availableseat;
showtotalMoney(selectedSeat);

}

//1.select seat by class function
selectSeatByClass(seats);






