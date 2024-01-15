import { Component } from 'react';

class AddContact extends Component {

    state = {
        name:'',
        email:'',
        mob:'',
    }

    Add = (e) => {
       
        e.preventDefault(); //prevent page refresh
        if(this.state.name === '' || this.state.mob === '' || this.state.email === ''){
            alert("All the fields are mandatory!.");
            return;
        }
        console.log("Contact details: ",this.state);
        this.props.addContactHandler(this.state);
        
    }

    render() {
        return <>
            <div className="container card" style={{alignContent: 'center'}}>
                

                <div className="card-body" style={{ width: "30rem" }}>
                   <h3>Add Contacts</h3> 
                </div>
                <hr/>
                <form onSubmit={this.Add}>
                <div>
                    <label className='form-label'>
                        Name :
                        <input className='form-control' 
                        id='name'
                        type='text' 
                        placeholder='Enter Name' 
                        value={this.state.name}
                        onChange={(e)=> this.setState({name:e.target.value})}/>
                    </label>
                </div>
                <div>
                    <label className='form-label'>
                        Mob Number :
                        <input className='form-control' 
                        id='mob'
                        type='text' 
                        placeholder='Enter Mobile Number' 
                        value = {this.state.mob }
                        onChange = {(e)=>this.setState({mob: e.target.value})}/>
                    </label>
                </div>
                <div>
                    <label className='form-label'>
                        Email :
                        <input className='form-control' 
                        id='email'
                        type='email' 
                        placeholder='Enter email id' 
                        value = {this.state.email}
                        onChange = {(e)=>this.setState({email: e.target.value})}/>
                    </label>
                </div>
               
                <div>
                    
                        
                        <input className="btn btn-primary mb-3" 
                        type =  'submit' 
                        value='Add'/>
                    
                </div>
                </form>
            </div>

        </>

    };
}

export default AddContact;