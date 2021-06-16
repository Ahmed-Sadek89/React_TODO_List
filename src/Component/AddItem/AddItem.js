import React , {Component} from  'react';



class AddItem extends Component{

    state = {
        name: '',
        age:''
    }

    handleChange = (e)=>{
        //console.log( e.target.value )
        this.setState({
            [e.target.id] : e.target.value 
        });
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        if( e.target.name.value.trim() === '' || e.target.age.value.trim() === '')
        {
            return false;
        }
        else
        {
            this.props.AddItem(this.state);
            this.setState({ //after submit the input value will be cleared
                name:'',
                age:''
            })
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Enter name ..' id='name' onChange={this.handleChange} value={this.state.name}/>
                    <input type='number' placeholder='Enter age ..' id='age' onChange={this.handleChange} value={this.state.age}/>
                    <input type='submit' value='Add'/>
                </form>
            </div>
        )
    }

}

export default AddItem;