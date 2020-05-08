import React from 'react'
import RenderCrudSidebar from './RenderCrudSidebar'
import { Classes, Button, InputGroup } from '@blueprintjs/core'
import RenderCrudTable from './RenderCrudTable'
import RenderCrudForm from './RenderCrudForm'

const drawerWidth = 260

export default (props) => {
  const { title, fields } = props

  const [openDataForm, setOpenDataForm] = React.useState(false)
  const [openFilterForm, setOpenFilterForm] = React.useState(false)

  return (
    <div
      style={{
        marginLeft: drawerWidth + 1,
        marginTop: 1,
        padding: 30,

      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
        <h2 className={Classes.HEADING} style={{ margin: 0 }}>
          {title}
        </h2>

        <Button
          icon="plus" minimal
          style={{ marginLeft: 8 }}
          onClick={() => setOpenDataForm(true)}
        />
        <Button
          icon="filter" minimal
          style={{ marginLeft: 8 }}
          onClick={() => setOpenFilterForm(true)}
        />

        <div style={{ margin: 'auto' }} />
        <InputGroup
          leftIcon="search" placeholder="Search here"
        />
      </div>

      <RenderCrudTable
        title={title}
      />

      <RenderCrudSidebar
        width={drawerWidth}
        activePath={props.match.url}
      />

      {/* CRUD FORM */}
      <RenderCrudForm
        formId="crud-form"
        title="Create New"
        open={openDataForm}
        onClose={() => setOpenDataForm(false)}
        fields={fields}
      />

      {/* FILTER FORM */}
      <RenderCrudForm
        formId="filter-form"
        title="Filter"
        withReset
        open={openFilterForm}
        onClose={() => setOpenFilterForm(false)}
      />

    </div>
  )
}