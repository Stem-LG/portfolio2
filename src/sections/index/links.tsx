import { linksCollapse } from "@/atoms";
import { Box, Button } from "@mui/material";
import { useSetAtom } from "jotai";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdArrowBack } from "react-icons/md";
import { SiCoursera } from "react-icons/si";

export function Links() {
    const setLinksOpen = useSetAtom(linksCollapse);

    const myLinks = [
        { name: "E-Mail", icon: <MdEmail />, link: "#" },
        { name: "Github", icon: <FaGithub />, link: "#" },
        { name: "LinkedIn", icon: <FaLinkedin />, link: "#" },
        { name: "Phone", icon: <FaPhoneAlt />, link: "#" },
        { name: "Coursera", icon: <SiCoursera />, link: "#" },
    ];

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}
        >
            <Button
                startIcon={<MdArrowBack />}
                endIcon={<Box sx={{ width: "20px" }} />}
                onClick={() => setLinksOpen(false)}
                sx={{ maxWidth: "12rem", mx: "auto" }}
                fullWidth
            >
                Back
            </Button>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "1rem",
                }}
            >
                {myLinks.map(({ name, icon, link }, i) => (
                    <Link href={link}>
                        <Button variant="contained" startIcon={icon}>
                            {name}
                        </Button>
                    </Link>
                ))}
            </Box>
        </Box>
    );
}
