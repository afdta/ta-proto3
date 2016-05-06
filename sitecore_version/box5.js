(function(){
	var dataFile = null;


	var setup = function(){
		this.name("Does accessibility affect financing?");
		this.description("Making sure cities and metro areas prioritize access to key destinations will do more than just affect the transportation assets they build and how they design land uses—it also has substantial implications for the financing of urban transportation.");
		//this.store("svg",this.slide.append("svg").style("width","100%").style("height","500px"));
		var wrap = this.slide.append("div").classed("c-fix", true);

		wrap.append("div").classed("left60", true).append("div").html("<p>In this case, we define financing in its broadest sense. Whether it is the selection of investments like new construction projects, the funding of operations like public bus service, or the cost recovery and pricing practices conducted within public agencies, enhancing accessibility requires serious consideration of how cities, regions, states, and national governments approach all issues related to transportation finance.</p> <p>As it stands, traditional economic analyses primarily use mobility factors like reducing congestion and raising vehicle speeds to estimate economic value. Many economists and transportation planners have pointed to the limitations of this focus, particularly since it biases against more vulnerable or lower income populations. However, replacing these mobility factors will require alternatives that appeal to both experts and to generalists. This is another reason that developing tools to measure accessibility are so important.</p> <p>The cost recovery and related pricing practices for public transport services and related infrastructure also continue to be a challenge for urban and transport planners. Road pricing, for example, continues to be separated from net benefits and costs, while political resistance to specific taxes (like tolls and fuel taxes) make it politically difficult to change public prices. Governments often consider cost recovery—or the difference between service revenues and costs—an isolated issue, rather than how transportation may generate additional benefits such as higher property values. </p> <p>The pricing and taxation issues become more complex as governments aim to achieve other objectives beyond cost recovery. Environmental and congestion pricing clearly can impact travel behavior and land use preferences, for example, but they also may have distributional effects on accessibility for vulnerable and low income populations. Boosting accessibility levels for all people will force governments to make difficult decisions about where to spend public subsidies, whether it is building affordable housing in one place or providing discounted transportation service in another. New innovations around subsidy transfers and transportation technology offer significant potential for the future.</p> <p>Ultimately these issues and the range of responses are dependent on the fiscal balances of countries and local governments. This is where the concerns of local autonomy and functional devolution in land and transport management versus fiscal autonomy for taxation and revenue raising are critical.</p> <p></p> <p></p> ");

		wrap.append("div").classed("right40", true).append("div").html("<p>... cordon charges get reinvested in the local system (London or Stockholm) or an attempt to better subsidize informal transit (developing world) ... </p>");

	};
	var redraw = function(){
		//no-op
	}

	TransitAccess.addView(setup, redraw, dataFile);

})();


