	function show_error(el,msg){
            var elto= $('#input_'+el);
                elto.tooltip({title:msg,placement:"top",trigger:"manual",template:'<div class="tooltip tooltip-error"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'}).tooltip("show");
                elto.focus();
                setTimeout(function(){elto.tooltip("destroy")},5000)};
	
	$(document).ready(function() {

	// form_dominio 
	var validator_dominio =    new FormValidator("dominio",[{name:"nombre",display:"Full Name",rules:"required|max_length[80]"},
			{name:"correo",display:"E-mail",rules:"required|valid_email"},
			{name:"organizacion",display:"Organization Name",rules:"required|max_length[100]"},
			
			{name:"facnombre",display:"Contact name",rules:"required|min_length[3]|max_length[50]"},
			{name:"facorganizacion",display:"Name of Organization",rules:"required|min_length[3]|max_length[50]"},
			{name:"facdireccion",display:"Address",rules:"required|min_length[3]|max_length[50]"},
			{name:"facciudad",display:"City",rules:"required|min_length[3]|max_length[50]"},
			{name:"facpostal",display:"Postal code",rules:"required|min_length[3]|max_length[50]"},
			{name:"facnif",display:"Identification Number",rules:"required|min_length[3]|max_length[50]"},
			{name:"acepto_ppd",display:"Policies",rules:"required|callback_check_politicas"},
			{name:"facemail",display:"E-mail",rules:"required|valid_email"},
			{name:"acepto_ppd",display:"Policy",rules:"required|callback_check_politicas"}],

	function(er,ev){if(er.length>0){ ev.preventDefault();show_error(er[0].name,er[0].message);}else document.dominio.submit();});
	// form_hosting 
	var validator_hosting = new FormValidator("hosting",[
			{name:"dominio",display:"Domain",rules:"required"},
			{name:"nombre",display:"Full Name",rules:"required|max_length[80]"},
			{name:"correo",display:"E-mail",rules:"required|valid_email"},
			{name:"direccion",display:"Address",rules:"required"},
			{name:"cp",display:"Postal code",rules:"required"},
			{name:"ciudad",display:"City",rules:"required"},
			{name:"nif_cif",display:"Nif - Cif",rules:"required"},
			{name:"contacto",display:"Contact",rules:"valid_email"},
			{name:"acepto_ppd",display:"Policy",rules:"required|callback_check_politicas"}
	  ],

	function(er,ev){if(er.length>0){ ev.preventDefault();show_error(er[0].name,er[0].message);}else document.hosting.submit();});


	 var validator_domainsearch = new FormValidator("DomainSearch",[
		{name:"domain",display:"Domain",rules:"required|alpha_numeric|max_length[80]"}
	],

	function(er,ev){if(er.length>0){ ev.preventDefault();show_error(er[0].name,er[0].message);}else document.hosting.submit();});

	validator_dominio.registerCallback('check_politicas', function(value) {

		if (jQuery('#input_acepto_ppd').is(':checked')) {
			return true;
		}
		return false;
	})
	.setMessage('check_politicas', 'You must accept the security policy');

	validator_hosting.registerCallback('check_politicas', function(value) {

		if (jQuery('#input_acepto_ppd').is(':checked')) {
			return true;
		}

		return false;
	})
	.setMessage('check_politicas', 'You must accept the security policy');
})