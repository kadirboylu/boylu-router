import type { On } from "snabbdom";

export interface ComponentProps {
    children: string;
    on?: On;
}
