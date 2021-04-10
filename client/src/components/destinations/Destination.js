import React from 'react';
import { DestinationConsumer } from '../../providers/DestProvider';
const Destination = ({ destination }) => {
  const toggleForm = () => {
    const { editing } = this.state
    this.setState({ editing: !editing })
  }
  
  const { editing } = this.state
  return(
    <>
      Name: {destination.name}<br />
      Notes: {destination.notes}<br />
      Requirements: {destination.reqs}<br />
    </>
  )
  }


const ConnectedDestination = (props) => {
  return(
  <DestinationConsumer>
     {
      
      value => (
        <Destination {...props} {...value} />
      )
    }
  </DestinationConsumer>
  )}

export default ConnectedDestination;