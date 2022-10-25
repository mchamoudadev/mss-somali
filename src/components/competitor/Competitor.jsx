import styles from "./competitor.module.scss";
import { MdOutlineHowToVote } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { handleModal } from "../../features/modal/modalSlice";
import { setCurrentCompetitor } from "../../features/competitors/competitorsSlice";

function Competitor({ competitor }) {
	const backgroundStyle = {
		width: "100%",
		// height: "500px",
		background: `linear-gradient(0deg,#128b4871,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),url(${competitor.Photo})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};

	const dispatch = useDispatch();

	const voteNow = () => {
		dispatch(setCurrentCompetitor(competitor));
		dispatch(handleModal());
	};

	return (
		<div className={styles.competitor} style={backgroundStyle}>
			<div className={styles.info}>
				<span className={styles.name}>
					{competitor.FirstName + " " + competitor.LastName}
				</span>
				<span className={styles.state}>{competitor.RepresentingState}</span>
				<span className={styles.vote_count}>
					Total Votes : {competitor.NumberofVotes}
				</span>
			</div>

			<div className={styles.vote} onClick={voteNow}>
				<MdOutlineHowToVote className={styles.vote_icon} />
			</div>

			{/* <img src={competitor.Photo} alt={competitor.FirstName} /> */}
		</div>
	);
}

export default Competitor;
