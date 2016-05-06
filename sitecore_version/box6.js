(function(){
	var dataFile = null;


	var setup = function(){
		this.name("What governance challenges are posed in facilitating urban accessibility?");
		this.description("As regions look to develop a more accessible urban environment, governance is perhaps the single most critical, cross-cutting issue. ");
		//this.store("svg",this.slide.append("svg").style("width","100%").style("height","500px"));
		
		var wrap = this.slide.append("div").classed("c-fix", true);

		wrap.append("div").classed("left60", true).append("div").html("<p>Urban governance emerges from interplay between the values of a society (its ideals, objectives, priorities) and the expertise and interests of the public and private actors. Realization of good urban governance requires finding the right balance between often competing objectives, technical requirements and interests, while at the same time overcoming coordination problems within and between dispersed public and private actors. </p> <p>Urban accessibility is one of the myriad ideals that the community wishes to achieve. The public actors— the implementers of this ideal—face the challenge of defining and generating consensus on a coherent accessibility objective and devising means of its achievement. </p> <p>Strategic governance for achieving accessibility requires a combination of coordinated actions across urban land use (e.g. housing policy), transportation planning and regulation and financing of investment and operations as well as pricing and cost recovery. This is a particularly daunting task given that intended accessibility benefits begin to accrue over the long-run (by design), while costs can be immediate and more visible. This vision for long-range planning can be at odds with the short-run horizons of elected officials, and requires institutional protections, such as provisions for transparency and timely information disclosure processes.  </p> <p>Furthermore, urban areas are characterized by overlapping jurisdictional and functional purview of local, sub-national and national governing entities. The de-facto position in many urban areas has been one of organizational and political silos. As a result, various government entities often suffer from coordination failures in delivery of urban services. For example, transportation agencies often focus on moving vehicles faster at the exclusion of other goals, while land use planning agencies may aim to encourage denser development. In this example, there is little consideration of spillover impacts from their isolated decision.</p> <p>Governance reforms are, thus, crucial to boosting accessibility and coordinating action across sectors and giving voice to the dispersed stakeholders. It will require new government regulations as well as fiscal space to implement changes to the institutional setup, for example, constitution of small sized transportation analysis zones, establishment of consistent standards on financing and selection of projects as well as robust accessibility-based measures.</p> <p>This broader perspective to urban governance that takes into account the interplay between civic values as well as public and private interests demonstrates that a perfect model for urban governance may not exist in both advanced and developing-countries context. However, developing a common framework to account for the diverse institutional processes that lead to urban access can help in analyzing the local context of accessibility issues and options for applicability of alternative approaches. </p> ");

		wrap.append("div").classed("right40", true).append("div").html("<p>Box 6 Sidebar</p>");

	};
	var redraw = function(){
		//no-op
	}

	TransitAccess.addView(setup, redraw, dataFile);

})();


