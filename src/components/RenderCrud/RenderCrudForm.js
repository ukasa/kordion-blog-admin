import React from 'react'
import { Dialog, Classes, Button, Intent, FormGroup, InputGroup } from '@blueprintjs/core'
import { formTypes, formDefaultValues } from '../../constants/form'

export default ({
  open, onClose = () => { },
  title, withReset = false,
  fields = [], formId,
}) => {
  const initialFormData = fields.reduce((acc, v) => {
    return { ...acc, [v.name]: v.defaultValue || formDefaultValues[v.type] }
  }, {})
  const [formData, setFormData] = React.useState(initialFormData)
  const [formErrors, setFormErrors] = React.useState({})

  const onChange = (name, value) => {
    setFormData(formData => ({ ...formData, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    alert(JSON.stringify(formData))
  }

  return (
    <Dialog
      isOpen={open}
      title={title}
      onClose={onClose}
    >
      <div className={Classes.DIALOG_BODY}>
        <form id={formId} onSubmit={onSubmit}>
          {fields.map((f, i) => (
            <FormGroup
              key={f.name}
              // helperText="Helper text with details..."
              label={f.label}
              labelFor={f.name}
            >
              {f.type === formTypes.INPUT && (
                <InputGroup
                  id={f.name} autoFocus={i === 0}
                  onChange={e => onChange(f.name, e.target.value)}
                  value={formData[f.name]}
                />
              )}
            </FormGroup>
          ))}
        </form>
      </div>
      <div className={Classes.DIALOG_FOOTER}>
        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
          <Button onClick={onClose}>Close</Button>
          {withReset && (
            <Button onClick={onClose}>Reset</Button>
          )}
          <Button onClick={onClose} intent={Intent.PRIMARY}>Save</Button>
        </div>
      </div>
    </Dialog>
  )
}