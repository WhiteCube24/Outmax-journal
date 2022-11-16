// import { Component } from "react/cjs/react.production.min";
import { Component } from "react";
import ErrorMessage from "./ErrorMessage";
class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        })
    }

    render() {
        if(this.state.error) {
            return <ErrorMessage/>
        }
        return this.props.children;
    }
}
export default ErrorBoundary;