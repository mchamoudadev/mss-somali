import React from "react";
import styles from "./header.module.scss";

function Header() {
	return (
		<div>
			<header className={styles.header}>
				<ul>
					<li>
						<a className={styles.logo} href="#">
							MissSomali
						</a>
					</li>
					<li>
						<a href="#">All Competitors</a>
					</li>
				</ul>
			</header>
		</div>
	);
}

export default Header;
