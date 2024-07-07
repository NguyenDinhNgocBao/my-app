import React, { useState } from 'react';
import DeleteInfor from './DeleteInfor';
import './DisplayInfor.scss';
import logo from './../logo.svg'

const ListUser = (props) => {//Nhận giá trị props là hàm deleteInfor và danh sách arrInfor từ UserComponent truyền xuống
    const [isShowed, setShowed] = useState(true) //Tạo useState để kiểm tra với giá trị ban đầu là true
    const colors = ['#FFDDC1', '#FFE4E1', '#E6E6FA', '#D3FFCE', '#FFFACD'];//Mảng các màu sắc để sử dụng cho nền của các mục trong danh sách

    const handelCheckList = () => {//Hàm xử lý khi người dùng nhấn nút ẩn/hiện danh sách
        setShowed(!isShowed)//Thay đổi giá trị của isShowed (từ true thành false và ngược lại)
    }

    return(
        <>  
            {isShowed === true ? 
                <button  onClick={handelCheckList}>Hide</button> //Nút để ẩn danh sách. Khi isShowed là true, hiển thị nút "Hide"
                : <button  onClick={handelCheckList}>Show</button> //Nút để hiện danh sách. Khi isShowed là false, hiển thị nút "Show"
            }
            
            {isShowed &&  //Nếu isShowed là true, hiển thị danh sách người dùng
                <>
                    {
                        //Sử dụng map duyệt qua mảng arrInfors và hiển thị từng mục.
                        props.arrInfors.map((item,index) => { 
                            return(
                                <div className='main-container' key={index}>
                                    <div className='container'>
                                        
                                        <ul style={+item.age > 18 ? {backgroundColor: "#cccc"} : {backgroundColor: colors[index % colors.length]}}>
                                            <li>Name: {item.name}</li>
                                            <li>Age: {item.age}</li>
                                        </ul>
                                        <img className='img-container' src={logo} alt='logo'/>
                                        <DeleteInfor item={item} deleteInfor = {props.deleteInfor}/> 
                                        <hr />
                                    </div>
                                </div>
                            )
                        })
                    }
                </>      
            }
        </>
    )
}
export default ListUser;
/*
class ListUser extends React.Component {
    
    state = {
        isShowed: true
    }
    handelCheckList = () =>{
        this.setState({isShowed: !this.state.isShowed});
    }
    render(){
        let {arrInfors, deleteInfor} = this.props;
        let {isShowed} = this.state;
        const colors = ['#FFDDC1', '#FFE4E1', '#E6E6FA', '#D3FFCE', '#FFFACD'];

        return(
            <>  
                {isShowed === true ? 
                    <button  onClick={(event) => this.handelCheckList(event)}>Hide</button> 
                    : <button  onClick={(event) => this.handelCheckList(event)}>Show</button>}
                
                {isShowed && 
                    <>
                        {
                            arrInfors.map((item,index) => {
                                return(
                                    <div className='main-container'>
                                        <div className='container'>
                                            <ul style={+item.age > 18 ? {backgroundColor: "#cccc"} : {backgroundColor: colors[index % colors.length]}} key={index}>
                                                <li>Name: {item.name}</li>
                                                <li>Age: {item.age}</li>
                                            </ul>
                                            <img className='img-container' src={logo} alt='logo'/>
                                            <DeleteInfor item={item} deleteInfor = {deleteInfor}/>
                                            <hr />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </>      
                }
            </>
        )
    }
}
*/
