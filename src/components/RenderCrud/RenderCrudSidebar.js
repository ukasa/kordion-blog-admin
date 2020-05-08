import React from 'react'
import logoImg from '../../logo.svg'
import { Classes, Menu, Icon } from '@blueprintjs/core'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import { push } from 'connected-react-router'

export default (props) => {
  // const dispatch = useDispatch()
  const cruds = useSelector(s => s.cruds)

  // const [drawerState] = React.useState({
  //   isOpen: true,
  //   // autoFocus: false,
  //   hasBackdrop: false,
  //   size: props.width,
  //   position: Position.LEFT,
  //   style: {
  //     borderRight: 'solid 1px #ddd',
  //     boxShadow: 'none',
  //     transition: 'none',
  //   }
  // })

  return (
    <div
      style={{
        width: props.width, position: 'fixed',
        padding: 0,
        left: 0, top: 0, bottom: 0,
        background: 'white',
        border: 'solid 1px #eee',
        // display: 'flex', flexDirection: 'column',
        // alignItems: 'flex-start',
      }}
    >
      <div
        style={{
          padding: 10,
          display: 'flex', alignItems: 'center',

        }}
      >
        <img src={logoImg} alt="Kordion" width={80} />
        <div>
          <h3 className={Classes.HEADING} style={{ margin: 0 }}>Kordion</h3>
          <Link to="/">Visit Portal</Link>
        </div>
      </div>

      <Menu large style={{ paddingLeft: 3 }}>
        <Menu.Divider title="Manage" />
        {cruds.data.map(c => (
          <Link
            key={c.path}
            className={Classes.MENU_ITEM} to={c.path}
            style={{
              alignItems: 'center',
              background: c.path === props.activePath && 'rgba(0, 0, 0, 0.1)',
            }}
          >
            <Icon icon={c.icon} iconSize={22} />
            <span>
              {c.title}
            </span>
          </Link>
        ))}
      </Menu>
    </div>
  )
}