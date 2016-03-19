var Done = React.createClass( {
    handleClick() {
        this.props.changeStatus( this.props.id );
    },
    render() {
        if ( this.props.status ) {
            return (
                    <span onClick={ this.handleClick }>
                        Done:
                    </span>
            );
        }
        else {
            return (
                    <span onClick={ this.handleClick }>
                        Undone:
                    </span>
            );
        }
    }
} );

var ListItem = React.createClass( {

    //props are a call back function handleClick, text , Status

    render() {
        return (
                <div id={ this.props.id }>
                    < Done id={ this.props.id }
                           changeStatus={ this.props.changeStatus }
                           status={ this.props.status }
                    />
                    {this.props.text}
                </div >);
    }
} );

var List = React.createClass( {
    ListItem: [],
    render() {
        this.ListItem = this.props.ListItem.map( function ( item, index ) {
                    return ( < ListItem id={ index }
                                                   text={ item.text }
                                                   status={ item.status }
                                                   changeStatus={ this.props.changeStatus }/> );
                }.bind( this )
        );

        return ( < div >
            { this.ListItem }
        </ div> );

    }
} );

var View = React.createClass( {
    render() {
        return (
                < select value='1'>
                    < option value='1'>
                        All
                    </option>
                    < option value='2'>
                        Done
                    </option>
                    <option value='3'>
                        Not Done
                    </option>
                </select>
        );
    }
} );

var InputBox = React.createClass( {
    render() {
        return (
                <input placeholder="Enter Task Here">
                </input>);
    }
} );

var temp = [
    {
        status: true,
        text  : "Come Home"
    }, {
        status: false,
        text  : "Come haha"
    }, {
        status: true,
        text  : "Dont Come Home"
    }
];

var Parent = React.createClass( {

    getInitialState() {
        return {
            view: '1',
            task: temp //todo: rename
        };
    },

    updateStatus( id ) {

        //todo: DO NOT mutate state
        this.setState( {this.state.view,task:[] );
    },

    render() {
        return (
                <div>
                    <InputBox />
                    <View />
                    <List ListItem={ this.state.task }
                          changeStatus={ this.updateStatus }
                    />
                </div>
        );
    }
} );

ReactDOM.render(
        <Parent />,
        document.getElementById( 'container' )
);
