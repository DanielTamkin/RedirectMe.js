/*TakeMeTo.js - by Danieltamkin*/
/*Redirect Somewhere else*/
(function( $ ) {
	$.fn.RedirectMe = function($data) {
    $this = $(this);
    	datacheck($data);
    	/*data*/
    	function datacheck(data){
    	  $data = datascrub(data);
    	}
    	function datatemplate(){
    	  return data = {
    	    to: null,
					condition: false
    	  }
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
		function getHost(){
      var host         = window.location.host,
          protocol     = window.location.protocol;
			return protocol+host;
		}
		function getURI(){
			var fullHref     = window.location.href,
					fullURI      = fullHref.replace(getHost(), "");
			return fullURI;
		}
		function condition(){
			if($data.condition != false){
				var host 	= getHost(),
						URI 	= getURI();
			}
			else{
				return false;// tell calculate to not run me further.
			}
		}
    function calculate() {
			var host 	= getHost(),
					URI 	= getURI();
			if($data.to == null){
				// do nothing we cant.
			}
			else{
				if(condition() == false){
					window.location.href = host+$data.to;
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
