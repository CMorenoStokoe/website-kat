/**
 * Art deco component
 */

export const ArtDecoImg = (props: {
    src: string,
    animate: string | [string, 1 | 2 | 3 | 4],
    className?: string
}) => <img
        src={props.src}
        className={
            `transition-all  
            animate__animated animate__${props.animate[0]} 
                ${typeof (props.animate[1]) === "number"
                ? "animate__delay-" + props.animate[1] + "s"
                : ""
            }
            `
            + " "
            + props.className
        }
    />