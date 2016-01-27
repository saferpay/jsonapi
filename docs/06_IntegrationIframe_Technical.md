Handle JavaScript events from Saferpay:

````js
$(window).bind('message', function (e) {
	switch (e.originalEvent.data.message) { 
		case 'css': 
			$('#iframe').css('height', e.originalEvent.data.height + "px");
			break;
	}
});
````