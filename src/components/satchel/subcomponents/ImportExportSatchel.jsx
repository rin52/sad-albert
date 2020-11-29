import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ImportSatchelModal from './ImportSatchelModal';

const useStyles = makeStyles(() => ({
    root: {
        paddingTop: '16px',
        display: 'flex',
        justifyContent: 'center'
    },
}));

export default function ImportExportSatchel(props) {
    const classes = useStyles();
    const satchel = useSelector(state => state.satchelState);
    const [importIsOpen, setImportIsOpen] = React.useState(false);

    const download = (file, text) => {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(text));
        element.setAttribute('download', file);

        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    const exportFile = () => {
        console.log(satchel);
        const date = new Date()
        download('sad-albert-satchel-' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '.json',
            JSON.stringify(satchel, null, 4));
    };

    const importFile = () => {
        setImportIsOpen(true);
    };

    const closeImport = () => {
        setImportIsOpen(false);
    };

    return (
        <div className={classes.root}>
            <Button onClick={exportFile}>Export</Button>
            <div style={{ width: '16px' }} />
            <Button onClick={importFile}> Import</Button>
            {
                importIsOpen && (
                    <ImportSatchelModal open close={closeImport} />
                )
            }
        </div >
    );
}