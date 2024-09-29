import Title from "./Title.jsx";
import Count from "./Count.jsx";
import ResetButton from "./ResetButton.jsx";
import CountButtons from "./CountButtons.jsx";

export default function Card() {
    return (
        <div>
            <Title/>
            <Count/>
            <ResetButton/>
            <CountButtons/>
        </div>
    )
}
