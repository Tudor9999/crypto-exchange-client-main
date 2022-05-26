import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import "./loginPage"

export default function LoginPage() {
    return (
        <div>
        <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: 1,
                width: 480,
                height: 586,
            },
            justifyContent: "center",
            alignItems: "center"
        }}
        >
        <Paper elevation={0}>
            <Box
            sx={{
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
                <Typography variant="h1" component="div" gutterBottom>
                    Login
                </Typography>
                <TextField id="outlined-basic" label="Username" variant="outlined" />
                <TextField id="outlined-basic" label="Password" variant="outlined" />
                <Button variant="contained">Login</Button>
                <Divider />
            </Box>
        </Paper>
        
        
        </Box>
        </div>
        );
    }