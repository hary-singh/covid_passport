import React from 'react';
import { VaccineConsumer } from '../../providers/VaccineProvider';
const Vaccine = ({ vaccine }) => {
  const toggleForm = () => {
    const { editing } = this.state
    this.setState({ editing: !editing })
  }
  
  const { editing } = this.state
  return(
    <>
      Name: {vaccine.name}<br />
      Description: {vaccine.desc}<br />
      Make: {vaccine.make}<br />
    </>
  )
  }


const ConnectedVaccine = (props) => {
  return(
  <VaccineConsumer>
     {
      
      value => (
        <Vaccine {...props} {...value} />
      )
    }
  </VaccineConsumer>
  )}

export default ConnectedVaccine;