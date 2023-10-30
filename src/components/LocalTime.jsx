import React from 'react';

class LocalTimeFromUTC extends React.Component {
  render() {
    // Get start and end times from props
    let startTime = new Date(Date.UTC(this.props.year, this.props.month - 1, this.props.day, this.props.startHour, this.props.startMinute));
    let endTime = new Date(Date.UTC(this.props.year, this.props.month - 1, this.props.day, this.props.endHour,this.props.endMinute));

    // Get user's timezone
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	
	// Get user's local from browser
    const userLocale = navigator.language || navigator.userLanguage; 	

    // Construct ISO date string for link (YYYYMMDDTHHMMSS)
	const isoDateString = `${this.props.year}${String(this.props.month).padStart(2,'0')}${String(this.props.day).padStart(2,'0')}T${String(this.props.startHour).padStart(2,'0')}${String(this.props.startMinute).padStart(2,'0')}00`;

    return (
		<span> <b>{startTime.toLocaleDateString('en-US', {weekday: 'long',  month: 'short',day: 'numeric', year: 'numeric' })} from  {startTime.toLocaleTimeString(userLocale, { hour: '2-digit', minute:'2-digit', })} to  {endTime.toLocaleTimeString(userLocale, { hour: '2-digit', minute:'2-digit', })}</b>, {timeZone} time (<a href={`https://www.timeanddate.com/worldclock/converter.html?iso=${isoDateString}&p1=tz_hast&p2=224&p3=179&p4=133&p5=37&p6=176&p7=tz_hkt&p8=240`}>click for more time zones</a>)</span>
    );

  }
}

export default LocalTimeFromUTC;
