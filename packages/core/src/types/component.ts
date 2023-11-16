import type { VNode } from "snabbdom";

export interface Component {
    type: string;
    template: VNode;
}
