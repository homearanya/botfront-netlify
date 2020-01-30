import React from "react";
import { hotjar } from 'react-hotjar';
import "./index.css";

export default class MainLayout extends React.Component {

  componentDidMount() {
    hotjar.initialize(1318361,6);
  }

  render() {
    const { children } = this.props;
    return (
      <>
        {children}
      </>
    );
  }
}
