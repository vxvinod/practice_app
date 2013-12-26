(function wish(){
        var wishes=['hard code Ruby on rails developer','roaming round the world','keep your body fit'];

        var index =0;


        function show_message(){
                $('#message').text(wishes[index]).show();
                setTimeout(hide_message,400);

        };

        function hide_message(){
        $('#message').hide();
        update_message();

        };

        function update_message(){
        index=index+1;

                if(index>2){
                        index=0;
                }
                show_message();        
        };        

        show_message();

})();