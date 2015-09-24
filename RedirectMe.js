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
    function calculate() {
			console.log(getHost());
    }
    return this.each(function() {
      calculate();
		});
	 };
}( jQuery ));
