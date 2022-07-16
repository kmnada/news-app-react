import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
        error: {
            color: 'red',
            fontSize: 12
        },
        message: {
            marginTop: 10,
            cursor: 'pointer'
        },
        button: {
            background: '#00aeff',
            '&:hover': {
                background: '#00aeff'
            }
        }
    })
);