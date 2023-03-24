$(document).ready(function(){
    
    // variables
        $surface = $('.surface');
        $car = $('.car'); 
        $img = $('.car img');

        let flag = true; 

        const cars = ['/images/assets/Img_05.png', '/images/assets/Img_06.png']

    // keypress event
        $(document).on('keypress',function(e){ // This function is for the enter key 
            if(e.which == 13){
                $($surface).toggleClass('moveRight');
                $($car).toggleClass('suspension');
            }
        })
    // lights 
        $(document).on('keypress',function(e){ // This function is for the w key
            if(e.which == 119){
                if(flag){
                    flag = false; 
                    $img.attr('src', cars[0])
                }else{
                    flag = true; 
                    $img.attr('src', cars[1])
                }
            }
        })
        
}); 