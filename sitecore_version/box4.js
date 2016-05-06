(function(){
	var dataFile = null;


	var setup = function(){
		this.name("What are the implications for land use policy?");
		this.description("No transportation decisions exist in a geographic vacuum. Instead, there is constant interplay between how cities and regions develop their land and where transportation infrastructure and services exist.");
		//this.store("svg",this.slide.append("svg").style("width","100%").style("height","500px"));
		
		var wrap = this.slide.append("div").classed("c-fix", true);

		wrap.append("div").classed("left60", true).append("div").html("<p>Regions with low density land uses and large amounts of highway infrastructure can expect more driving, while the opposite is true in high density locations with narrower roads and more transit and biking infrastructure. Of course, no region is a single expression of these extremes. Instead, global urban areas offer a mix of different densities, transportation infrastructure, and multimodal services that affect where people live, where they want to go, and how they choose to get around.</p> <p>In short: accessibility levels look different based on different regional combinations of land uses and transportation. Yet despite recognition of this vital interrelation, too often governments split land use and transportation decision-making between different public agencies. The net result is a built environment that may not promote accessibility for all populations. </p> <p>If we are to develop socially inclusive cities, incorporating accessibility measures that address the land/transport nexus for low-income populations is essential.  Due to the focus on mobility, a large share of public transportation investment is channeled primarily to people who can afford private automobiles and taxi services—and think little of how those investments impact land use. Similarly, national and local governments continue to pursue a variety of social or affordable housing policies with very limited concern for transport access.  From the hillside barrios in South America to the suburban banlieue in Paris to the slums in India, too many low-income households live in neighborhoods or informal settlements of concentrated poverty and face significant social exclusion—all of which is exacerbated by a lack of affordable transport.  </p> <p>The United Nations Conference on Housing and Sustainable Urban Development (Habitat III) in October, 2016 is one critical global effort to begin addressing these policy failures.  In preparation for establishing \"The New Urban Agenda,\" the urban development community is taking a fresh look at what has worked and what has failed as we strive to ensure sustainable cities in terms of environment and social inclusion.  Land use and transportation should be prominent in those discussions and an accessibility approach would help set critical objectives relating to the Sustainable Development Goals (SDGs).  </p> <p>Moving forward, more efforts will need to be targeted at the local and national levels to improve coordination between transportation and land use planning. For cities of all kinds—from mature ones with slower growth to the rapidly growing cities in developing regions—it\'s a vital ingredient to achieving socially inclusive and fiscally sustainable access.</p> <p></p> ");

		wrap.append("div").classed("right40", true).append("div").html("<p>Box 4 Sidebar</p>");

	};
	var redraw = function(){
		//no-op
	}

	TransitAccess.addView(setup, redraw, dataFile);

})();


