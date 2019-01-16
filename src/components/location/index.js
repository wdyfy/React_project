import React from 'react';

const Location = () => {
	return (
		<div className="location_wrapper">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4691.058062817263!2d-113.51846933494939!3d53.52129389169907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x403ee3154732f7b5!2sTimms+Centre+for+the+Arts!5e0!3m2!1sen!2sca!4v1547446633807" 
			width="100%" 
			height="500px" 
			frameBorder="0"  
			allowFullScreen>
			</iframe>

			<div className="location_tag">
				<div>Location</div>
			</div>
		</div>
	);
};

export default Location;