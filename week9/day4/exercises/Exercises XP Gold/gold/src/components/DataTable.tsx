import React, { useState } from 'react';
import type { DataTableProps } from '../types';

function DataTable<T extends { id: string | number }>({
    data,
    columns,
    onSort,
    onSelect
}: DataTableProps<T>) {
    const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: 'asc' | 'desc' } | null>(null);
    const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);

    const sortedData = [...data];
    if (sortConfig) {
        sortedData.sort((a, b) => {
            const aVal = a[sortConfig.key];
            const bVal = b[sortConfig.key];
            if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
            if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }

    const toggleSort = (key: keyof T) => {
        const direction = sortConfig?.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
        setSortConfig({ key, direction });
        onSort?.(key, direction);
    };

    const handleSelect = (id: string | number) => {
        const updated = selectedRows.includes(id)
            ? selectedRows.filter(rowId => rowId !== id)
            : [...selectedRows, id];
        setSelectedRows(updated);
        onSelect?.(updated);
    };

    const handleSelectAll = () => {
        if (selectedRows.length === data.length) {
            setSelectedRows([]);
            onSelect?.([]);
        } else {
            const allIds = data.map(item => item.id);
            setSelectedRows(allIds);
            onSelect?.(allIds);
        }
    };

    return (
        <table border={1} cellPadding={8}>
            <thead>
                <tr>
                    <th>
                        <input
                            type="checkbox"
                            checked={selectedRows.length === data.length}
                            onChange={handleSelectAll}
                        />
                    </th>
                    {columns.map(col => (
                        <th key={String(col.key)} onClick={() => col.sortable && toggleSort(col.key)}>
                            {col.title} {col.sortable && (sortConfig?.key === col.key ? (sortConfig.direction === 'asc' ? '🔼' : '🔽') : '⇅')}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {sortedData.map(item => (
                    <tr key={item.id}>
                        <td>
                            <input
                                type="checkbox"
                                checked={selectedRows.includes(item.id)}
                                onChange={() => handleSelect(item.id)}
                            />
                        </td>
                        {columns.map(col => (
                            <td key={String(col.key)}>
                                {col.render ? col.render(item) : String(item[col.key])}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DataTable;
