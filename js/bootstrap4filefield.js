(function($){
    $.fn.bootstrap4FileField=function(options)
    {
        $(this).each(function(){
            var settings=$.extend({
                style:'primary',
                label:'File',
                icon:false
            },options),
            $element=$(this);
            __init($element,settings);
        });
        
        function __init($element,settings)
        {
            var button=__buildButton(settings);
            $element.css({opacity:0,width:0,height:0,position:'absolute',left:'-1000px'}).after('<div class="input-file-holder"><div class="input-file"><input type="text" class="form-control float-left">'+button+'</div></div>');
            $element.next('.input-file-holder').find('input[type=text]').on('change',function(){
                $element.trigger('click');
            });
            $element.next('.input-file-holder').find('button').on('click',function(e){
                e.preventDefault();
                $element.trigger('click');
            });
            $element.on('change',function(){
                var chosenFile=$(this).val().replace(/.*(\/|\\)/, '');
                $element.next('.input-file-holder').find('input[type=text]').val(chosenFile);
            });
        }
        function __buildButton(settings)
        {
            var style=settings.style;
            var label=settings.label;
            var icon=settings.icon;
            if(style){
                switch(style) {
                    case 'info':
                        style='btn-info';
                        break;
                    case 'warning':
                        style='btn-warning';
                        break;
                    case 'success':
                        style='btn-success';
                        break;
                    case 'dark':
                        style='btn-dark';
                        break;
                    case 'light':
                        style='btn-light';
                        break;
                    default:
                        style='btn-primary';
                }
            }
            label=(false!==icon)?'<i class="fa '+icon+'"></i>':label;
            return '<button type="button" style="position:relative;top:-38px" class="input-file-upload-btn float-right btn '+style+'">'+label+'</button>';
        }
    };
}(jQuery));