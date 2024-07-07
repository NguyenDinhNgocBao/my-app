import React, {useState} from 'react';

const AddInfor = (props) => {//Nhận giá trị props là hàm addNewUser từ UserComponent truyền xuống
    const [name, setName] = useState("")//tạo useState name
    const [age, setAge] = useState("")//tạo useState age

    const handleOnChangeName = (event) => {//Hàm để xử lý giá trị của ô input Name
        setName(event.target.value);//Cập nhật lại giá trị state name bằng với giá trị của ô input hiện tại
    }

    const handleOnChangeAge = (event) => {//Hàm để xử lý giá trị của ô input Age
        setAge(event.target.value);//Cập nhật lại giá trị state age bằng với giá trị của ô input hiện tại
    }
    
    const handelSubmit = () => {//Hàm xử lý người dùng khi submit
        if(!name || !age){//Kiểm tra name hoặc age trống thì thông báo
            alert("Please enter")
        }else{//Nếu cả name và age không rỗng
            alert("Hello: " + name + " " + age);//Thông báo giá trị name và age được nhập 
            props.addNewUser({//Gọi hàm addNewUser
                id: Math.floor(Math.random() * 11),//Tạo id ngẫu nhiên từ 1 đến 10
                name: name,//Gán name bằng với name hiện tại
                age: age//Gán age bằng với age hiện tại
            })
            setName("")//Sau khi thêm thành công thì đặt giá trị ở ô input name bằng rỗng
            setAge("")//Sau khi thêm thành công thì đặt giá trị ở ô input age bằng rỗng
        }
        
    }

    return(
        <div className="main">
                <input placeholder='Name' type="text" onChange={handleOnChangeName} value={name}/>
                <input placeholder='Age' type="text" onChange={handleOnChangeAge} value={age}/>
                <div className="submit">
                    <button type="submit" onClick={handelSubmit}>Submit</button>
                </div>
                <h1 className="name">Name: {name}</h1>
                <h1 className="age">Age: {age}</h1>
            </div>
    )
}
export default AddInfor;
/*
class Infor extends React.Component {
    state = {
        name: "",
        age: "",
    }

    handleOnChangeName = (event) => {
        this.setState({name: event.target.value});
    }
    handleOnChangeAge = (event) => {
        this.setState({age: event.target.value});
    }
    
    handelSubmit = (event) => {
        
        if(!this.state.name || !this.state.age){
            alert("Please enter")
        }else{
            alert("Hello: " + this.state.name + " " + this.state.age);
            this.props.addNewUser({
                id: Math.floor(Math.random() * 11),
                name: this.state.name, 
                age: this.state.age
            })
            this.setState({name: "", age: ""})
        }
        
    }
    render() {
        return(
            <div className="main">
                <input placeholder='Name' type="text" onChange={(event) => this.handleOnChangeName(event)} value={this.state.name}/>
                <input placeholder='Age' type="text" onChange={(event) => this.handleOnChangeAge(event)} value={this.state.age}/>
                <div className="submit">
                    <button type="submit" onClick={() => this.handelSubmit()}>Submit</button>
                </div>
                <h1 className="name">Name: {this.state.name}</h1>
                <h1 className="age">Age: {this.state.age}</h1>
            </div>
        )
    }
}
*/

