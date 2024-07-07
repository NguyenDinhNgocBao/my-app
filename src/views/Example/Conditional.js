import React from "react"

const desc = [
  {
    id: 0,
    description: "Space suit",
    isPacked: true,
  },
  {
    id: 1,
    description: "Helmet with a golden leaf",
    isPacked: true,
  },
  {
    id: 2,
    description: "Photo of Tam" ,
    isPacked: false,
  },
  {
    id: 3,
    description: "Test React",
    isPacked: true,
  },
]

const Item = desc.filter(item => 
  item.isPacked === true
)

class PackingList extends React.Component{
  state ={
      isChecked: true
  }
  handleClickToggle = () => {
    this.setState({
      isChecked : !this.state.isChecked
    })
  }

    render(){
      let {isChecked} = this.state
      const listItem = Item.map(item => 
        <li key={item.id}>
          <p>
            <b>{item.id}:</b>
            {' ' + item.description + ' '}
          </p>
        </li>
      )
        return (
          <>
            {isChecked === false ? <div><button onClick={() => this.handleClickToggle()} >Show</button></div>
            :
              <>
                <div>Check</div>
                <button onClick={() => this.handleClickToggle()}>Hide</button>
              </>
            }
            <section>
              <h1>Sally Ride's Packing List</h1>
              <ul>
                {listItem}
              </ul>
            </section>
          </>
        )
    }
}

export default PackingList;