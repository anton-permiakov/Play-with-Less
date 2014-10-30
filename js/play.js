var features;
$(document).ready(function() {
		features = $("h1 small").text().toLowerCase().replace(/\s+/g, '');
		$("#convert").click(function(){
			myCodeMirror.save();
			var input = myCodeMirror.getValue();
			$("#out").empty();
			try {
				new(less.Parser)().parse(input, function (err, tree) {
					if (err) {
						output = "Error, "+err.name+" on line "+err.line+":\n"+err.message;
						myCodeMirrorOut.setValue(output);
						$("#out").val(output);
					} else {
						output = tree.toCSS();
						myCodeMirrorOut.setValue(output);
						$("#out").val(output);
                        ConvertBlaBla();
					}
				});
			} catch (err) {
				if (err.line) {
					$("#out").val("Error line "+err.line+":\n"+err.message);
				} else {
					$("#out").val("Could not parse line "+err.callLine+":\n"+err.callExtract);
				}
			}
			$(".panel-footer style").append(output);
		});
		BlaBla('default-bla');
		LoadSource();
		ShowSelectors();
});
function BlaBla(quotes, phrase){
        if(typeof(phrase)==='undefined') phrase = '';
		var loadString = 'features/'+features+'.html #'+$.trim(quotes)+' span.bla-bla'+phrase;
		$(".robo-quotes-text").load(loadString);
		$(".head").addClass('bounce animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
			function(){
				      $(this).removeClass('bounce animated');
				    });
		$(".robo-quotes").addClass('fadeInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
			function(){
				      $(this).removeClass('fadeInRight animated');
				    });
}
function LoadSource(){
		$("#feature-menu button").click(function() {	
			$("#feature-menu button").removeClass('active');
			$(this).addClass('active');
			$(".panel-footer style").empty();		
			myCodeMirrorOut.setValue("");
			var feature = $(this).text().toLowerCase();
			var loadString = 'features/'+features+'.html #'+$.trim(feature);
			$("#feature-code").load(loadString, function(){
				myCodeMirror.setValue($.trim($("#feature-code div").text()));
			});
			BlaBla(feature+'-section');
		});
}	
function ShowSelectors(){
	$(".robo-quotes").delegate('.label', 'click', function() {
		$(".panel-selectors").toggleClass('show');
		$(".label").html('clicking on the robo\'s head gives the same result');
	});
	$(".head").click(function() {
		$(".panel-selectors").toggleClass('show');
	});
}
function ConvertBlaBla(){
    var feature = $.trim($(".features .active").text().toLowerCase())
    var currentPhrase = features + feature;
    if(currentPhrase == "mixinsfunctions"){
        BlaBla(feature+'-section', '-functions');
    }
}
