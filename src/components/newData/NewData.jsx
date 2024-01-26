import { useEffect } from "react";
import { useState } from "react";
import { Cards } from "../cards/Cards.jsx";
import { Button } from "../ul/button/Button";
import scss from "./NewData.module.scss";
import { Input } from "../ul/input/Input.jsx";
export const NewData = () => {
	const [state, setState] = useState([
		{
			id: 1,
			img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/4ad7eb9b-7eb2-452f-b70b-6a9875c88acd/600x900",
			title: "Черная любовь",
			nameg: "Любовь",
		},
		{
			id: 2,
			img: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/cb9481d9-5786-4884-9879-3f1e9fd4fee7/600x900",
			title: "Первая Любовь",
			nameg: "Любовь",
		},
		{
			id: 3,
			img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/972b7f43-9677-40ce-a9bc-02a88ad3919d/600x900",
			title: "Мстители",
			nameg: "Фантастика",
		},
		{
			id: 4,
			img: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/731c4031-7389-44f4-8c15-f9f4e3b0ed90/600x900",
			title: "Человек паук",
			nameg: "Фантастика",
		},
		{
			id: 5,
			img: "https://thumbs.dfs.ivi.ru/storage6/contents/5/a/6df7e1b660c9ee0314628404adc365.jpg",
			title: "Демон",
			nameg: "Дорамы",
		},
		{
			id: 6,
			img: "https://thumbs.dfs.ivi.ru/storage31/contents/c/d/bb1df1c1b5cf02752867073c863e50.jpg",
			title: "Заводила Принцесса",
			nameg: "Дорамы",
		},
	]);
	const [resCards, setResCards] = useState([]);
	const [select, setSelect] = useState("Все");
	const [inputValue2, setInputValue2] = useState("");
	const [inputValue, setInputValue] = useState("");
	const [inputValue3, setInputValue3] = useState("");
	const handleCards = () => {
		const data = {
			id: Math.random(),
			img: inputValue2,
			title: inputValue,
			nameg: inputValue3,
		};
		setResCards([...resCards, data]);
		setState([...state, data]);
		setInputValue("");
		setInputValue2("");
		setInputValue3("");
	};
	useEffect(() => {
		console.log(select);
		if (select !== "Все") {
			const filtred = state.filter((el) => el.nameg === select);
			setResCards(filtred);
		} else {
			setResCards(state);
		}
	}, [select]);
	const deleteCards = (id) => {
		const filtredDelete = state.filter((item) => item.id === id);
		setState([...filtredDelete]);
		setResCards([...filtredDelete]);
	};

	console.log(state);
	return (
		<div className={scss.container}>
			<div className={scss.content}>
				<select
					className={scss.select}
					value={select}
					onChange={(e) => setSelect(e.target.value)}>
					<option value="Все">Все</option>
					<option value="Любовь">Любовь</option>
					<option value="Фантастика">Фантастика</option>
					<option value="Дорамы">Дорамы</option>
				</select>
				<div className={scss.formInputs}>
					<Input
						type="url"
						value={inputValue2}
						setData={setInputValue2}
						placeholder="ссылка кино"
					/>
					<Input
						type="text"
						value={inputValue}
						setData={setInputValue}
						placeholder="кино название"
					/>
					<Input
						type="text"
						value={inputValue3}
						setData={setInputValue3}
						placeholder="кино жанры"
					/>
					<Button onClick={handleCards}>Add</Button>
				<Button onClick={deleteCards}>delete</Button>
				</div>
			</div>
			<div className={scss.cardsDiv}>
				<Cards state={resCards} setState={setResCards} />
			</div>
		</div>
	);
};
