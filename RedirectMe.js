/*TakeMeTo.js - by Danieltamkin*/
/*Redirect Somewhere else*/
(function( $ ) {
	$.fn.RedirectMe = function($data) {
    $this = $(this);
    	datacheck($data);
  /*< data*/
    	function datacheck(data){
    	  $data = datascrub(data);
    	}
    	function datatemplate(){
    	  return data = {
    	    to: null,
					condition: false
    	  };
    	}
    	function datascrub(data){
    	  template = datatemplate();
    		if(data == undefined || data.length < 1){
    			data = template;
    		}
    		else{
    		  $.each(template,function(key,value){
    		    $.each(data,function(bravokey,bravovalue){
    		      if(bravokey == key){
    		        if(bravovalue.length === -1){
    		          value = value;
    		        }
    		        else{
    		          // do nothing, bravovalue is in bravokey
    		        }
    		      }
    		      else{
    		        if(!(key in data)){// that key doesnt exist? make it.
    		          data[key] = value;
    		        }
    		      }
    		    });
    		  });
    		}
    		return data;
    	}
	/*> get*/
		function getHost(){
      var host         = window.location.host,
          protocol     = window.location.protocol;
			if(protocol == "file:"){
				return "";
			}
			else{
				return protocol+"//"+host;
			}
		}
		function getURI(){
			var fullHref     = window.location.href,
					fullURI      = fullHref.replace(getHost(), "");
			return fullURI;
		}
		function condition(){
			var host 	= getHost(),
					URI 	= getURI();
			// compare and run.
			// used at later date
		}
		function redirect(){
			var redirectto = getHost()+$data.to;
			console.log(redirectto);
			window.location.href = redirectto;
		}
    function calculate() {
			var host 	= getHost(),
					URI 	= getURI();
			if($data.to == null){
				console.log("RedirectMe - ERROR: no 'to' address, this is an error on your part.");
			}
			else{
				if($data.condition == false){
					redirect();
				}
				else{
					// condition did its thing, all is well.
				}
			}
    }
    return this.each(function() {
      calculate();
		});
	 };
}( jQuery ));
