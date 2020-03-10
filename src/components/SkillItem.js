import React, { Component } from 'react';

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from "react-visibility-sensor";

const progressbarStyle = buildStyles({
  pathColor: "#6f42c1"
})

export class SkillItem extends Component {
  render() {
    return (
      <div style={{ width: "100px" }}>
        <VisibilitySensor>
          {({ isVisible }) => {
            const percentage = isVisible ? this.props.value : 0;
            return (
              <CircularProgressbarWithChildren
                value={percentage}
                styles={progressbarStyle}
              >
              {this.props.children}
              </CircularProgressbarWithChildren>
            );
          }}
        </VisibilitySensor>
      </div>
    )
  }
}

export default SkillItem;