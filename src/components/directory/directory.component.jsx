import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import SECTIONS_DATA from "./sections.data";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS_DATA
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {/* ...otherSectionProps means we pull every other prop without 
        having to include them specifically. */}
        {this.state.sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps}/>
        ))}
      </div>
    );
  }
}

export default Directory;