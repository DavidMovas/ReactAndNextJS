import CountButton from "./CountButton.jsx";

export default function ButtonContainer({setCount, locked}) {
    return (
        <div className="button-container">
            <CountButton type="minus" setCount={setCount} locked={locked}/>
            <CountButton type="plus" setCount={setCount} locked={locked}/>
        </div>
    )
}



