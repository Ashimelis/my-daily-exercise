import React, {useState} from 'react'


function MemberShip() {



   const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

  return (
    <div>
      <div>
      <label>
        <input
          type="checkbox"
          checked={checkedOne}
          onChange={handleChangeOne}
        />
        Check me!
      </label>
      <label>
        <input
          type="checkbox"
          checked={checkedTwo}
          onChange={handleChangeTwo}
        />
        Check me2!
      </label>
    </div>
      <div>
        <form>
          <p> Members registration</p>
          <div> 

          </div>
          <div>
            <label>First Name</label>
            <input type='name'placeholder='inter your Fist name' />
            <label>First Name</label>
            <input type='name'placeholder='inter your Middle name' />
            <label>First Name</label>
            <input type='name'placeholder='inter Last name' />

          </div>

        </form>
      </div>
      <div>

      </div>
    </div>
  )
}

export default MemberShip