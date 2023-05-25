import { Box, Button, Collapse, Typography } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import { ParticlesBG } from "../components/background";
import { certificationsCollapse, contactCollapse, linksCollapse } from "../atoms";
import { useAtomValue, useSetAtom } from "jotai";
import { Contact } from "@/sections/index/contact";
import { Links } from "@/sections/index/links";
import { NavButton, NavButtonProps } from "@/components/index/nav_button";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import { Certification, CertificationType } from "@/components/certs/certification";
import Scrollbars from "react-custom-scrollbars-2";

export default function Index() {
    const contactOpen = useAtomValue(contactCollapse);
    const linksOpen = useAtomValue(linksCollapse);
    const certificationsOpen = useAtomValue(certificationsCollapse);

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
            <Collapse in={!contactOpen && !linksOpen && !certificationsOpen} timeout={500}>
                {/* name section */}
                <Greeting />
                {/* nav buttons */}
                <NavButtons />
            </Collapse>
            {/* collapsed Certifications */}
            <Collapse in={certificationsOpen} timeout={500} sx={{ width: "100%", maxWidth: { md: "80%", lg:"70%",xl:"60%" }, px: "1rem" }}>
                <SectionName>My Certifications</SectionName>
                <Certifications />
            </Collapse>
            {/* collapsed links */}
            <Collapse in={linksOpen} timeout={500} sx={{ width: "100%", maxWidth: "40rem", px: "1rem" }}>
                <SectionName>My Links</SectionName>
                <Links />
            </Collapse>
            {/* collapsed contact */}
            <Collapse in={contactOpen} timeout={500} sx={{ width: "100%", maxWidth: "40rem", px: "1rem" }}>
                <SectionName>Contact Me</SectionName>
                <Contact />
            </Collapse>
            {/* particles bg */}
            <ParticlesBG />
        </Box>
    );
}

function Certifications() {
    const setCertificationsOpen = useSetAtom(certificationsCollapse);

    const certInfo: CertificationType[] = [
        {
            title: "Machine Learning Specialization",
            issuer: "DeepLearning.ai, Stanford",
            platform: "Coursera",
            date: new Date("05/21/2023"),
            image: "/deeplearning.ai.png",
            link: "#",
            presential: false,
        },
        {
            title: "IT Support Specialization",
            issuer: "Google",
            platform: "Coursera",
            date: new Date("01/10/2023"),
            image: "/google.png",
            link: "#",
            presential: false,
        },
        {
            title: "IT Automation with Python Specialization",
            issuer: "Google",
            platform: "Coursera",
            date: new Date("02/10/2023"),
            image: "/google.png",
            link: "#",
            presential: false,
        },
    ];

    return (
        <Box>
            <Button
                sx={{ maxWidth: "12rem", maxHeight: "2.5rem", mx: "auto", mb: "1rem" }}
                startIcon={<MdArrowBack />}
                endIcon={<Box sx={{ width: "20px" }} />}
                onClick={() => setCertificationsOpen(false)}
                fullWidth
            >
                Back
            </Button>
            <Box
                sx={{
                    display: "flex",
                    maxHeight: "calc(100vh - 7.5rem)",
                    overflowY: "scroll",
                    overflowX: "clip",
                    flexWrap: "wrap",
                    gap: "1rem",
                    scrollbarWidth: "none",
                    "::-webkit-scrollbar": {
                        display: "none",
                    },
                    justifyContent:"center"
                }}
            >
                {certInfo.map((certProps, i) => (
                    <Certification key={i} {...certProps} />
                ))}
            </Box>
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
                    words={[" FullStack Developer", " ML Enthusiast", " Freelancer", "n IT student @ ISETN"]}
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
    const setCertificationsOpen = useSetAtom(certificationsCollapse);

    const myButtons = [
        {
            text: "certifications",
            btnProps: {
                onClick: () => setCertificationsOpen(true),
            },
        },
        {
            text: "projects",
        },
        {
            text: "links",
            btnProps: {
                onClick: () => setLinksOpen(true),
            },
        },
        {
            text: "contact",
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
    return <Typography sx={{ fontSize: {xs:"1.8rem",sm:"2.1rem"},maxHeight:"3rem",height:"3rem" }}>{children}</Typography>;
}
