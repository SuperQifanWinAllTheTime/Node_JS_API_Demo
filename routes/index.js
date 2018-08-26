exports.index = function(req, res){
  res.render('hello_message', { hellomessage: 'Welcome to EQ Works 😎' });
};
exports.search = function(req, res,next){
	var url =require('url'); // get ulr 
	var q=url.parse(req.url,true);// process url
	var qdata=q.query;// get request from url
	var key=qdata.name;//get key words from request
	key=key.toLowerCase();// lower case the input
	var isfuzzy=0;// defult value 
	var dbquery="bad request";// query for database search
	var dbquerys= 0;// a value check we have mach result 
	//--------------------fuzzy search algo--------------------------
	if(/^(w|e|r|q|o|i|p)(r|e|q|w|o|i|p)/.test(key)){
		dbquery="EQ Works";
		dbquerys=1;
		if(/eq works/.test(key)){
			}else{
				isfuzzy=1;
			}
	}else if(/^(c|t|r|y|o|i|p)(n|i|o|p|c|v|x|r)/.test(key)){
		dbquery="CN Tower";
		dbquerys=2;
		if(/cn tower/.test(key)){
			
			}else{
				isfuzzy=1;
			}
	}else if(/^(n|b|m|f|d|g|s|a)(i|u|o|s|a)/.test(key)){
		dbquery="Niagara Falls";
		dbquerys=3;
		if(/niagara falls/.test(key)){
			
			}else{
				isfuzzy=1;
			}
	}else if(/^(v|c|b|h)(a|s|r|n)/.test(key)){
		dbquery="Vancouver Harbour";
		dbquerys=4;
		if(/vancouver harbour/.test(key)){
			
			}else{
				isfuzzy=1;
			}
	}
	//------------------------end fuzzy search algo---------------
	//------------------------set value --------------------------
	 req.sqlQuery = `
    SELECT date, hour, revenue, impressions, clicks
    FROM public.hourly_stats
    WHERE poi_id =`+ dbquerys+`
    ORDER BY revenue DESC
    LIMIT 5;
  ` 
  req.isResult=dbquerys;
  req.isfuzzy=isfuzzy;
  req.userInput=key;
  req.searchQ=dbquery;
  //--------------- call back -------------------------
  return next();
};