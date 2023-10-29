import { Stack, TextField, InputAdornment } from "@mui/material"
import { useState } from "react"

export const MuiTextField = () => {
    const [value, setValue] = useState('')
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField
                    label='Name'
                    variant='outlined'
                />
                <TextField
                    label='Name'
                    variant='filled'
                />
                <TextField
                    label='Name'
                    variant='standard'
                />
            </Stack >
            <Stack direction='row' spacing={2}>
                <TextField
                    label='Small Secondary'
                    size='small'
                    color='secondary'
                />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField
                    label='Form Input'
                    required
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    error={!value}
                    helperText={!value ? 'Required' : 'Do not share your password'}
                />
                <TextField
                    label='Password'
                    type='password'
                    helperText='Do not share your password'
                    disabled
                />
                <TextField
                    label='Read only'
                    InputProps={{ readOnly: true }}
                    required
                />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField
                    label='Amount'
                    InputProps={{
                        startAdornment: <InputAdornment position='start'>$</InputAdornment>,
                    }}
                />
                <TextField
                    label='Weight'
                    InputProps={{
                        endAdornment: <InputAdornment position='end'>kg</InputAdornment>,
                    }}
                />
            </ Stack>

        </Stack>
    )
}