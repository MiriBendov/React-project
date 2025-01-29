export const ifNull = store => next => action => {
    console.log(action.payload.name);
    if (action.payload.name === undefined)
    {
        return;
    }
    next(action);
};