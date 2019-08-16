import React, {Component} from 'react';

const task = (WrappedComponent)=>{
    class HOC extends Component{
        constructor(props){
            super(props);
            this.state = {
                render: true,
                edit: false,
                title: this.props.title,
                valueTitleInput: this.props.title,
                description: this.props.description,
                valueDescriptionInput: this.props.description,
                priority: this.props.priority,
                valuePriorityInput: this.props.priority
            };
        }

        colorsCard = () => {
            return {
                '1': '#fdd',
                '2': 'white',
                '3': '#f5f5f5',
                '4': '#dddddd'
            }
        };

        checkedOnPersonalMark = (value) => {
            return this.state.title.indexOf('Personal') > -1 ? '#ffffe2' : this.colorsCard()[value];
        };

        destroyCard = () => {
            this.props.decreaseCountCards();
            this.props.updateCards({}, this.props.id, true);
            this.setState({
                render: false
            });
        };

        windowForEdit = (value) => {
            this.setState({
                edit: value
            })
        };

        editCard = () => {
            this.setState({
                edit: false,
                title: this.state.valueTitleInput,
                description: this.state.valueDescriptionInput,
                priority: this.state.valuePriorityInput
            }, () => this.props.updateCards({
                title: this.state.title,
                description: this.state.description,
                priority: this.state.priority
            }, this.props.id, false));
        };

        handleEditData = (name) => (event) => {
            this.setState({
                [name]: event.target.value
            })
        };

        render() {
            return (
                <WrappedComponent
                    checkedOnPersonalMark={this.checkedOnPersonalMark}
                    destroyCard={this.destroyCard}
                    windowForEdit={this.windowForEdit}
                    editCard={this.editCard}
                    handleEditData={this.handleEditData}
                    state={this.state}
                    {...this.props}
                />
            );
        }
    }
    return HOC
}

export default task;