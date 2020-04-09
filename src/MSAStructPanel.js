import React, { Component } from 'react';

import MSAStruct from './MSAStruct';

class MSAStructPanel extends Component {
  
  render() {
    return (<div className="MSA-structures">
            {this.props.structures.map ((structure) => {
              return (<MSAStruct
                      key={structure.key}
                      structure={structure}
                      config={this.props.config}
                      handleCloseStructure={this.props.handleCloseStructure}
                      />)
            })}
            </div>)
  }
}

export default MSAStructPanel;
