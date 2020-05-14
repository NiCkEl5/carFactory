import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchContacts } from '../../actions';
import moment from 'moment';

class ContactList extends React.Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  renderContactList() {
    if(Object.keys(this.props.contacts).length === 0) {
      return <p style={{textAlign: 'center'}}>No exites contactos para mostrar</p>
    }

    

    return this.props.contacts.map(i =>{
      return (
        <div className="ui card" key={i.guid}>
          <div className="content">
            <div className="header">{i.name}</div>
            <div className="meta">{i.email}</div>
            <div className="meta">{moment(i.created).format('MMMM Do YYYY')}</div>
            <div className="description">
              <span>
                <p style={{wordBreak: "break-word"}}>Message: {i.message}</p>
                Dealer: {i.dealername}
                <br/>
                Make: {i.make}
                <br/>
                Model: {i.model}
                <br/>
                Type: {i.type}
              </span>
            </div>
          </div>
        </div>
      );
    }
  );
  }

  renderCreate() {
    return (
      <div style={{marginTop: 10}}>
        <Link className="ui button primary" to={'/new'}>
          Crear Contacto
        </Link>
      </div>
    );
  }


  render() {
    return(
      <div style={{marginBottom: 10}}>
        <h2>Contact List</h2>
        <div className="ui cards">
        { this.renderContactList() }
        </div>
        { this.renderCreate() }
      </div>
    );
  };
};

const mapStateToProps = (state) =>{
  return {
    contacts: Object.values(state.contacts)
  }

}

export default connect(mapStateToProps, { fetchContacts })(ContactList);