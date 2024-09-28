import {useEffect} from "react";

export default function Count ({amount}) {
    useEffect(() => {
        return () => {
            document.title = `You clicked ${amount} times`;
        };
    }, [amount]);


    return(
        <div>
            <p>Count amount: <span>{amount}</span></p>
        </div>
    )
}
