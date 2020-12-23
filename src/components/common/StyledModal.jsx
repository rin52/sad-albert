import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Colors from '../../helper/Colors';

const useStyles = makeStyles({
    root: {
        width: '300px',
        backgroundColor: Colors.background,
        outline: Colors.button,
        border: '1px',
        borderColor: Colors.button,
        borderStyle: 'solid',
    },
    title: {
        backgroundColor: Colors.button,
        color: Colors.buttonText,
        padding: '16px',
    },
    childrenArea: {
        padding: '16px',
    },
    buttonsArea: {
        padding: '16px',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginRight: '16px',
    },
});

export default function StyledModal(props) {
    const classes = useStyles();
    return (
        <Modal
            open={props.open}
            onClose={props.close}
            onBackdropClick={props.close}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', outline: 'none' }}
        >
            <Paper className={classes.root} style={props.width ? {width: props.width} : {}}>
                <div className={classes.title}>
                    <Typography color="inherit">{props.title}</Typography>
                </div>
                <div className={classes.childrenArea}>
                    {props.children}
                </div>
                {props.buttons && (
                    <div className={classes.buttonsArea}>
                        {props.buttons.map((button, index) => (
                            <Button
                                key={button.text}
                                onClick={button.onClick}
                                className={index < props.buttons.length - 1 ? classes.button : undefined}
                            >
                                {button.text}
                            </Button>
                        ))}
                    </div>
                )}

            </Paper>
        </Modal>
    );
}
