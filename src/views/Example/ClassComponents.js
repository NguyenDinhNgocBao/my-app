import React, { useState, useEffect } from "react"; // import thư viện
import AddInfor from "./AddInfor";
import ListUser from "./ListUser";



const UserComponents = () => {// khởi tạo function component 
    
    //Khởi tạo useState chứa 1 mảng user gồm id, name và age 
    const [arrInfors, setArrInfors] = useState([
        {id:"1", name:"Bao",age:"20"}// Khởi tạo giá trị cho useState
    ])

    //useEffect này chạy 1 lần khi component được mount vì có tham số thứu 2 là mảng rỗng
    useEffect(() => {
        const storedInfo = localStorage.getItem('arrInfors'); // Lấy dữ liệu được lưu trữ trong local storage của trình duyệt dưới key 'arrInfors'.
        if (storedInfo) {
            setArrInfors(JSON.parse(storedInfo)); //Nếu tìm thấy dữ liệu, nó sẽ phân tích chuỗi JSON trở lại thành mảng và cập nhật arrInfors bằng cách sử dụng setArrInfors.
        }
    }, []);

    //useEffect này chạy mỗi khi arrInfors thay đổi (vì arrInfors được bao gồm trong mảng dependency).
    useEffect(() => {
        localStorage.setItem('arrInfors', JSON.stringify(arrInfors));//Chuyển đổi arrInfors thành chuỗi JSON và lưu trữ nó trong local storage dưới key 'arrInfors'.
    }, [arrInfors]);
    
    //Hàm thêm user
    const addNewUser = (infor) => {
        const updatedInfo = [infor, ...arrInfors]; //thêm infor vào đầu mảng arrInfors
        setArrInfors(updatedInfo);//cập nhật lại state
        localStorage.setItem('arrInfors', JSON.stringify(updatedInfo));//Lưu trữ mảng được cập nhật vào local storage.
    }
    //Hàm xóa user
    const deleteInfor = (id) => {
        if (id === undefined) {
            console.error("Cannot delete: id is undefined");//nếu id là undefined thì gh ithoong báo lỗi
            return;
        }
        setArrInfors(prevInfor => prevInfor.filter(user => user.id !== id))//Cập nhật lại state với mảng mới loại trừ đi user với id được chỉ định
    }

    return (
        <>
            <AddInfor addNewUser = {addNewUser} />
            <ListUser arrInfors = {arrInfors} deleteInfor = {deleteInfor}/> 
        </>
    )   
}

export default UserComponents;
