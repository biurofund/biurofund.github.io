$('#input-form').one('submit',function(){
	var inputq1 = encodeURIComponent($('#input-q1').val());
	var inputq2 = encodeURIComponent($('#input-q2').val());
	var inputq3 = encodeURIComponent($('#input-q3').val());
	var q1ID = "entry.1037620166"; 
	var q2ID = "entry.1359815289"; 
	var q3ID = "entry.596561606";
	var baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdfzddDdjAdFovJUxd0DswYDqeUhh2yn6J2rdvde8B2XRLU5g/formResponse?';
	var submitRef = '&submit=6212259610233459856';
	var submitURL = (baseURL + q1ID + "=" + inputq1 + "&" + q2ID + "=" + inputq2 + "&" + q3ID + "=" + inputq3 + submitRef);
	console.log(submitURL);
	$(this)[0].action=submitURL;
	$('#input-feedback').text('Wiadomość wysłana. Dziękujemy!');
});