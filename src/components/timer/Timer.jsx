import React from "react";
import styles from "./timer.module.scss";
import Countdown from "react-countdown";
import Time from "./Time";

function Timer() {
	// Random component
	const Completion = () => <span>You are good to go!</span>;

	// Renderer callback with condition
	const renderer = ({ days, hours, minutes, seconds, completed }) => {
		if (completed) {
			// Render a completed state

			return <Completion />;
		} else {
			// Render a countdown
			return (
				<Time days={days} hours={hours} minutes={minutes} seconds={seconds} />
			);
		}
	};
	return (
		<div className={styles.countdown}>
			{/* they use millisecond so pass your date as milliseconds and you can get the formula below */}
			{/* 1000 milliseconds * 60 seconds * 60 minutes * 24 how many Days */}
			<Countdown date={Date.now() + 6739200000} renderer={renderer} />,
		</div>
	);
}

export default Timer;
