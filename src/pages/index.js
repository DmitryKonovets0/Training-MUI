import {Component} from "react";
import React from "react";
import Container from "@mui/material/Container";
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import './index.css'
import logo from "../images/icon.png"

const body = {backgroundColor: "#10141e", height: '100vh'}

export default class MUI extends Component {

    render() {
        return (
            <div style={body}>
                <Container fixed>
                    <Box sx={{fontSize:'32px', color:'#fff', pt:'20px'}}>Have any question?</Box>
                    <Box position='relative' height={293} width={510} my={4} display="flex" bgcolor="rgba(255, 255, 255, 0.05)" borderRadius='20px' p='24px'>
                        <TextField
                            id="standard-basic"
                            label="Name"
                            variant="standard"
                            disableAnimation
                            sx={{
                                '& .MuiInputLabel-root': {
                                    color: 'rgba(255, 255, 255, 0.6)',
                                },
                                '& .MuiInput-underline:before': {
                                    borderBottomColor: 'rgba(255, 255, 255, 0.6)',
                                },
                                '& .MuiInput-underline:hover:before': {
                                    borderBottomColor: 'rgba(255, 255, 255, 0.6)',
                                },
                                '& .MuiInput-underline:after': {
                                    borderBottomColor: 'rgba(255, 255, 255, 0.6)',
                                },
                                '& .MuiInputBase-input': {
                                    color: 'rgba(255, 255, 255, 0.6)',
                                },
                                marginRight: '20px',
                                marginTop:'8px'
                            }}
                        />
                        <TextField
                            id="standard-basic"
                            label="Email"
                            variant="standard"
                            disableAnimation
                            sx={{
                                '& .MuiInputLabel-root': {
                                    color: 'rgba(255, 255, 255, 0.6)',
                                },
                                '& .MuiInput-underline:before': {
                                    borderBottomColor: 'rgba(255, 255, 255, 0.6)',
                                },
                                '& .MuiInput-underline:hover:before': {
                                    borderBottomColor: 'rgba(255, 255, 255, 0.6)',
                                },
                                '& .MuiInput-underline:after': {
                                    borderBottomColor: 'rgba(255, 255, 255, 0.6)',
                                },
                                '& .MuiInputBase-input': {
                                    color: 'rgba(255, 255, 255, 0.6)',
                                },
                                marginRight: '20px',
                                marginTop:'8px'
                            }}
                        />
                        <Button variant="contained" disableElevation sx={{position:'absolute', bottom:'50%' , transform:'translate(-50%)', left:'110px'}}>
                            Disable elevation
                        </Button>
                        <Box component="section" sx={{ p: 2, border: '1px solid grey' }}>
                            This is a section container
                        </Box>
                        <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                            This is a section container
                        </Box>
                    </Box>

                </Container>
            </div>
        )
    }
}

export const Head = () =>
    <head>
        <title>MUI</title>
        <link rel="icon" href={logo}/>
    </head>
