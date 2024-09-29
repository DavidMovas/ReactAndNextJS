import Title from "./Title.jsx";
import Count from "./Count.jsx";
import ResetButton from "./ResetButton.jsx";
import ButtonContainer from "./ButtonContainer.jsx";
import {useEffect, useState} from "react";

export default function Card() {

    const [count, setCount] = useState(0);
    const locked = count === 5;

    useEffect(() => {
        const handleKeydown = (event) => {
            if (event.code === 'Space') {
                setCount((prev) => {
                    return (prev + 1) <= 5 ? prev + 1 : 5;
                } );
            }
        }

        window.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
        }
    }, [count]);


    return (
        <div className={`card ${locked ? "card--limit" : ""}`}>
            <Title locked={locked}/>
            <Count count={count} />
            <ResetButton setCount={setCount}/>
            <ButtonContainer setCount={setCount} locked={locked}/>
        </div>
    )
}
