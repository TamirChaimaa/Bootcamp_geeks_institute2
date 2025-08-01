export interface TableColumn<T> {
    key: keyof T;
    title: string;
    sortable?: boolean;
    render?: (item: T) => React.ReactNode;
}

export interface DataTableProps<T> {
    data: T[];
    columns: TableColumn<T>[];
    onSort?: (key: keyof T, direction: 'asc' | 'desc') => void;
    onSelect?: (selectedIds: (string | number)[]) => void;
}