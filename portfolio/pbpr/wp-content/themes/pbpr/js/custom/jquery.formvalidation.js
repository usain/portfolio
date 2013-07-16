//jQuery Custom Plugin Template

//create a private scope
(function($){

	//create jQuery function
	$.fn.formvalidation = function(){
		
		//return the wrapped set and loop through the set and apply functionality to each member of the set
		return this.each(function(){
			
			var $contactForm = $(this);
			var $status = $contactForm.find("#status");
			var $formFields = $contactForm.find("input:text,textarea");
			var $name = $contactForm.find("#name");
			var $email = $contactForm.find("#email");
			var $subject = $contactForm.find("#subject");
			var $message = $contactForm.find("#message");
			var $spam = $contactForm.find("#spam");
			var $resetBtn = $contactForm.find("input:reset");
			
			//initialise
			$status.hide();
			
			$contactForm.submit(function(e){
				
				e.preventDefault();
				
				$formFields.removeClass("error-focus");
				
				if($name.val() === ""){
					
					$name.focus().addClass("error-focus");
					setStatusMessage("Please Enter Your Name!");
					
				}else if($email.val()===""){
					
					$email.focus().addClass("error-focus");
					setStatusMessage("Please Enter your email address");
					
				}else if(!isValidEmail($email.val())){
					
					$email.focus().addClass("error-focus");
					setStatusMessage("Please enter a correct email address");
					
				} else if($subject.val() === ""){
					
					$subject.focus().addClass("error-focus");
					setStatusMessage("Please Enter Your Subject!");
					
				}else if($message.val()===""){
					
					$message.focus().addClass("error-focus");
					setStatusMessage("Please Enter a Message");
					
				}else if(!$spam.val()===""){
					
					setStatusMessage("Spam Attack!");
					
				}else{
					
					//send the email
					setStatusMessage("Email being sent... please wait");
					var formData = $(this).serialize();
					
					//alert(formData);
					
					$.post("/portfolio/03/wp-content/themes/pbpr/send-mail.php", formData, function(sent){
						
						if(sent==="success"){
							
							setStatusMessage("Thanks "+$name.val()+", your message has been successfully sent");
							$formFields.val("");
						}else{
							
							setStatusMessage("Opps, something went wrong - message not sent");
						}
						
					}, "html");
				}
				
			});
			
			$resetBtn.click(function(){
				$status.slideUp("fast");
				$formFields.removeClass("error-focus").val("");							
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