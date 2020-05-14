import React from 'react';
import { connect } from 'react-redux';
import { fetchInventory } from '../../actions';

class InventoryList extends React.Component {
  componentDidMount() {
    this.props.fetchInventory();
  }

  renderList = () => {
    return this.props.inventory.map(i =>{
        return (
          <div className="card" key={i.guid}>
            <div className="content">
              <div className="header">{i.dealerName}</div>
              <div className="meta">{i.vin}</div>
              <div className="description">
                <span>
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
  
  render() {
    return(
      <div>
        <h2>List</h2>
        <div className="ui cards">
          {this.renderList()}
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return { 
    inventory: Object.values(state.inventory)
  }
}

export default connect(mapStateToProps, { fetchInventory })(InventoryList);