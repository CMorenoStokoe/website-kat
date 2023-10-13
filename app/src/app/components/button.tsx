/**
 * Button
 */

export const Button = (props: {
    text: string | JSX.Element,
    onClick: () => void, className?: string
}) => <button
    className={`
        p-1 bg-none text-white font-black 
        border border-4 border-double
        hover:bg-neutral-800 
        ${props.className}
    `}
    style={{ fontFamily: "Poiret One", color: "#E0CA8D", borderColor: "#E0CA8D" }}
    onClick={props.onClick}
>
        {props.text}
    </button>