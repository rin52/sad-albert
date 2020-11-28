export const CLEAR_SATCHEL = 'clearSatchel';
export const OVERWRITE_SATCHEL = 'overwriteSatchel';
export const REMOVE_FROM_SATCHEL = 'removeFromSatchel';
export const UPDATE_SATCHEL = 'updateSatchel';

export const updateSatchel = newItems => ({
    type: UPDATE_SATCHEL,
    payload: newItems
});

export const removeFromSatchel = key => ({
    type: REMOVE_FROM_SATCHEL,
    payload: key,
});

export const clearSatchel = () => ({
    type: CLEAR_SATCHEL,
});

export const overwriteSatchel = newSatchel => ({
    type: OVERWRITE_SATCHEL,
    payload: newSatchel,
});