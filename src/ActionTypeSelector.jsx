import { drizzleConnect } from 'drizzle-react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select, MenuItem } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import StringRetriever from './StringRetriever';

class ActionTypeSelector extends Component {
    constructor(props, context) {
        super(props);

        // Fetch initial value from chain and return cache key for reactive updates.
        var methodArgs = this.props.methodArgs ? this.props.methodArgs : [];

        this.contracts = context.drizzle.contracts;
        this.state = {
            dataKey: this.contracts[this.props.contract].methods[
                this.props.method
            ].cacheCall(...methodArgs)
        };
    }

    handleChange = event => {
        this.setState({ selected: event.target.value, name: event.target.name });
        this.props.onChange(event);
    };

    render() {
        if (!this.props.contracts[this.props.contract].initialized) {
            return <span>Initializing...</span>;
        }

        if (!(this.state.dataKey in this.props.contracts[this.props.contract][this.props.method])) {
            return <span>Fetching...</span>;
        }

        var tokenAddressArr = this.props.contracts[this.props.contract][this.props.method][this.state.dataKey].value;

        const menuItems = tokenAddressArr.map((tokenAdr, i) => {
            return (
                <MenuItem key={i} value={tokenAdr}>
                    <span style={{ fontWeight: 'bold' }}>
                        <StringRetriever tokenAdr={tokenAdr} attribute={'name'} />
                    </span>
                    &nbsp;
                    <span>
                        [<StringRetriever tokenAdr={tokenAdr} attribute={'symbol'} />]
                    </span>
                </MenuItem>
            );
        });

        return (
            <>
                <InputLabel shrink htmlFor="select-action">action</InputLabel>
                <Select displayEmpty key="select" inputProps={{
                    name: 'action',
                    id: 'select-action',
                }} style={{
                    width: '100%',
                    marginBottom: '15px'
                }} value={this.state.selected} onChange={this.handleChange}>
                    <MenuItem selected disabled value="">
                        <em>None</em>
                    </MenuItem>
                    {menuItems}
                </Select>
            </>
        );
    }
}

ActionTypeSelector.contextTypes = {
    drizzle: PropTypes.object
};

const mapStateToProps = state => {
    return {
        contracts: state.contracts
    };
};

export default drizzleConnect(ActionTypeSelector, mapStateToProps);
