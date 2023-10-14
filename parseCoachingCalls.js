const matter = require('gray-matter')
const fs = require('fs-extra')
const glob = require('glob')
const path = require('path')

// Get all mdx files that don't start with _
glob('resources/recordings-coaching-calls/[!_]*.mdx', function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
	 const rawData = fs.readFileSync('src/data/predefinedCoachingCallTags.json')
    let coachingCallTagsData

    try {
      // Parse JSON data from file
      coachingCallTagsData = JSON.parse(rawData)
    } catch (e) {
      // If error occurs during parsing, initialize as empty object.
      console.error('Error parsing JSON file:', e)
      coachingCallTagsData = {}
    }
    const dataArr = []

    // Loop through each file
    for (let i = 0; i < files.length; i++) {
      // Read file as string
      const fileContent = fs.readFileSync(files[i], 'utf8')

      // Parse frontmatter from string
      const result = matter(fileContent)


      let previewPath = `/img/coachingCalls/${result.data.coach_lower_case}-cf-coaching-call.png`

      // Check if file exists, otherwise use generic image
      if (!fs.existsSync('static' + previewPath)) {
		  previewPath = '/img/coachingCalls/generic-cf-coaching-call.png'
      }

      // Create a new object based on parsed frontmatter and filename.
      const newDataObj = {
        title: result.data.title,
        date: result.data.date,
        description: result.data.description,
        tags: result.data.tags || [],

        preview: previewPath,

        website: `/resources/recordings-coaching-calls/${path.basename(files[i], '.mdx')}`,

        source: `/resources/recordings-coaching-calls/${path.basename(files[i], '.mdx')}`
      }

      dataArr.push(newDataObj)

	   newDataObj.tags.forEach(tag => {
        // Check if tag already exists in json data
        if (!coachingCallTagsData.hasOwnProperty(tag)) {
	  coachingCallTagsData[tag] = {
            label: tag.charAt(0).toUpperCase() + tag.slice(1),
            description: '',
            color: '#000000'
          }
        };
	   })
    }

    // Write JSON output to disk at /src/data/coachingCalls/
    fs.writeJson('src/data/coachingCalls.json', dataArr, { spaces: 2 })
	// Convert your data into entries
let entriesArray= Object.entries(coachingCallTagsData);

// Sort them based on key
//	  entriesArray.sort((a,b)=> a[1].label.localeCompare(b[1].label));
	  entriesArray.sort((a,b)=> {
   if(a[1].label.startsWith('Coach:') && !b[1].label.startsWith('Coach:')) return -1;
   else if(!a[1].label.startsWith('Coach:') && b[1].label.startsWith('Coach:')) return 1;
   else return a[0].localeCompare(b[0]);
});


// Convert sorted array back into object
let sortedCoachingCallsTag={};
for(let i=0;i<entriesArray.length;i++){
   sortedCoachingCallsTag[entriesArray[i][0]]=entriesArray[i][1];
}
    fs.writeJson('src/data/coachingCallTags.json', sortedCoachingCallsTag, { spaces: 2 })
  }
})
