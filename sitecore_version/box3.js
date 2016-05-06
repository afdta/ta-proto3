(function(){
	var dataFile = null;


	var setup = function(){
		this.name("Can we measure accessibility?");
		this.description("Performance measures help policymakers and engineers—among numerous other stakeholders—determine how well transportation networks serve their regions.");
		//this.store("svg",this.slide.append("svg").style("width","100%").style("height","500px"));
		
		var wrap = this.slide.append("div").classed("c-fix", true);

		wrap.append("div").classed("left60", true).append("div").html("<p>Worldwide the tendency is to narrowly focus on measuring mobility to make such assessments. Measures of congestion and other indicators, such as level of service (LOS), have become the preferred method to locate inefficiencies along specific infrastructure segments and to determine areas for capacity expansion. </p> <p>By continually relying on these measures, regions overlook the broader set of factors influencing travel behavior and related urban growth trends. For example, they may not closely track how land use patterns influence transportation demand.  In contrast, implementing accessibility-based performance measures can allow regions to pursue more coordinated objectives around economic opportunity, social equity, urban form, and fiscal health.</p> <p>The issue is that measuring accessibility is not easy. It requires extensive data inputs, including transportation information like road locations and transit services, zoning maps and demographic information for neighborhoods, and ideally information around user prices and long-run maintenance costs. These data requirements alone limit which cities could generate such measures, especially in developing countries. The outputs aren\'t necessarily easy to translate for interested audiences, either. Saying congestion is getting better or worse is now deeply embedded into global culture, but it\'s more nuanced to reflect the travel time, price, and modal choices the average resident faces when looking to access destinations. </p> <p>Fortunately, research is increasingly showing a path forward. Academics are introducing new measures that incorporate land use, pricing, demographics, and other information in different ways. Innovations in computer software can now evaluate the accessibility impacts of transportation investments and land use changes in less computational time, and the software itself is getting cheaper. Even a select group of cities and countries adopted specific accessibility measures within their governance frameworks, starting to create a feedback loop of how certain measures work in practice.</p> <p>Yet, until accessibility-based tools are easier to understand and more widely available and adopted, accessibility measures will likely struggle to replace the prevailing mobility-first approach in many regions. </p> <p></p> ");

		wrap.append("div").classed("right40", true).append("div").html("<p>(Isochrones and software)</p> <p>The emerging interest in accessibility concepts... </p> <p></p> ");

	};
	var redraw = function(){
		//no-op
	}

	TransitAccess.addView(setup, redraw, dataFile);

})();


