//jQuery Custom Plugin Template

//create a private scope
(function($){

	//create jQuery function
	$.fn.formValidation = function(){
		
		//return the wrapped set and loop through the set and apply functionality to each member of the set
		return this.each(function(){
			
			//set variables references for all the various form elements;
	var $contactForm = $(this),
	$name = $contactForm.find("#name"),
	$email = $contactForm.find("#email"),
	$subject = $contactForm.find("#subject"),
	$message = $contactForm.find("#message"),
	$spam = $contactForm.find("#spam"),
	$formFields = $contactForm.find("input:text, textarea"),
	$status = $contactForm.find("#status"),
	$resetBtn = $contactForm.find("input:reset");
	
	//initialise
	$status.hide();
	
	/*submit handler for contact form*/
	$contactForm.submit(function(e) {	
			
		//prevent default form submit action
		e.preventDefault();
		
		//clear all error borders from form fields
		$formFields.removeClass("error-focus");
		
		//check required fields are not empty and that the email address is valid
		if($name.val()==""){
			
				setStatusMessage("Please Enter Your Name");
				$name.setFocus();
			
		}else if($email.val()==""){
			
				setStatusMessage("Please Enter Your Email Address");
				$email.setFocus();
			
		}else if(!isValidEmail($email.val())){
			
				setStatusMessage("Please Enter a Correct Email Address");
				$email.setFocus();
			
		}else if($subject.val()==""){
			
				setStatusMessage("Please Enter a Subject");
				$subject.setFocus();
			
		}else if($message.val()==""){
			
				setStatusMessage("Please Enter Your Message");
				$message.setFocus();
			
		}else if(!$spam.val()==""){
			
				setStatusMessage("Spam Attack!!");

		}else{
			
				//if all fields are valid then send data to the server for processing and didplay "please wait" message
				setStatusMessage("Email being sent... please wait");
			
				//serialize all the form field values as a string
				var formData = $(this).serialize();
				
				//alert(formData);
			
			//send serialized data string to the send mail php via POST method
			
			$.post("send-mail.php", formData, function(sent){
				
				if(sent=="error"){ 
				 
						setStatusMessage("Opps, something went wrong - message not sent");
					 
				  } else if(sent=="success"){
						
						setStatusMessage("Thanks "+$name.val()+", your message has been successfully sent");
						
						//clear form fields
						$formFields.val("");
						
				  }//end if else
			 
			},"html");
			
		}//end else

   });//end submit
	
	//click handler for reset button
	$resetBtn.click(function(){
			$status.slideUp("fast");
			$formFields.removeClass("error-focus");														
	});
	
	//helper functions
	function setStatusMessage(message){
		$status.html(message).slideDown("fast");
	}
	
	$.fn.setFocus = function(){
		return this.focus().addClass("error-focus");
	}
	
	function isValidEmail(email) {
		var emailRx = /^[\w\.-]+@[\w\.-]+\.\w+$/;
		return  emailRx.test(email);
	}

		}); //end each()
		

	};//end $.fn.customplugin

		  
})(jQuery);