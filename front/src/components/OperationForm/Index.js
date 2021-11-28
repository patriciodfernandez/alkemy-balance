import React from 'react';
import { useSelector } from "react-redux";

const Index = () => {
    const user = useSelector((state) => state.user);

    return (
        <div>
            operations 
            {`¡Hola, ${user.id}!`}
        </div>
    );
};

export default Index;