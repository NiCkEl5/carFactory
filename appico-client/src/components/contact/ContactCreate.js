import React from 'react';
import ContactForm from './ContactForm';
import { connect } from 'react-redux';
import moment from 'moment';
import Modal from '../Modal';
import { fetchDealers, fetchInventory, createContact, clearError } from '../../actions'
import history from '../../history';

class ContactCreate extends React.Component {
  componentDidMount() {
    this.props.fetchDealers();
    this.props.fetchInventory();
  }

  onSubmit = (formValues) => {
    formValues.created = moment().toISOString();
    formValues.dealer = parseInt(formValues.dealer); 
    formValues.model = parseInt(formValues.model); 
    this.props.createContact(formValues);
  }

  renderContent() {
    return 'Ha habido un error al crear la entrada, revise los datos ingresado o pongase en contacto con nosotros...'
  }

  renderActions() {
    return (
      <React.Fragment>
        <button 
          onClick={() => this.props.clearError()} 
          className="ui button"
        >
          Ok!
        </button>
      </React.Fragment>
    )
  }
  
  render() {
    return(
      <div>
        <ContactForm 
          onSubmit={this.onSubmit} 
          dealers={this.props.dealers} 
          inventory={this.props.inventory}/>
        {this.props.error.formError && 
          <Modal 
            title="Error no esperado"
            content={this.renderContent()}
            actions={this.renderActions()}
            onDismiss={() => history.push('/')}
          />
          }
      </div>
    );
  };
}

const mapStatetoProps = (state) => {
  const { dealers, inventory, contacts, error=false } = state
  return {
    dealers,
    inventory,
    contacts,
    error
  }
}

export default connect(mapStatetoProps, { fetchDealers, fetchInventory, createContact, clearError })(ContactCreate);