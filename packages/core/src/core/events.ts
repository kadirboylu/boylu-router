export const onClick = (callback: () => void) => ({
    type: "event",
    event: "click",
    click: callback,
});

export const onInput = (callback: (event: InputEvent) => void) => ({
    type: "event",
    event: "input",
    input: callback,
});
