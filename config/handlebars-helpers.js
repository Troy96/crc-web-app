module.exports = {
  	ifEquals: function(arg1, arg2, options){
    	return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
  	},
  	inc: function(arg1, options){
    	return parseInt(arg1) + 1;
  	}
}

