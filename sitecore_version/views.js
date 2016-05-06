(function(){
	var dataFile = null;


				//temp
				var scaleY = d3.scale.linear().domain([0,10]).range([200, 0]);
				var scaleX = d3.scale.linear().domain([0,10]).range([0, 600]);
				var y0 = function(obs){return scaleY(obs[1])}
				var y1 = function(obs){return scaleY(obs[1])+10}
				var x = function(obs){return scaleX(obs[0])}
				var line = d3.svg.area().x(x).y0(y0).y1(y1);
				var path = line([[0,0],[1,2]]);
				//console.log(path);

	var setup = function(){
		this.name("Paradigm shift","Accessibility versus mobility");
		this.description("Overview of the paradigm shift...");
		//this.store("svg",this.slide.append("svg").style("width","100%").style("height","500px"));
		this.slide.append("div").style({"width":"100%","margin-left":"0%"})
			.append("img").attr("src","v3_answer_selected.png").style({"width":"100%", "max-width":"940px"});

	};
	var redraw = function(){
		//var svg = this.store("svg");
		//svg.selectAll("path").data([path]).enter().append("path").attr("d",function(d,i){return d}).style("fill","red").style("stroke","red");
		//console.log(this.data());
		//console.log(this.changeEvent);
	}

	TransitAccess.addView(setup,redraw,dataFile);

})();



(function(){
	var dataFile = null;


				//temp
				var scaleY = d3.scale.linear().domain([0,10]).range([200, 0]);
				var scaleX = d3.scale.linear().domain([0,10]).range([0, 600]);
				var y0 = function(obs){return scaleY(obs[1])}
				var y1 = function(obs){return scaleY(obs[1])+10}
				var x = function(obs){return scaleX(obs[0])}
				var line = d3.svg.area().x(x).y0(y0).y1(y1);
				var path = line([[0,0],[1,2]]);
				//console.log(path);

	var setup = function(){
		this.name("Assessment","Assessing accessibility");
		this.description("This is how you measure accessibility...");
		//this.store("svg",this.slide.append("svg").style("width","100%").style("height","500px"));
		this.slide.append("div").style({"width":"100%","margin-left":"0%"})
			.append("img").attr("src","v3_answer_selected.png").style({"width":"100%", "max-width":"940px"});

	};
	var redraw = function(){
		//var svg = this.store("svg");
		//svg.selectAll("path").data([path]).enter().append("path").attr("d",function(d,i){return d}).style("fill","red").style("stroke","red");
		//console.log(this.data());
		//console.log(this.changeEvent);
	}

	TransitAccess.addView(setup,redraw,dataFile);

})();

(function(){
	var dataFile = null;


				//temp
				var scaleY = d3.scale.linear().domain([0,10]).range([200, 0]);
				var scaleX = d3.scale.linear().domain([0,10]).range([0, 600]);
				var y0 = function(obs){return scaleY(obs[1])}
				var y1 = function(obs){return scaleY(obs[1])+10}
				var x = function(obs){return scaleX(obs[0])}
				var line = d3.svg.area().x(x).y0(y0).y1(y1);
				var path = line([[0,0],[1,2]]);
				//console.log(path);

	var setup = function(){
		this.name("Barriers","Overcoming barriers");
		this.description("There are many barriers standing in the way...");
		//this.store("svg",this.slide.append("svg").style("width","100%").style("height","500px"));
		this.slide.append("div").style({"width":"100%","margin-left":"0%"})
			.append("img").attr("src","v3_answer_selected.png").style({"width":"100%", "max-width":"940px"});

	};
	var redraw = function(){
		//var svg = this.store("svg");
		//svg.selectAll("path").data([path]).enter().append("path").attr("d",function(d,i){return d}).style("fill","red").style("stroke","red");
		//console.log(this.data());
		//console.log(this.changeEvent);
	}

	TransitAccess.addView(setup,redraw,dataFile);

})();

(function(){
	var dataFile = null;


				//temp
				var scaleY = d3.scale.linear().domain([0,10]).range([200, 0]);
				var scaleX = d3.scale.linear().domain([0,10]).range([0, 600]);
				var y0 = function(obs){return scaleY(obs[1])}
				var y1 = function(obs){return scaleY(obs[1])+10}
				var x = function(obs){return scaleX(obs[0])}
				var line = d3.svg.area().x(x).y0(y0).y1(y1);
				var path = line([[0,0],[1,2]]);
				//console.log(path);

	var setup = function(){
		this.name("Land use","Land use");
		this.description("The built environment...");
		//this.store("svg",this.slide.append("svg").style("width","100%").style("height","500px"));
		this.slide.append("div").style({"width":"100%","margin-left":"0%"})
			.append("img").attr("src","v3_answer_selected.png").style({"width":"100%", "max-width":"940px"});

	};
	var redraw = function(){
		//var svg = this.store("svg");
		//svg.selectAll("path").data([path]).enter().append("path").attr("d",function(d,i){return d}).style("fill","red").style("stroke","red");
		//console.log(this.data());
		//console.log(this.changeEvent);
	}

	TransitAccess.addView(setup,redraw,dataFile);

})();


(function(){
	var dataFile = null;


				//temp
				var scaleY = d3.scale.linear().domain([0,10]).range([200, 0]);
				var scaleX = d3.scale.linear().domain([0,10]).range([0, 600]);
				var y0 = function(obs){return scaleY(obs[1])}
				var y1 = function(obs){return scaleY(obs[1])+10}
				var x = function(obs){return scaleX(obs[0])}
				var line = d3.svg.area().x(x).y0(y0).y1(y1);
				var path = line([[0,0],[1,2]]);
				//console.log(path);

	var setup = function(){
		this.name("Governance","Revising governance");
		this.description("Governance overview...");
		//this.store("svg",this.slide.append("svg").style("width","100%").style("height","500px"));
		this.slide.append("div").style({"width":"100%","margin-left":"0%"})
			.append("img").attr("src","v3_answer_selected.png").style({"width":"100%", "max-width":"940px"});

	};
	var redraw = function(){
		//var svg = this.store("svg");
		//svg.selectAll("path").data([path]).enter().append("path").attr("d",function(d,i){return d}).style("fill","red").style("stroke","red");
		//console.log(this.data());
		//console.log(this.changeEvent);
	}

	TransitAccess.addView(setup,redraw,dataFile);

})();

(function(){
	var dataFile = null;


				//temp
				var scaleY = d3.scale.linear().domain([0,10]).range([200, 0]);
				var scaleX = d3.scale.linear().domain([0,10]).range([0, 600]);
				var y0 = function(obs){return scaleY(obs[1])}
				var y1 = function(obs){return scaleY(obs[1])+10}
				var x = function(obs){return scaleX(obs[0])}
				var line = d3.svg.area().x(x).y0(y0).y1(y1);
				var path = line([[0,0],[1,2]]);
				//console.log(path);

	var setup = function(){
		this.name("Finance","Financing accessibility");
		this.description("Financial large infrastructure projects has traditionally...");
		//this.store("svg",this.slide.append("svg").style("width","100%").style("height","500px"));
		this.slide.append("div").style({"width":"100%","margin-left":"0%"})
			.append("img").attr("src","v3_answer_selected.png").style({"width":"100%", "max-width":"940px"});

	};
	var redraw = function(){
		//var svg = this.store("svg");
		//svg.selectAll("path").data([path]).enter().append("path").attr("d",function(d,i){return d}).style("fill","red").style("stroke","red");
		//console.log(this.data());
		//console.log(this.changeEvent);
	}

	TransitAccess.addView(setup,redraw,dataFile);

})();
