/*<!-- author:maaami98-->*/
var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
var detay
//var user = firebase.auth().currentUser;
firebase.auth().onAuthStateChanged(function(user) {
if (user) {
  console.log('giris yapilmis.');
   document.getElementById('durum').innerHTML ='giris yapilmis' ;
  document.getElementById("cikis").style.display='block';
} else {
  console.log('giris yapilmamis.');
  
  document.getElementById('durum').innerHTML ='giris yapilmamis' ;
}});
function auth(){

    var number =  document.getElementById('num').value;
	
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then( function(e) {
        console.log('Gonderildi');
		document.getElementById('durum').innerHTML ='Gonderildi' ;
		detay=e;

        

    })
    .catch(function (error) {
        console.error('Gonderilemedi', error);
		document.getElementById('durum').innerHTML ='Gonderildi' ;
});}
function cvp(){
		
	var code = document.getElementById('kod').value;
	detay.confirm(code).then(function (result) {
	 console.log('basarili dogrulama')
	  var user = result.user;
	  console.log(user)
	}).catch(function (error) {
	 
	 console.log('Hatali kod')
});
  
};
function cikis(){
	document.getElementById("cikis").style.display='none';
	var user = firebase.auth().currentUser;
	user.delete().then(function() {
	console.log('user silindi')
}).catch(function(error) {
  console.log('user silinemedi')
});
/*
	firebase.auth().signOut().then(function() {
  console.log('cikis basarili')
}).catch(function(error) {
  console.log('cikis basarisiz')
});*/
};