export interface Vue {
    readonly $el: HTMLElement;

    $mount(elementOrSelector?: Element | string, hydrating?: boolean): this;
}