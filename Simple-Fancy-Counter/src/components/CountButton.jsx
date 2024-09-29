import {MinusIcon, PlusIcon} from "@radix-ui/react-icons";

export default function CountButton({type, setCount, locked}) {

    const handleClick = (e) => {
        setCount((prevCount) => {
            const count = prevCount + (type === "plus" ? 1 : -1);
            return count <= 0 ? 0 : (count >= 5 ? 5 : count);
        });

        e.currentTarget.blur();
    }

    return (
        <button disabled={locked} className="count-btn">
            {
                type === "minus" ?
                    (<MinusIcon onClick={handleClick} className="count-btn-icon" />) :
                    (<PlusIcon onClick={handleClick} className="count-btn-icon" />)
            }
        </button>
    )
}