import { Box, Collapse, Typography } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import { ParticlesBG } from "../components/background";
import { contactCollapse, linksCollapse } from "../atoms";
import { useAtomValue, useSetAtom } from "jotai";
import { Contact } from "@/sections/index/contact";
import { Links } from "@/sections/index/links";
import { NavButton, NavButtonProps } from "@/components/index/nav_button";

export default function Index() {
    const contactOpen = useAtomValue(contactCollapse);
    const linksOpen = useAtomValue(linksCollapse);

    return (
        <Box
            sx={{
                height: "100svh",
                width: "100svw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#ffc500",
                gap: "1rem",
                textAlign: "center",
            }}
        >
            <Collapse in={!contactOpen && !linksOpen} timeout={500}>
                {/* name section */}
                <Greeting />
                {/* nav buttons */}
                <NavButtons />
            </Collapse>
            {/* collapsed contact */}
            <Collapse
                in={contactOpen}
                timeout={500}
                sx={{ width: "100%", maxWidth: "40rem", px: "1rem" }}
            >
                <SectionName>Contact Me</SectionName>
                <Contact />
            </Collapse>
            {/* collapsed links */}
            <Collapse
                in={linksOpen}
                timeout={500}
                sx={{ width: "100%", maxWidth: "40rem", px: "1rem" }}
            >
                <SectionName>My Links</SectionName>
                <Links />
            </Collapse>
            {/* particles bg */}
            <ParticlesBG />
        </Box>
    );
}

function Greeting() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                mb: "1rem",
            }}
        >
            <Typography
                sx={{
                    fontSize: { xs: "1.25rem", md: "2rem" },
                    lineHeight: "1rem",
                    mb: { md: "1rem" },
                }}
            >
                Hello There, My name is
            </Typography>
            <Typography
                sx={{
                    lineHeight: { xs: "3rem", md: "4rem" },
                    mb: { md: "2rem" },
                    fontSize: { xs: "3rem", md: "5rem" },
                }}
            >
                Louay Ghanney
            </Typography>
            {/* typewriter */}
            <Typography sx={{ fontSize: { xs: "1.25rem", md: "2rem" } }}>
                I{"'"}m a
                <Typewriter
                    words={[
                        " FullStack Developer",
                        " ML Enthusiast",
                        " Freelancer",
                        "n IT student @ ISETN",
                    ]}
                    cursorStyle="!"
                    cursor
                    cursorBlinking={true}
                    typeSpeed={50}
                    deleteSpeed={25}
                    delaySpeed={2500}
                    loop
                />
            </Typography>
        </Box>
    );
}

function NavButtons() {
    const setContactOpen = useSetAtom(contactCollapse);
    const setLinksOpen = useSetAtom(linksCollapse);

    const myButtons = [
        { text: "certifications", link: "#" },
        { text: "projects", link: "#" },
        {
            text: "links",
            link: "#",
            btnProps: {
                onClick: () => setLinksOpen(true),
            },
        },
        {
            text: "contact",
            link: "#",
            btnProps: {
                onClick: () => setContactOpen(true),
            },
        },
    ];

    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "1rem",
                px: "1rem",
            }}
        >
            {myButtons.map((props: NavButtonProps, i) => (
                <NavButton {...props} />
            ))}
        </Box>
    );
}

function SectionName({ children }: any) {
    return <Typography sx={{ fontSize: "2rem" }}>{children}</Typography>;
}
