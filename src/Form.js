import React,{Component} from 'react'

export default class Form extends Component{

  state={
    img: '',
    name: ''
  }

  changeHandler =(e) =>{
    this.setState({[e.target.name]: e.target.value})
  }
  submitHandler =(e) =>{
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setState({name:'',img:''})
  }

  render(){
    const {name,img} = this.state
    return(
      <form className="center" onSubmit= {this.submitHandler}>
        <input className="center" type="text" name="img" value={img} placeholder="Enter Url" onChange = {this.changeHandler}/><br></br>
        <input className="center" type="text" name="name" value={name} placeholder="Name" onChange= {this.changeHandler}/>
        <button className="button">New Post</button>
      </form>
    )
  }
}
