import React from 'react'
import { connect } from 'react-redux'

const Test = (props) => {
    return(
    <div>{props.clicked ? "true" : "false"}</div>
    )
}

const msp = (state) => {
    console.log("current redux state", state)
}

export default connect(msp)(Test)