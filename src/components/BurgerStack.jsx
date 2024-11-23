const BurgerStack = ({ stack, removeFromBurguer }) => {

    return (
    <ul>
        {stack.map((ingredient,  index) => (
            <li key={index} style={{ backgroundColor: ingredient.color}}>

                {ingredient.name}
                <button onClick={() => removeFromBurguer(index)}>X</button>

            </li>

        ))}
    </ul>
    );
  };
  
  export default BurgerStack;
  
  