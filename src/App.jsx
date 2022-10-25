import styles from "./App.scss";
import Competitors from "./components/competitors/Competitors";
import Header from "./components/header/Header";
import PaymentModal from "./components/modal/PaymentModal";

import Timer from "./components/timer/Timer";

function App() {
	return (
		<div className={styles.app}>
			<PaymentModal />
			<Header />
			<Timer />
			<Competitors />
		</div>
	);
}

export default App;
