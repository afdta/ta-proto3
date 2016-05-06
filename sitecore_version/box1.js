(function(){
	var dataFile = null;


	var setup = function(){
		this.name("Is the current urban transport model broken?");
		this.description("Years of study, research, and practice have tried to address a core problem in metropolitan areas: how can metropolitan transportation systems help people get where they need to go.");
		//this.store("svg",this.slide.append("svg").style("width","100%").style("height","500px"));
		
		var wrap = this.slide.append("div").classed("c-fix", true);

		wrap.append("div").classed("left60", true).append("div").html("<p>For several generations, urban transportation policy and practitioners favored an approach that prioritized \"mobility.\" That is, our metropolitan areas aimed to keep people and vehicles moving as fast as possible, reducing congestion and creating time savings in the process. Yet this \"mobility\" model included a built-in bias towards higher income users who could afford their own cars. </p> <p>Decades into a global push around mobility—often meaning major highway construction in both developed and developing economies—there is now a general sense that the transportation community\'s model of mobility-first planning and investment has largely failed to deliver on the broader urban goals relating to economic growth, social integration, and sustainable development. In the pursuit to move people faster, congestion still exists, household transportation expenses are up, and there are more roadways to maintain than ever.</p> <p>Transportation investments cannot be about just moving vehicles. The real goal for the builders of transportation systems should be similar to those of the individuals using them: to ensure residents can access a range of activities, such as jobs, in a reasonable amount of time at a reasonable cost. A city\'s ability to realize it\'s greatest benefit—the economic growth that comes from agglomeration—depends heavily on transport systems and related policies facilitating access, not simply mobility. </p> <p>As the world faces concerns about growing inequality, especially within cities, and the recently agreed United Nations Sustainable Development Goals (SDG\'s) recognize the role of infrastructure and the challenges of urbanization, there is an increasing need to confirm and address the perceived implications of a singularly focused \"mobility\" model. Has this model adequately responded to the access needs of lower income individuals? How have parallel policies to address congestion and environmental damage served accessibility goals across all segments of the population? Are local and national transportation models consistent with evolving policies and practices around urban land use? What are the implications for financing urban transportation systems and cost recovery policies for investment and operation?</p> <p>While the answers may vary between developed and developing countries and between land rich and land constrained cities, these questions are being asked across nations and regions. Moreover it requires a multifaceted, multi-sector understanding and approach including transport planners, urban management professionals and finance and fiscal affairs experts implying analytical as well as practical governance challenges.</p> ");

		wrap.append("div").classed("right40", true).append("div").html("<p>Moving beyond Congestion in California</p> <p>For many travelers, roadway congestion is often the most visible sign of a transportation system under stress. And for decades, public agencies\' natural response was to widen roads or build new ones in an effort to fit more vehicles in the same space. Yet researchers have known for decades that widening roads will not eliminate congestion. Often, wider roads may induce more people to drive, creating only more congestion in the long-run.</p> <p></p> <p>As governments begin to recognize congestion is impossible to eliminate, more will begin to set other objectives. California—the original global archetype for car culture—is replacing their congestion-related objectives with ones aimed to reduce vehicle miles traveled. (Global example). These examples will form the vanguard of a new, innovative approach to how the public approaches urban transportation.</p> <p></p>");


	};
	var redraw = function(){
		//no-op
	}

	TransitAccess.addView(setup, redraw, dataFile);

})();


