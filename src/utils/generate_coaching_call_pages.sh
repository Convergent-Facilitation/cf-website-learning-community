#!/bin/bash

# Read the tab separated file line by line


while IFS=$'\t' read -r field1 field2 field3 field4 field5 field6 field7 field8 || [[ -n "$field1" ]]; do

	echo $field1
	echo $field2
	echo $field3
	echo $field4
	echo $field5
	echo $field6
	echo $field7

	

    COACH_LOWER_CASE=$(echo "$field3" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
	FORMATTED_DATE=$(LC_TIME=en_US.utf8 date -d"$field1" +'%d %b %Y')

	echo $FORMATTED_DATE
	echo $COACH_LOWER_CASE

	echo -e "\n\n"



    # Use each line to create a new mdx file with the same content as the template


 sed "s/SIDEBAR_POSITION/$field2/g; s/DATE/$field1/g; s/TAGS/$FIELD_FAIL/g; s/TITLE/$field4 w\/ $field3 [$FORMATTED_DATE]/g; s/COACH/$field3/g; s/C_LOWER_CASE/$COACH_LOWER_CASE/g; s/DESCRIPTION/$field5/g; s/YOUTUBE_ID/$field6/g" src/data/coaching-call-recording-page-template.mdx > "resources/recordings-coaching-calls/${field1}-${COACH_LOWER_CASE}.mdx"
    


done < "src/data/coaching_call_recordings_list.tsv"
