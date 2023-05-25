import { Avatar, Box, Button, Link, Paper, Typography, useTheme } from "@mui/material";
import { GoPrimitiveDot } from "react-icons/go";
import Tilt from "react-parallax-tilt";
import { MdOutlineOpenInNew } from "react-icons/md";

export interface CertificationType {
    image: string;
    title: string;
    description?: string;
    date: Date;
    expiry?: Date;
    link: string;
    issuer: string;
    platform: string;
    presential: boolean;
}

export function Certification(certProps: CertificationType) {
    const { image, title, platform, description, date, expiry, link, issuer, presential } = certProps;

    const theme = useTheme();

    return (
        <Paper
            sx={{
                minHeight: { xs: "15rem", sm: "15rem" },
                width: { xs: "100%", sm: "19rem",md:"21rem", lg: "25rem" },
                maxWidth:"25rem",
                borderRadius: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.9rem",
                pb: "0.75rem",
                
            }}
            elevation={7}
        >
            <Box
                sx={{
                    width: "100%",
                    mt: "0.75rem",
                    ml: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                }}
            >
                <Avatar
                    src={image}
                    sx={{
                        height: "4.5rem",
                        width: "4.5rem",
                    }}
                />
                <Box sx={{textAlign:"left"}}>
                    <Typography>{issuer}</Typography>
                    <Typography>{platform}</Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    flexGrow: "1",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    mx:"1.5rem"
                }}
            >
                <Typography sx={{ textAlign: "center" }}>{title}</Typography>
                <Typography sx={{ textAlign: "center", fontSize: "0.7rem" }}>{description}</Typography>
            </Box>
            {/* <Typography>{description}</Typography> */}
            <Box sx={{ display: "flex", gap: "2rem", textAlign: "center" }}>
                <Typography>{ongoing(date) ? "Ongoing" : "issued: " + formatDate(date)}</Typography>
                <Typography sx={{ display: ongoing(date) || !expiry ? "none" : "" }}>
                    expires: &nbsp;
                    {/* <br /> */}
                    {formatDate(expiry)}
                </Typography>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    px: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                    <GoPrimitiveDot color={theme.palette.secondary.dark} />
                    &nbsp;{presential ? "In-Person" : "Online"}
                </Typography>
                <Tilt scale={1.06} tiltMaxAngleX={15} tiltMaxAngleY={10}>
                    <Link href={link} target="_blank" rel="noreferrer">
                        <Button endIcon={<MdOutlineOpenInNew />} variant="contained" sx={{ borderRadius: "1rem 0" }}>
                            Verify
                        </Button>
                    </Link>
                </Tilt>
            </Box>
        </Paper>
    );
}

function ongoing(date: Date) {
    const today = new Date();
    const certDate = new Date(date);
    if (today.getTime() < certDate.getTime()) {
        return true;
    }
    return false;
}

function formatDate(datefromdb: any) {
    const date = new Date(datefromdb);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${month.toString().padStart(2, "0")}/${year.toString()}`;
    return formattedDate;
}
