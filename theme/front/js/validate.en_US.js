/*
 * validate.js 1.2
 * Copyright (c) 2012 Rick Harrison, http://rickharrison.me
 * validate.js is open sourced under the MIT license.
 * Portions of validate.js are inspired by CodeIgniter.
 * http://rickharrison.github.com/validate.js
 */

(function(g,n,f){var i={
	messages:{
		required: 'This field is required.',
		matches: 'The %s field does not match the %s field.',
		valid_email: 'The %s field must contain a valid email address.',
		valid_emails: 'The %s field must contain all valid email addresses.',
		min_length: 'The %s field must be at least %s characters in length.',
		max_length: 'The %s field must not exceed %s characters in length.',
		exact_length: 'The %s field must be exactly %s characters in length.',
		greater_than: 'The %s field must contain a number greater than %s.',
		less_than: 'The %s field must contain a number less than %s.',
		alpha: 'The %s field must only contain alphabetical characters.',
		alpha_numeric: 'The %s field must only contain alpha-numeric characters.',
		alpha_dash: 'The %s field must only contain alpha-numeric characters, underscores, and dashes.',
		numeric: 'The %s field must contain only numbers.',
		integer: 'The %s field must contain an integer.',
		decimal: 'The %s field must contain a decimal number.',
		is_natural: 'The %s field must contain only positive numbers.',
		is_natural_no_zero: 'The %s field must contain a number greater than zero.',
		valid_ip: 'The %s field must contain a valid IP.',
		valid_base64: 'The %s field must contain a base64 string.',
		valid_credit_card: 'The %s field must contain a vaild credit card number',
		is_file_type: 'The %s field must contain only %s files.',
		valid_url: 'The %s field must contain a valid URL.'
	},
callback:function(t){}};
var l=/^(.+?)\[(.+)\]$/,
    c=/^[0-9]+$/,
    a=/^\-?[0-9]+$/,
    s=/^\-?[0-9]*\.?[0-9]+$/,
    m=/^[a-zA-Z0-9.!#$%&amp;'*+-/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    b=/^[a-z]+$/i,
    k=/^[a-z0-9]+$/i,
    o=/^[a-z0-9_-]+$/i,
    p=/^[0-9]+$/i,
    j=/^[1-9][0-9]*$/i,
    r=/^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,
    h=/[^a-zA-Z0-9\/\+=]/i,
    e=/^[\d\-\s]+$/;
var q = function(v,t,y){
            this.callback=y||i.callback;
            this.errors=[];
            this.fields={};
            this.form=n.forms[v]||{};
            this.messages={};
            this.handlers={};
            for(var u=0,x=t.length;u<x;u++)
            {
                var w=t[u];
                if(!w.name||!w.rules){continue}
                this.fields[w.name]={name:w.name,display:w.display||w.name,rules:w.rules,id:null,type:null,value:null,checked:null}}
                this.form.onsubmit=(function(z){return function(A){try{return z._validateForm(A)}catch(B){}}})(this)},d=function(v,t){var u;if((v.length>0)&&(v[0].type==="radio")){for(u=0;u<v.length;u++){if(v[u].checked){return v[u][t]}}return}return v[t]};q.prototype.setMessage=function(u,t){this.messages[u]=t;return this};q.prototype.registerCallback=function(t,u){if(t&&typeof t==="string"&&u&&typeof u==="function"){this.handlers[t]=u}return this};q.prototype._validateForm=function(v){this.errors=[];for(var u in this.fields){if(this.fields.hasOwnProperty(u)){var w=this.fields[u]||{},t=this.form[w.name];if(t&&t!==f){w.id=d(t,"id");w.type=(t.length>0)?t[0].type:t.type;w.value=d(t,"value");w.checked=d(t,"checked")}this._validateField(w)}}if(typeof this.callback==="function"){this.callback(this.errors,v)}if(this.errors.length>0){if(v&&v.preventDefault){v.preventDefault()}else{return false}}return true};q.prototype._validateField=function(A){var B=A.rules.split("|");if(A.rules.indexOf("required")===-1&&(!A.value||A.value===""||A.value===f)){return}for(var y=0,v=B.length;y<v;y++){var u=B[y],w=null,z=false,x=l.exec(u);if(x){u=x[1];w=x[2]}if(typeof this._hooks[u]==="function"){if(!this._hooks[u].apply(this,[A,w])){z=true}}else{if(u.substring(0,9)==="callback_"){u=u.substring(9,u.length);if(typeof this.handlers[u]==="function"){if(this.handlers[u].apply(this,[A.value])===false){z=true}}}}if(z){var t=this.messages[u]||i.messages[u],C="An error has occurred with the "+A.display+" field.";if(t){C=t.replace("%s",A.display);if(w){C=C.replace("%s",(this.fields[w])?this.fields[w].display:w)}}this.errors.push({id:A.id,name:A.name,message:C,rule:u});break}}};q.prototype._hooks={required:function(u){var t=u.value;if((u.type==="checkbox")||(u.type==="radio")){return(u.checked===true)}return(t!==null&&t!=="")},matches:function(v,u){var t=this.form[u];if(t){return v.value===t.value}return false},valid_email:function(t){return m.test(t.value)},valid_emails:function(v){var t=v.value.split(",");for(var u=0;u<t.length;u++){if(!m.test(t[u])){return false}}return true},min_length:function(u,t){if(!c.test(t)){return false}return(u.value.length>=parseInt(t,10))},max_length:function(u,t){if(!c.test(t)){return false}return(u.value.length<=parseInt(t,10))},exact_length:function(u,t){if(!c.test(t)){return false}return(u.value.length===parseInt(t,10))},greater_than:function(t,u){if(!s.test(t.value)){return false}return(parseFloat(t.value)>parseFloat(u))},less_than:function(t,u){if(!s.test(t.value)){return false}return(parseFloat(t.value)<parseFloat(u))},alpha:function(t){return(b.test(t.value))},alpha_numeric:function(t){return(k.test(t.value))},alpha_dash:function(t){return(o.test(t.value))},numeric:function(t){return(s.test(t.value))},integer:function(t){return(a.test(t.value))},decimal:function(t){return(s.test(t.value))},is_natural:function(t){return(p.test(t.value))},is_natural_no_zero:function(t){return(j.test(t.value))},valid_ip:function(t){return(r.test(t.value))},valid_base64:function(t){return(h.test(t.value))},valid_credit_card:function(x){if(!e.test(x.value)){return false}var y=0,w=0,t=false;var u=x.value.replace(/\D/g,"");for(var z=u.length-1;z>=0;z--){var v=u.charAt(z),w=parseInt(v,10);if(t){if((w*=2)>9){w-=9}}y+=w;t=!t}return(y%10)==0},is_file_type:function(y,w){if(y.type!=="file"){return true}var v=y.value.substr((y.value.lastIndexOf(".")+1)),z=w.split(","),x=false,u=0,t=z.length;for(u;u<t;u++){if(v==z[u]){x=true}}return x}};g.FormValidator=q})(window,document);