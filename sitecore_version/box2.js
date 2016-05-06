(function(){
	var dataFile = null;


	var setup = function(){
		this.name("What is Accessibility?");
		this.description("Transportation boils down to one essential pursuit: connecting people to destinations. Whether it\'s a regional highway network or a local sidewalk, the goal is to get people where they need to go. An accessibility approach to transportation captures this overarching pursuit.");
		//this.store("svg",this.slide.append("svg").style("width","100%").style("height","500px"));
		
		var wrap = this.slide.append("div").classed("c-fix", true);

		wrap.append("div").classed("left60", true).append("div").html("<p>When academics and practitioners use the term accessibility, they\'re referencing how many valued destinations—such as jobs, shops, schools, or parks—individuals can reach in a given period of time. It does not discriminate based on a particular transportation mode, nor does it look solely at isolated transportation corridors. It considers pricing—both in terms of time taken and money spent—to connect people and places. And it very much recognizes how land use patterns affect how far people need to travel.  </p> <p>In theory, this approach allows public and private sector leaders to better align transportation with the economic and social outcomes local communities hope to achieve. It can ensure all individuals reach a reasonable amount of jobs, services, and recreation, often by multiple transportation modes and for an affordable price. It can also support broader urban planning goals, including safer, more convenient connections to local activity centers. Finally, it can promote more sustainable funding for transportation services, with an emphasis on capturing the value new investments create. </p> <p>Despite extensive research on the benefits of accessibility, however, moving from theory to practice has proven difficult. </p> <p>Cities and countries across the world have struggled to implement accessibility policies and programs. Part of the reason for this failure is the \"siloed\" and uncoordinated nature of inter-related disciplines. While transportation practitioners tend to focus more on vehicles than people, urban management professionals often neglect how residential, commercial, and industrial land use policies may impact individuals\' transportation decisions. At the same time, public and private leaders may make transportation policy, investment and service decisions without sufficiently considering how it will affect the time and costs faced by people across income groups. The way we organize governments only makes these problems worse; often there is no requirement for different agencies to collaborate closely on major decisions concerning transportation, land use, and budgeting. </p> <p>Moving forward, policymakers, practitioners and academicians will need to find ways to break this siloed approach to transportation decision-making and reframe their policies around accessibility principles. But before that can happen, there is a need to develop a common narrative on accessibility.  A key ingredient will be to develop the tools and techniques to measure accessibility performance.</p> <p></p> ");

		wrap.append("div").classed("right40", true).append("div").html("<p>Formalizing an Accessibility Approach</p> <p>While accessibility theory has so far outpaced practice, some global regions have begun implementing accessibility concepts within their broader urban development frameworks. The United Kingdom formerly required certain transportation accessibility standards to be applied when planning the locations of schools, hospitals, and other shared public assets, and the Netherlands (finish). American cities like Baltimore, Denver, and Seattle have adopted metrics related to employment access as measures of regional performance. The Moving to Access project will begin cataloging more of these real world examples, offering a set of reference points for any city looking to boost accessibility in their communities. </p> <p></p>");


	};
	var redraw = function(){
		//no-op
	}

	TransitAccess.addView(setup, redraw, dataFile);

})();


