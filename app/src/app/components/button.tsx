/**
 * Button
 */

export const Button = (props: { text: string, onClick: () => void, className?: string }) => <button
    className={`
        p-1 bg-neutral-700 text-white
        border border-4 border-double border-neutral-800
        hover:bg-neutral-500
        ${props.className}
    `}
    style={{ fontFamily: "Poiret One" }}
    onClick={props.onClick}
>
    {props.text}
</button>