const matter = require('gray-matter');
const fs = require('fs-extra');
const glob = require("glob");
const path = require("path");

// Get all mdx files that don't start with _
glob("resources/materials/*.mdx", function (err, files) {
  if(err) {
    console.log("Error finding files: " + err)
  } else {
    let dataArr = [];
    
    // Loop through each file
    for(let i=0; i<files.length; i++) {
	 

      // Read file as string
      const fileContent = fs.readFileSync(files[i], 'utf8');

      // Parse frontmatter from string 
      const result = matter(fileContent);
	
      // Create a new object based on parsed frontmatter and filename.
      let newDataObj ={
        title: result.data.title,
        //date: result.data.date,
        description: result.data.description,
        tags: result.data.tags || [],
        preview: result.data.image,
        website: result.data.website || `/resources/materials/${path.basename(files[i], '.mdx')}`,
        source: result.data.external_link
       }

       dataArr.push(newDataObj);
      
    }

    fs.writeJson('src/data/materials.json', dataArr);
  }
});
