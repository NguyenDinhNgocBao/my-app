import React from 'react';

const DeleteInfor = ({item, deleteInfor}) => {//Nhận giá trị props là item và deleteInfor từ component ListUser truyền xuống
    const handleDelete = () => {//Hàm xử lý khi người dùng nhấn nút "Delete"
        if (item && item.id !== undefined) {//Kiểm tra nếu item tồn tại và item.id không undefined
            deleteInfor(item.id);//Gọi hàm deleteInfor với tham số item.id
        } else {
            console.error("Cannot delete: item or item.id is undefined");//Nếu khoogn thì báo lỗi 
        }
    };
    return(
        <button onClick={handleDelete}>Delete</button>//Trả về một nút (button) với sự kiện onClick gán vào hàm handleDelete
    )
}
export default DeleteInfor;
/*
class DeleteInfor extends React.Component {
    handleDelete = () => {
        this.props.deleteInfor(this.props.item.id);
    }
    render() {
        return(
            <button onClick={() => this.handleDelete()}>Delete</button>
        )
    }
}
    */


