var initialState = [
    {
        id: 1,
        name:"iphone 6",
        price: 400,
        status: true
    
    },
    {
        id: 2,
        name:"iphone 13",
        price: 400,
        status: true
    
    },
    {
        id: 4,
        name:"samsung s3",
        price: 500,
        status: false
    
    },

];

const products =  (state = initialState, action ) =>{
    switch( action.type){
        default: return [...state];
    }
}

export default products;