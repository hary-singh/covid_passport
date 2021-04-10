import { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { DestinationConsumer } from '../../providers/DestProvider';
const DestinationForm = ({ addDestination }) => {
  const [destination, setDestination] = useState({ name: "", notes: "", reqs: "" })
  const handleSubmit = (e) => {
    e.preventDefault()
    addDestination(destination)
    setDestination({ name: "", notes: "", reqs: "" })
  }
  return(
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label='Name'
        name='name'
        value={destination.name}
        onChange={(e, {value}) => setDestination({...destination, name: value})}
      />
      <Form.Input
        label='Notes'
        name='notes'
        value={destination.notes}
        onChange={(e, {value}) => setDestination({...destination, notes: value})}
      />
      <Form.Input
        label='Requirements'
        name='reqs'
        value={destination.reqs}
        onChange={(e, {value}) => setDestination({...destination, reqs: value})}
      />
      <Form.Button>Save</Form.Button>
    </Form>
  )
}
const ConnectedDestinationForm = (props) => (
  <DestinationConsumer>
    { value => (
      <DestinationForm {...props} {...value} />
    )}
  </DestinationConsumer>
)
export default ConnectedDestinationForm;