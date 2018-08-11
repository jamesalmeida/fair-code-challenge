import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchVehicles } from '../actions';

class VehiclesIndex extends Component {

  componentDidMount() {
    this.props.fetchVehicles();
  }

  renderVehicleList() {
    return _.map(this.props.vehicles, vehicle => {
      console.log('Inside renderVehicleList =')
      console.log(vehicle);

      function centsToDollars(cents) {
        var dollars = cents / 100;
        return (
          dollars.toLocaleString("en-US", {style:"currency", currency:"USD"})
        );
      }

      return (
        <li className="list-group-item" key={vehicle.id}>
          <Link to={`/vehicles/${vehicle.id}`}>
            <div>
              <img className="vehicle-index-image" src={ vehicle.image_location_list[0]}></img>
              <h3>{ vehicle.model_year } { vehicle.make } { vehicle.model } { vehicle.trim } </h3>
                <ul>
                  <li>Body Style: { vehicle.body_style }</li>
                  <li>Milage: { vehicle.mileage }</li>
                  <li>Condition: { vehicle.new_used_flag }</li>
                  <li>VIN: { vehicle.id }</li>
                  <li>Montly Payment: { centsToDollars(vehicle.product_financials[0].monthly_payment_cents) }</li>
                  <li>Start Fee: { centsToDollars(vehicle.product_financials[0].start_fee_cents) }</li>
                  <li>Finance ID: { vehicle.product_financials[0].id }</li>
                </ul>
            </div>
          </Link>
        </li>
      );
    });
  }

  render() {
    console.log('From inside the posts_index render:');
    console.log('this.props.vehicles = ');
    console.log(this.props.vehicles);
    return (
      <div>
        <h3>Cars</h3>
        <ul className="list-group">
          { this.renderVehicleList() }
        </ul>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { vehicles: state.vehicles };
}

export default connect(mapStateToProps, { fetchVehicles })(VehiclesIndex);
