
import Button from 'react-bootstrap/Button';
import AddProduct from './AddProduct';
import { useState } from 'react';

const Header = ({setMainData, mainData}) => {
    const [hideShow, setHideShow] = useState(false)
    const handleClick = () => {
        setHideShow(!hideShow)
    }
  return (
    <>
    <h1 className='text-warning my-3'>Checkout Page</h1>
    <Button variant="primary" onClick={handleClick}>Hide / Show</Button>
    <AddProduct hideShow={hideShow} setMainData={setMainData}  mainData={mainData}/>
    </>
  );
};

export default Header;
