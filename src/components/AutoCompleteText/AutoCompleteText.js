import React from 'react';

import './AutoCompleteText.css'


export default class AutoCompleteText extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            suggestions: [],
            text: '',
        };
    }

    onTextChanged = (e) => {
        const { items } = this.props;
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            suggestions = items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({suggestions, text: value}));
    }

    suggestionsSelected (value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }

    renderSuggestions () {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item) => <li onClick={() => this.suggestionsSelected(item)}><a className="autoCompleteText_link">{item}</a></li>)}
            </ul>
        );
    }


    render () {
        const { text } = this.state
        return (
            <div className="autoCompleteText">
                <input className="autoCompleteText__input" value={text} onChange={this.onTextChanged} type="text" />
                <div className="autoCompleteText__button">
                    <a href="*">Найти</a>
                </div>
                <div className="autoCompleteText__suggestions">
                {this.renderSuggestions()}
                </div>
            </div>
        )
    }
}