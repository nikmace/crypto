import axios from 'axios';

const TransactionData = {
    fetchData: function(endPoint) {
        axios.get(endPoint)
            .then(function(response) {
                return response.data;
            })
            .catch(function(err) {
                console.error(err);
            })
    },
}


export default TransactionData;
