import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ImportSatchelModal from './ImportSatchelModal';
import ClearSatchelModal from './ClearSatchelModal';
import ImportButton from './ImportButton';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
}));

export default function ImportExportSatchel(props) {
    const classes = useStyles();
    const satchel = useSelector(state => state.satchelState);
    const [importIsOpen, setImportIsOpen] = React.useState(false);
    const [clearIsOpen, setClearIsOpen] = React.useState(false);

    const download = (file, text) => {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(text));
        element.setAttribute('download', file);

        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    const exportFile = () => {
        const date = new Date()
        download('sad-albert-satchel-' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '.json',
            JSON.stringify(satchel, null, 4));
    };

    const closeImport = () => {
        setImportIsOpen(false);
    };

    const clear = () => {
        setClearIsOpen(true);
    };

    const closeClear = () => {
        setClearIsOpen(false);
    };

    return (
        <div className={classes.root}>
            <Button onClick={exportFile}>Export</Button>
            <div style={{ width: '16px' }} />
            <ImportButton/>
            <div style={{ width: '16px' }} />
            <Button onClick={clear}>Clear All</Button>
            {importIsOpen && (
                <ImportSatchelModal open close={closeImport} />
            )}
            {clearIsOpen && (
                <ClearSatchelModal open close={closeClear} />
            )}
        </div >
    );
}