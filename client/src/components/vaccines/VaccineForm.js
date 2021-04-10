import { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { VaccineConsumer } from '../../providers/VaccineProvider';

const VaccineForm = ({ addVaccine }) => {
  const [vaccine, setVaccine] = useState({ name: "", desc: "", make: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    addVaccine(vaccine)
    setVaccine({ name: "", desc: "", make: "" })
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label='Name'
        name='name'
        value={vaccine.name}
        onChange={(e, {value}) => setVaccine({...vaccine, name: value})}
      />
      <Form.Input
        label='Desc'
        name='desc'
        value={vaccine.desc}
        onChange={(e, {value}) => setVaccine({...vaccine, desc: value})}
      />
      <Form.Input
        label='Make'
        name='make'
        value={vaccine.make}
        onChange={(e, {value}) => setVaccine({...vaccine, make: value})}
      />
      <Form.Button>Save</Form.Button>
    </Form>
  )
}

const ConnectedVaccineForm = (props) => (
  <VaccineConsumer>
    { value => (
      <VaccineForm {...props} {...value} />
    )}
  </VaccineConsumer>
)

export default ConnectedVaccineForm;