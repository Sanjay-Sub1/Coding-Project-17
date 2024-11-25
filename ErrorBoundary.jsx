import React, { Component } from "react";
class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error caught:", error);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong while fetching data.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
