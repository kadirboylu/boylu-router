export const onClick = (callback: () => void) => ({
    type: "event",
    click: callback,
});

export const onInput = (callback: (event: InputEvent) => void) => ({
    type: "event",
    input: callback,
});
