import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector  } from 'redux-form';
import _ from 'lodash';

class ContactForm extends React.Component {
  state = {dealer: null, model: null}

  renderError({error, touched}) {
    if (touched && error) {
      return (
        <div style={{color: '#9f3a38'}} className="message">
          <div className="header">{error}</div>
        </div>
      );
    }

    return "";
  }

  renderInput = ({input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return(
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  }

  renderCheckbox = ({input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'ui checkbox error' : 'ui checkbox'}`
    return(
      <div className={className}>
        <input {...input} type="checkbox"/>
        <label htmlFor={input.name}>{label}</label>
        {this.renderError(meta)}
      </div>
    );
  }

  renderTextArea = ({input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return(
      <div className={className}>
        <label>{label}</label>
        <textarea {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  renderModelOptions = () => {
    if(!this.props.dealerSelected){
      return null
    }

    var modelOptions = [];

    Object.values(this.props.inventory).map(inventory => {
      var modelTmp = {carmodelguid: inventory.carmodelguid, model: inventory.model, type: inventory.type, dealerguid: inventory.dealerguid}
      modelOptions.push(modelTmp);
    });

    return (
      _.uniqWith(modelOptions, _.isEqual).map(inventory => {
        var modelDetail = `${inventory.model} ${inventory.type !== "" ? inventory.type : ""}`;
        return parseInt(inventory.dealerguid) === parseInt(this.props.dealerSelected) && 
          <option key={inventory.carmodelguid} value={inventory.carmodelguid}>{modelDetail}</option>
      })
    )
  }

  renderDealerOptions = () => {
    return (
      Object.values(this.props.dealers).map(dealer => {
        return <option key={dealer.guid} value={dealer.guid}>{dealer.name}</option>
      })
    )
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  renderSelect = ({input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return(
      <div className={className}>
        <label>{label}</label>
        <select {...input} className="ui dropdown">
          <option value="">-- Selecciona una opcion --</option>
          {input.name === 'dealer' ? 
            this.renderDealerOptions() : 
            this.renderModelOptions(input.value)}
        </select>
      </div>
    )
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)} >
        <Field 
          name="name" 
          component={this.renderInput} 
          label="Ingrese nombre" />
        <Field 
          name="email" 
          component={this.renderInput}
          label="Ingrese email" />
        <Field 
          name="dealer" 
          component={this.renderSelect} 
          label="Seleciona un dealer"
         />
         <Field 
          name="model" 
          component={this.renderSelect} 
          label="Seleciona un modelo" 
         />
         <Field 
          name="message" 
          component={this.renderTextArea} 
          label="Mensaje" 
         />
         <Field 
          name="policy" 
          component={this.renderCheckbox} 
          label="Terms of Service" 
          type="checkbox"
         />
         <br/>
         <button style={{marginTop: 10}} className="ui button primary" disabled={!this.props.policyChecked}>Submit</button>
      </form>
    )
  } 
}

const validate = formValues => {
  const errors = {};

  if(!formValues.name || !/^[a-zA-Z- ]+$/i.test(formValues.name)){
    errors.name = 'Debes ingresar un nombre';
  }

  if(!formValues.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)){
    errors.email = 'Debes ingresar un correo';
  }

  if(!formValues.dealer){
    errors.dealer = 'Debes seleccion un vendedor';
  }

  if(!formValues.model){
    errors.model = 'Debes seleccionar un modelo';
  }

  if(!formValues.message || !/^[a-zA-Z0-9. ]+$/i.test(formValues.message)){
    errors.message = 'Debes ingresar un mensaje valido';
  }

  if(!formValues.policy){
    errors.policy = 'Debe aceptar las politicas de servicio';
  }

  return errors;
}

const selector = formValueSelector('contactForm')
const mapStateToProps = state => {
    return {
      dealerSelected: selector(state, 'dealer'),
      policyChecked: selector(state, 'policy')
    }
}

const reduxContactForm = reduxForm({
  form: 'contactForm',
  validate
})(ContactForm);

export default connect(mapStateToProps)(reduxContactForm);