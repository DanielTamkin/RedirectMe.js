/*TakeMeTo.js - by Danieltamkin*/
/*Redirect Somewhere else*/
(function( $ ) {
	$.fn.centerThis = function(data) {
    $this = $(this);
    	datacheck($data);
    	/*data*/
    	function datacheck(data){
    	  $data = datascrub(data);
    	}
    	function datatemplate(){
    	  return data = {
    	    content: $this,
    	    sanitize: true,
    			cull: true,
    			images: true
    			compile: true
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
    function redirect() {
      var fullHref     = window.location.href,
          host         = window.location.host,
          protocol     = window.location.protocol,
          splitAddress = protocol+"//"+host+"/about/";
          /*indexOf      = fullHref.indexOf(splitAddress),
          splitURI     = fullHref.replace(splitAddress, "");
          splitURI      =*/
      window.location.href = splitAddress;
    }
    return this.each(function() {
      redirect();
		});
	 };
}( jQuery ));
