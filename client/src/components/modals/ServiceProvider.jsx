import { useState, useContext } from 'react';

import ModalTemp from '@/components/modals/ModalTemplate';

import { UserContext } from '@/utils/UserContext';

export default function ServiceProvider({ service }){
  const context = useContext(UserContext)
  const defaultForm ={
    name:'',
    duration:'',
    cost:'',
    description:''
  };
  const [formData,setFormData] = useState(defaultForm);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    debugger;
    const dataToSend = Object.entries(formData).reduce((memo,[key,val])=>{
      if(val !== service[key] && (val || val === '0')){
        memo[key] = val;
      }else{
        memo[key] = service[key];
      }
      return memo;
    },{});
    debugger;
    await context.editService(service._id,dataToSend);
    setFormData(defaultForm);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  const deleteService = async () => {
    await context.deleteService(service._id);
  }
  return (
    <ModalTemp title={service.name} modalTitle={service.name} >
      <>
        <h3>Edit service</h3>
        <form onSubmit={handleFormSubmit}>
          <div className='labelInput'>
            <label className='label name' htmlFor='service-name'>
              Service Name
            </label>
            <input
              type='text'
              placeholder={service.name}
              id='service-name'
              name='name'
              onChange={handleChange}
              value={formData.name}
              
            ></input>
          </div>
          <div className='labelInput'>
            <label className='label duration' htmlFor='service-duration'>
              Service Duration
            </label>
            <input
              type='number'
              placeholder={service.duration}
              id='service-duration'
              name='duration'
              onChange={handleChange}
              value={formData.duration}
              
            ></input>
          </div>
          <div className='labelInput'>
            <label className='label cost' htmlFor='service-cost'>
              Service Cost
            </label>
            <input
              type='number'
              placeholder={service.cost}
              id='service-cost'
              name='cost'
              onChange={handleChange}
              value={formData.cost}
              
            ></input>
          </div>
          <div className='labelInput'>
            <label className='label description' htmlFor='service-description'>
              Service description
            </label>
            <textarea
              name="description" 
              onChange={handleChange}
              id="service-description"
              value={formData.description}
              placeholde={service.description}
              ></textarea>
          </div>
        <button
          className='submitBtn'
          disabled={!(formData.name || formData.duration || formData.cost || formData.description)}
          type='submit'
          variant='success'
        >
          Submit
        </button>
        <button
          type='button'
          className='submitBtn'
          name='delete-btn'
          onClick={deleteService}
        >
          Delete
        </button>
        </form>
      </>
    </ModalTemp>
  )
}