import { Button, ButtonProps } from "@mui/material";
import Link from "next/link";
import Tilt from "react-parallax-tilt";


export interface NavButtonProps{
    link:string,
    text:string,
    btnProps?: ButtonProps
}

export function NavButton({link,text, btnProps}:NavButtonProps){

    return (
        <Tilt scale={1.06} tiltMaxAngleX={15} tiltMaxAngleY={15}>
            <Link href={link}>
                <Button
                    variant="outlined"
                    sx={{
                        width: {
                            xs: "calc(50vw - 1.5rem)",
                            md: "auto",
                        },
                        height: "2rem",
                        fontSize: "1rem",
                    }}
                    {...btnProps}
                >
                    {text}
                </Button>
            </Link>
        </Tilt>
    );
}