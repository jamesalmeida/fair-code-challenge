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
        <div className="card p-3 col-sm" key={vehicle.id}>
          <Link to={`/vehicles/${vehicle.id}`}>
            <img className="vehicle-index img" src={ vehicle.exterior_color_info.fair_colored_image}></img>
            <span className="vehicle-text model-year">{ vehicle.model_year } { vehicle.make } </span>
            <span className="vehicle-text model">{ vehicle.model } { vehicle.trim }</span>
            <span className="vehicle-text as-low-as">As low as</span>
            <span className="vehicle-text monthly-cost">{ centsToDollars(vehicle.product_financials[0].monthly_payment_cents) }</span>
            <span className="vehicle-text per-month">Per Mo. </span>
            <span className="vehicle-text milage">Milage: { vehicle.mileage }</span>
          </Link>
        </div>
      );
    });
  }

  render() {
    console.log('From inside the posts_index render:');
    console.log('this.props.vehicles = ');
    console.log(this.props.vehicles);
    return (
      <div className="">
        { this.renderVehicleList() }
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { vehicles: state.vehicles };
}

export default connect(mapStateToProps, { fetchVehicles })(VehiclesIndex);
