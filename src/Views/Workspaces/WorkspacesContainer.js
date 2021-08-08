//all the logique and workspaces api calls must be here

import React from 'react'
import Workspaces from './Workspaces'

function WorkspacesContainer() {

    const workspaces = [
        'BB','Alissar','Jamalon'
    ]
    return (
        <Workspaces workspaces={workspaces} />
    )
}

export default WorkspacesContainer
