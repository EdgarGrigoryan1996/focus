import smile from "../assets/img/smile.png"
export default function Header() {
	return (
		<div className="header-wrapper">
			<div className="hedare-block">
				<div className="header-title">
					<h1>Հեսա դու խփնվելու ես </h1><img className="smile" src={smile} alt="" />
				</div>
				<div className="instruction">
					<ul className="instruction-list">
						<li>Մտապահի ցանկացած երկնիշ թիվ (Օրինակ 19)</li>
						<li>Իրանից հանի իրա թվանշանները (Օրինակ 19 - 1 - 9 = 9)</li>
						<li>Գտի էտ թիվը և իրան համապատասխան սիմվոլը աղյուսակում</li>
						<li><b>Մտքումդ պատկերացրա էտ սիմվոլը ու սղմի քառակուսու վրա.</b>,այնտեղ կհայտնվի էտ սիմվոլը</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
