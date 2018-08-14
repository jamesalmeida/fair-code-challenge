import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVehicle } from '../actions';

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
      <div className="card vehicle-card card-inverse">
        <img className="img card-img-top" alt="Card image" src={ vehicle.image_location_list[0]}></img>
        <div className="card-img-overlay">
          <h4 className="card-title">
            { vehicle.model_year } { vehicle.make }
          </h4>
          <h6 className="card-subtitle mb-2 text-muted">
             { vehicle.model } { vehicle.trim }
          </h6>
        </div>
        <div className="card-info card-block">
          <ul>
            <li>
              Body Style: { vehicle.body_style }
            </li>
            <li>
              Milage: { vehicle.mileage }
            </li>
            <li>
              Condition: { vehicle.new_used_flag }
            </li>
            <li>
              Montly Payment: { centsToDollars(vehicle.product_financials[0].monthly_payment_cents) }
            </li>
            <li>
              Start Fee: { centsToDollars(vehicle.product_financials[0].start_fee_cents) }
            </li>
          </ul>
          <p className="card-text">
            <small className="text-muted">
              VIN: { vehicle.id }
            </small>
          </p>
          <a href="#" className="btn btn-primary">Favorite</a>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ vehicles }, ownProps) {
  return { vehicle: vehicles[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchVehicle })(VehicleDetail);
