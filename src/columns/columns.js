import { useMemo } from 'react';

export default function column() {
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'State',
        accessor: 'state',
      },
      {
        Header: 'Country',
        accessor: 'country',
      },
      {
        Header: 'Longitude',
        accessor: 'lng',
      },
      {
        Header: 'Latitude',
        accessor: 'lat',
      },
    ],
    [],
  );

  return columns;
}
