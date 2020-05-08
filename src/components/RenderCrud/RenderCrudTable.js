import React from 'react'
import DataTable from 'react-data-table-component'
import { Checkbox, Icon } from '@blueprintjs/core'

import './RenderCrudTable.css'

const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  }
]
const data = [
  { title: 'Abc' },
  { title: 'Xyz' },
  { title: 'Ghi' },
]

const selectProps = { indeterminate: isIndeterminate => isIndeterminate };

export default ({
  title
}) => {
  return (
    <div className="rndcrd-table">
      <DataTable
        title={`${title} List`}
        columns={columns}
        data={data}
        selectableRows
        noHeader
        selectableRowsComponent={Checkbox}
        selectableRowsComponentProps={selectProps}
        sortIcon={<Icon icon="arrow-down" />}
      />
    </div>
  )
}