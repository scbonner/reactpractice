import React from "react";
import "./styles.css";

//attempting to change the color of the on or off click
//1. try adding colors as part of initial state
//

export default class ColorToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isColorToggleButtonOn: true };

    // This binding is necessary to make `this` work in the callback
    //
    this.handleClick = this.handleClick.bind(this);
  }

  //change color of button

  handleClick() {
    this.setState((prevState) => ({
      isColorToggleButtonOn: !prevState.isColorToggleButtonOn
    }));
  }

  render() {
    let flick = '';
    this.state.isColorToggleButtonOn ? (flick = 'on') : (flick = 'off');
    
    return (
      <div>
        <h1>The Importance of the Flicking the Lights Off</h1>
          <h2>Do you waste more electricity by turning the lights on and off?</h2>
          <ol>
            <li>Leaving the lights on because it takes more energy to turn them back on 
              is a common myth. They do use a small surge of power to turn on, but it’s 
              significantly smaller than the amount you’d save by turning them off
              when you don’t need them.</li>
          </ol>
          <h2>Saving energy at the flick of a switch!</h2>
          <ol>
            <li>It’s the simple things we forget like turning the light off when we
               leave the room or closing the door to keep the heat in that can cost
                us the most.
            </li>
            <li>Flicking off a switch can help you save money, reduce 
                your carbon footprint and help extend the life of your light bulbs – 
                it’s a win win.
            </li>
            <li>So get everyone in your home into the habit and 
                you’ll soon start reaping the benefits – it really is as easy as it
                 sounds!
            </li>
          </ol>

      <div>
        <h3>Try Clicking On/Off The Button.</h3>
          <button className={flick} onClick={this.handleClick}>
            {this.state.isColorToggleButtonOn ? "ON" : "OFF"}
          </button>
      </div>
      <br />
      <br />
    <div>
      <label htmlFor='comment'>Share your energy tips in box below:</label>
      <br />
{/* adding area for text input */}
        <textarea id='comment' name='comment' rows='5' cols='33'>
        </textarea>
      </div>
    </div>
    );
  }
}

 

// The Importance of the Flicking the Lights Off
// Do you waste more electricity by turning the lights on and off?
// Leaving the lights on because it takes more energy to turn them back on is a common myth. They do use a small surge of power to turn on, but it’s significantly smaller than the amount you’d save by turning them off when you don’t need them.
// Saving energy at the flick of a switch!
// It’s the simple things we forget like turning the light off when we leave the room or closing the door to keep the heat in that can cost us the most.
// Flicking off a switch can help you save money, reduce your carbon footprint and help extend the life of your light bulbs – it’s a win win.
// So get everyone in your home into the habit and you’ll soon start reaping the benefits – it really is as easy as it sounds!
// Try Clicking On/Off The Button.
// ON


// Share your energy tips in box below:

//textarea box does not copy over