#!/bin/bash

# Read the tab separated file line by line

echo PWD $PWD

while IFS=$'\t' read -r field1 field2 field3 || [[ -n "$field1" ]]; do

    COACH_LOWER_CASE=$(echo "$field3" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
	FORMATTED_DATE=$(LC_TIME=en_US.utf8 date -d"$4" +'%d %b %Y')




    # Use each line to create a new mdx file with the same content as the template


sed "s/SIDEBAR_POSITION/$field2/g; s/TAGS/$field6/g; s/TITLE/$field4 - $field3 (Recording Coaching Call $FORMATTED_DATE)/g; s/COACH/$field3/g; s/COACH_LOWER_CASE/$COACH_LOWER_CASE/g; s/DESCRIPTION/$field5/g; s/YOUTUBE_ID/$field7/g" src/data/coaching-call-recording-page-template.mdx > "resources/coaching-call-recordings/${field1}-${COACH_LOWER_CASE}.mdx"
    



    # Use each line to create a showcard (requires imagemagick 
    ./src/utils/create_showcard.sh "src/data/showcard_baseimages/{$COACH_LOWER_CASE}-background.png" "$field4" "$field3" "$field1"

	convert "$1" \
	-pointsize 25 \
	-fill white \
	-gravity east \
	-font 'Courier-Bold' \
	-annotate +10-0 "Coaching Call Recording\n\n\n$2\n\n\n w/ $3\n$FORMATTED_DATE" \ "$4-$FORMATTED_COACH.jpg"

    # Use each line to 
    
done < "src/data/coaching_call_recordings.tsv"
