import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVehicle } from '../actions';
import { centsToDollars } from '../utils/utility_functions';
import Carousel from 'nuka-carousel';

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
      console.log('Still loading...');
      return <div className="loading-div">Loading...</div>;
    }

    $(function() {
      $(".favorites-heart").on("click", function() {
        $(this).toggleClass("is-active");
      });
    });

    let handleLoadImage = () => {
      this.carousel.setDimensions()
    }

    return (
      <div className="vehicle-wrapper grid">
        <div className="grid-box-title">
          <div className="title-sub-fave">
            <h4 className="card-title">
              { vehicle.model_year } { vehicle.make }
            </h4>
            <h6 className="card-subtitle mb-2 text-muted">
               { vehicle.model } { vehicle.trim }
            </h6>
            <div className="favorites-heart-stage">
              <div className="favorites-heart"></div>
            </div>
          </div>
        </div>
        <div className="grid-box-carousel">
          {/* Carousel options aren't working perfectly. Wanted false for renderBottomControls but throws a weird console error when I used boolean. Also needed to kind fof hack the display height because it would load before the images and be set to 0 until you resized the window. Using onLoad to reset the dimensions. */}
          <Carousel
            wrapAround={true}
            renderBottomCenterControls={() => {}}
            ref={c => this.carousel = c} >
            { vehicle.image_location_list.map(image =>
              <img
                key={vehicle.id}
                className="img"
                alt="Car image"
                src={image}
                onLoad={handleLoadImage} />
            )}
          </Carousel>
        </div>
        <div className="car-info grid-box-car-info">
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
        </div>
      </div>
    );
  }
}

function mapStateToProps({ vehicles }, ownProps) {
  return { vehicle: vehicles[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchVehicle })(VehicleDetail);
