import './style.css';
export declare function VList(props: {
    height: number | string;
    onReachEnd?: () => void;
    onScroll?: () => void;
    onListRender?: (listInfo: {
        start: number;
        renderLen: number;
    }) => void;
    debounceListRenderMS?: number;
    vid?: string;
    resetTopWhenDataChange?: boolean;
}): any;
export declare function scrollTo(option: {
    /**
     * 行数
     */
    row?: number;
    /**
     * y的偏移量
     */
    y?: number;
    /**
     * 同一页面拥有多个虚拟表格的时候的唯一标识.
     */
    vid?: string;
}): {
    vid: string;
    rowItemHeight: any;
};
