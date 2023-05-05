import { contactCollapse } from "@/atoms";
import { Box, Button, TextField } from "@mui/material";
import { useSetAtom } from "jotai";
import { MdArrowBack } from "react-icons/md";

export function Contact() {
    const setContactOpen = useSetAtom(contactCollapse);

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
                onClick={() => setContactOpen(false)}
                sx={{ maxWidth: "12rem", mx: "auto" }}
                fullWidth
            >
                Back
            </Button>
            <TextField fullWidth label="Name" size="small" />
            <TextField fullWidth label="Email" size="small" />
            <TextField fullWidth label="Subject" size="small" />
            <TextField
                fullWidth
                multiline
                rows={3}
                label="Message"
                size="small"
            />
            <Button size="small" variant="contained">
                Send
            </Button>
        </Box>
    );
}
