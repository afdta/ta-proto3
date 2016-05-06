#Parse text, convert to javascript string


readFormat <- function(dir, infile, outfile){
  lines <- readLines(paste(dir, infile, sep="/"))
  
  #remove and escape special characters
  rm1 <- gsub("“|”", '\\\\"', lines)
  rm2 <- gsub("’|'|'", "\\\\'", rm1)
  
  final <- paste0("<p>", rm2, "</p>")
  
  writeLines(final, con = paste(dir, outfile, sep="/"), sep=" ")
}

readFormat("~/Projects/Brookings/DataViz/volvo-transit-access/sitecore_version/content", "Box 1_Draft.txt", "Box1.html")

readFormat("~/Projects/Brookings/DataViz/volvo-transit-access/sitecore_version/content", "Box 2_Draft.txt", "Box2.html")
readFormat("~/Projects/Brookings/DataViz/volvo-transit-access/sitecore_version/content", "Box 3_Draft.txt", "Box3.html")
readFormat("~/Projects/Brookings/DataViz/volvo-transit-access/sitecore_version/content", "Box 4_Draft.txt", "Box4.html")
readFormat("~/Projects/Brookings/DataViz/volvo-transit-access/sitecore_version/content", "Box 5_Draft.txt", "Box5.html")
readFormat("~/Projects/Brookings/DataViz/volvo-transit-access/sitecore_version/content", "Box 6_Draft.txt", "Box6.html")


readFormat("~/Projects/Brookings/DataViz/volvo-transit-access/sitecore_version/content", "160407_Sidebars.txt", "Sidebars.html")



