import scss from "./Cards.module.scss";

export const Cards = ({ state, setState }) => {
	return (
		<div className={scss.card}>
			{state.map((el) => (
				<div className={scss.render} key={el.id}>
					<img src={el.img} alt="photos" />
					<h3>{el.title}</h3>
					<p>{el.nameg}</p>
				</div>
			))}
		</div>
	);
};
