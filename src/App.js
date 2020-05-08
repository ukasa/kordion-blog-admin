import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import RenderCrud from './components/RenderCrud/RenderCrud'
import Home from './pages/Home'
import { Classes } from '@blueprintjs/core'

const wrapperClassName = [
  Classes.RUNNING_TEXT,
  Classes.TEXT_LARGE,
]

export default () => {
  const cruds = useSelector(s => s.cruds)

  return (
    <div className={wrapperClassName.join(' ')}>
      <Switch>
        {cruds.data.map(c => (
          <Route
            key={c.path}
            path={c.path}
            render={routeProps => (
              <RenderCrud {...({ ...routeProps, ...c })} />
            )}
          />
        ))}

        <Route path="/" component={Home} />
      </Switch>
    </div>
  )
}