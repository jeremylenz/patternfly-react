import * as React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableProps,
  sortable,
  SortByDirection,
  headerCol,
  TableVariant,
  expandable,
  cellWidth,
  IRow
} from '@patternfly/react-table';

export class TableWidthModifiersDemo extends React.Component<TableProps, { columns: any; rows: IRow[] }> {
  constructor(props: TableProps) {
    super(props);
    this.state = {
      columns: [
        { title: 'Header cell', transforms: [cellWidth(10)] },
        'Branches',
        { title: 'Pull requests', transforms: [cellWidth(30)] },
        'Workspaces',
        {
          title: 'Last Commit',
          transforms: [cellWidth('max')]
        }
      ],
      rows: [['one', 'two', 'three', 'four', 'five']]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table caption="Table with Width Modifiers" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
