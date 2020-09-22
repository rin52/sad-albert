import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DisplayArea from '../../../common/DisplayArea';
import DisplayItem from '../../../common/DisplayItem';
import MonsterSelector from './MonsterSelector';
import generateIngredientDrops from '../../../../helper/generateIngredientDrops';
import Monsters from '../../../../data/Monsters';
import IngredientDisplay from '../IngredientDisplay';

const useStyles = makeStyles((theme) => ({
    grid: {
        paddingTop: '16px',
        display: 'grid',
        gridTemplateColumns: 'auto 16px auto',
    },
    bottomRow: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));

export default function HoardPanel(props) {
    const classes = useStyles();
    const defaultMsg = 'Select monsters, enter checks, and click \'Generate\' to generate item drops.'
    const [monsters, setMonsters] = React.useState([{ id: 1, monster: '', check: '' }]);
    const [disabled, setDisabled] = React.useState(true);
    const [message, setMessage] = React.useState(defaultMsg);
    const [drops, setDrops] = React.useState([]);
    React.useEffect(() => {
        setMonsters([{ id: 1, monster: '', check: '' }]);
        setDisabled(true);
        setMessage(defaultMsg);
        setDrops([]);
    }, [props]);

    const findIndex = (id) => (monsters.findIndex(monster => monster.id === id));

    const addMonster = () => {
        const maxId = monsters.length > 0 ? Math.max.apply(Math.max, monsters.map(monster => monster.id)) : 0;
        setMonsters([...monsters, { id: maxId + 1, monster: '', check: '' }]);
        setDisabled(true);
    }

    const removeMonster = (id) => {
        const newMonsters = monsters.filter(monster => monster.id !== id);
        setMonsters(newMonsters);
        setDisabled(generateDisabled());
    }

    const onMonsterChange = (id, monster, check) => {
        const index = findIndex(id);
        if (index !== -1) {
            const newMonsters = monsters;
            newMonsters[index].id = id;
            newMonsters[index].monster = monster;
            newMonsters[index].check = check;
            setMonsters(newMonsters);
        }
        setDisabled(generateDisabled());
    }

    const generateDisabled = () => {
        for (let i = 0; i < monsters.length; i += 1) {
            if (monsters[i].check === '' || monsters[i].monster === '') {
                return true;
            }
        }
        return false;
    }


    const generate = () => {
        setDrops([]);
        setMessage('');
        let newDrops = [];

        monsters.forEach(monster => {
            newDrops = [...newDrops, ...generateIngredientDrops(Monsters, monster.monster, monster.check)];
        });
        if (newDrops.length === 0) {
            setMessage('Nothing found');
        } else {
            setDrops(newDrops);
        }
    }

    return (
        <div className={classes.grid}>
            <div>
                <DisplayArea>
                    <div>
                        {monsters.map(monster => {
                            return (
                                <MonsterSelector
                                    key={monster.id}
                                    monster={monster.monster}
                                    check={monster.check}
                                    id={monster.id}
                                    onMonsterChange={onMonsterChange}
                                    removeMonster={removeMonster}
                                />
                            )
                        })}
                        <DisplayItem>
                            <div className={classes.bottomRow}>
                                <Button onClick={addMonster}>Add Monster</Button>
                                <Button onClick={generate} disabled={disabled || monsters.length === 0}>Generate</Button>
                            </div>
                        </DisplayItem>

                    </div>
                </DisplayArea>
            </div>
            <div />
            <div>
                <DisplayArea>
                    <div>
                        {message !== '' && (
                            <DisplayItem>
                                <Typography>
                                    {message}
                                </Typography>
                            </DisplayItem>
                        )}
                        {drops.map(item => (
                            <IngredientDisplay item={item} key={item.item} displayAmount />
                        ))}
                    </div>
                </DisplayArea>
            </div>
        </div>
    );
}