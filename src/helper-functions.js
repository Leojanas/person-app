import $ from 'jquery';

const helpers = {
    getPerson(){
        return new Promise((resolve, reject) => {
            $.ajax({
                url: 'https://randomuser.me/api/',
                dataType: 'json',
                success: function(data) {
                    resolve(data.results[0]) 
                }
              })
        })


    },
}
helpers.getPerson()

export default helpers;