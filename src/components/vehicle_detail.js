import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVehicle } from '../actions';
import { Link } from 'react-router-dom';

class VehicleDetail extends Component {
  componentDidMount() {
    if(!this.props.vehicle) {
      const { id } = this.props.match.params;
      this.props.fetchVehicle(id);
    }
  }

  render() {
    const { vehicle } = this.props;
    console.log(vehicle);

    if (!vehicle) {
      return <div>Loading...</div>;
    }

    function centsToDollars(cents) {
      var dollars = cents / 100;
      return (
        dollars.toLocaleString("en-US", {style:"currency", currency:"USD"})
      );
    }

    return (
        <div className="list-group-item col-sm-12">
          <Link className="button-main pull-xs-right" to="/">Back To Index</Link>
          <div className="post-body">
            <h3>{vehicle.model}</h3>
            <img className="vehicle-index-image" src={ vehicle.image_location_list[0]}></img>
            <h6>{ vehicle.model_year } { vehicle.make } { vehicle.model } { vehicle.trim } </h6>
            <ul>
              <li>Body Style: { vehicle.body_style }</li>
              <li>Milage: { vehicle.mileage }</li>
              <li>Condition: { vehicle.new_used_flag }</li>
              <li>VIN: { vehicle.id }</li>
                <li>Montly Payment: { centsToDollars(vehicle.product_financials[0].monthly_payment_cents) }</li>
                <li>Start Fee: { centsToDollars(vehicle.product_financials[0].start_fee_cents) }</li>
              <li>Finance ID: </li>
            </ul>
          </div>
        </div>
    );
  }
}

function mapStateToProps({ vehicles }, ownProps) {
  return { vehicle: vehicles[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchVehicle })(VehicleDetail);
