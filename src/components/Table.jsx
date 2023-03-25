import { useState } from "react"

export default function Table() {

	const symbols = ["!", "@", "#", "%", "&", "^", ")", "$", "~", "A", "E", "L", "w", "S", "H", "P", "O", "J", "G", "F", "D", ":", "Q", "A", "X"]
	console.log(symbols.length)
	const [mySymbol, setMySymbol] = useState(symbols[Math.floor(Math.random() * 26)])
	let tableData = []
	let step = 99
	for (let i = 0; i <= 199; i++) {
		if (i % 2 === 0) {
			tableData[i] = step
			step--
		}
		else {
			tableData[i] = symbols[Math.floor(Math.random() * 24)]
		}
	}
	console.log(tableData);
	console.log(mySymbol)

	return (
		<div className="table-wrapper">
			<div className="cub" onClick={(e) => {
				console.log(e)
				e.target.innerHTML = mySymbol
			}}></div>
			<div className="table">
				{tableData.map((data, i) => {
					if (i == 37 || i == 55 || i == 73 || i == 91 || i == 109 || i == 127 || i == 145 || i == 163 || i == 181) {
						console.log(i)
						return (
							<div className={i % 2 === 0 ? "table-number" : "table-symbol"}>{mySymbol}</div>
						)
					}
					else {
						return (
							<div className={i % 2 === 0 ? "table-number" : "table-symbol"}>{data}</div>
						)
					}

				})}
			</div>
		</div>
	)
}
