jQuery(document).ready(function() {

   console.log("ready");

   var imageUrls = [
      'http://s7d9.scene7.com/is/image/BedBathandBeyond/2645613119651p?$478$',
      'http://ghk.h-cdn.co/assets/cm/15/11/55008e66885bd-delonghi-toaster-cto2003-mdn.jpg',
      'http://cdn2.expertreviews.co.uk/sites/expertreviews/files/images/dir_431/er_photo_215515.jpg?itok=hAmnqhQJ'
   ];

   function initialize() {

      var thumbsContainerElem = $( "div#thumbs" );

      for ( i = 0; i < imageUrls.length; i++ ) {

         var thumbImgElem = $( "<img/>" )
            .addClass('thumb')
            .attr( 'id', "thumb" + i )
            .attr( 'src', imageUrls[i] )
            .data( 'index', i);

          thumbImgElem.bind( 'click', selectPic );

         thumbsContainerElem.append( thumbImgElem );
      }

   }

   function selectPic() {
     var thumbImgElem = $ ( this );

     i = thumbImgElem.data( 'index' );

     $( "img#pic" ).attr( 'src', imageUrls[i] );
     //console.log( "Select " + thumbImgElem.attr( 'id' ) );
   }

   initialize();

});
