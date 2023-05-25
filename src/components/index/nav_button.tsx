import { Button, ButtonProps } from "@mui/material";
import Tilt from "react-parallax-tilt";


export interface NavButtonProps {
    text: string;
    btnProps?: ButtonProps;
}

export function NavButton({ text, btnProps }: NavButtonProps) {
    return (
        <Tilt scale={1.06} tiltMaxAngleX={15} tiltMaxAngleY={15}>
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
        </Tilt>
    );
}

// export function ButtonThatExpands() {
//     const [open, setOpen] = useState<boolean>(false);
//     const boxRef = useRef<HTMLButtonElement>(null);
//     const [position, setPosition] = useState<{ x: number; y: number }>();

//     useEffect(() => {
//         setPosition({
//             x: boxRef.current?.getBoundingClientRect().left || 0,
//             y: boxRef.current?.getBoundingClientRect().top || 0,
//         });
//     });

//     function handleClick(e: Mevent<HTMLButtonElement, MouseEvent>) {
//         setOpen(!open);
//     }

//     return (
//         <Box ref={boxRef} sx={{ width: "5rem", height: "2rem" }}>
//             <Animate
//                 play={!!open}
//                 start={{
//                     position: "fixed",
//                     left: position?.x,
//                     top: position?.y,
//                     height: "2rem",
//                     width: "5rem",
//                 }}
//                 easeType="ease-in-out"
//                 end={{
//                     position: "fixed",
//                     left: 0,
//                     top: 0,
//                     height: "100svh",
//                     width: "100svw",
//                 }}
//             >
//                 <Box
//                     sx={{ height: "100%", width: "100%", position: "relative" }}
//                 >
//                     <Animate
//                         play={!!open}
//                         start={{ opacity: 1, height: "100%", width: "100%" }}
//                         end={{ opacity: 1, height: "100svh", width: "100svw"}}

//                     >
//                         <Button
//                             onClick={handleClick}
//                             sx={{ width: "100%", height: "100%" }}
//                             variant="contained"
//                         >
//                             Expand
//                         </Button>
//                     </Animate>
//                     {/* <Animate
//                         play={!!open}
//                         start={{
//                             position: "absolute",
//                             height: 0,
//                             width: 0,
//                             left: "50%",
//                             top: "50%",
//                         }}
//                         end={{
//                             position: "absolute",
//                             height: "50%",
//                             width: "100%",
//                             top: 0,
//                             left: 0,
//                         }}
//                     >
//                         <Box
//                             sx={{
//                                 bgcolor: "red",
//                                 height: "100%",
//                                 width: "100%",
//                                 position: "absolute",
//                             }}
//                         ></Box>
//                     </Animate> */}
//                 </Box>
//             </Animate>
//         </Box>
//     );
// }
