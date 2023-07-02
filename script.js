$(document).ready(function(){
  $(".third img").fadeIn(2000).removeClass('third img');

  $(".man").hover(function(){
    $(".sub-menu").show();
    $(".tega").hide();
    $(".mega").hide();
  });
  $(".sub-menu").mouseleave(function(){
    $(".sub-menu").hide();
  });

  $(".mans").hover(function(){
    $(".list-items img").css("width", "520px")
    $(".tub-menu").css("display", "flex")
    $(".mega").show();
    $(".tega").hide();
    $(".sub-menu").hide();
  });
  $(".mega").mouseleave(function(){
    $(".mega").hide();
  });
  
  $(".maned").hover(function(){
    $(".list-items img").css("width", "520px")
    $(".bub-menu").css("display", "flex")
    $(".tega").show();
    $(".mega").hide();
    $(".sub-menu").hide();
  });
  $(".tega").mouseleave(function(){
    $(".tega").hide();
  });

  $(".mand").hover(function(){
    $(".tega").hide();
    $(".mega").hide();
    $(".sub-menu").hide();
  });

  $(".mandy").hover(function(){
    $(".tega").hide();
    $(".mega").hide();
    $(".sub-menu").hide();
  });

  $(".mane").hover(function(){
    $(".tega").hide();
    $(".mega").hide();
    $(".sub-menu").hide();
  });

  $("#next").click(function(){
    let currentImg = $(".active");
    let nextImg = currentImg.next();

    if(nextImg.length){
      currentImg.removeClass("active").css("z-index", -10);
      nextImg.addClass("active").css("z-index", 10);
    }
  });


  $("#prev").click(function(){
    let currentImg = $(".active");
    let prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass("active").css("z-index", -10);
      prevImg.addClass("active").css("z-index", 10);
    }
  });


  $("#nexted").click(function(){
    let currentOmg = $(".actived");
    let nextOmg = currentOmg.next();

    if(nextOmg.length){
      currentOmg.removeClass("actived").css("z-index", -10);
      nextOmg.addClass("actived").css("z-index", 10);
    }
  });


  $("#previ").click(function(){
    let currentImg = $(".actived");
    let prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass("actived").css("z-index", -10);
      prevImg.addClass("actived").css("z-index", 10);
    }
  });

  $("#shaw").click(function(){
    $(".active").hide();
    $(".smoke").addClass("active").css("z-index", 10);
    // $(".active").show();
    $("#prev").click(function(){
      $(".active").show();
    });

    

    $("#maguire").click(function(){
      $(".harry").css("display", "block");
    });

    $("#varane").click(function(){
      $(".raph").css("display", "block");
    });

     });

     $(".nani").hover(function(){
      $(".nani button").show();
     });
     $(".nani").mouseleave(function(){
      $(".nani button").hide();
    });

    $(".rodri").hover(function(){
      $(".rodri button").show();
     });
     $(".rodri").mouseleave(function(){
      $(".rodri button").hide();
    });


    $("#nexting").click(function(){
      let currentOmg = $(".activation");
      let nextOmg = currentOmg.next();
  
      if(nextOmg.length){
        currentOmg.removeClass("activation").css("z-index", -10);
        nextOmg.addClass("activation").css("z-index", 10);
      }
    });
  

    $("#previous").click(function(){
      let currentImg = $(".activation");
      let prevImg = currentImg.prev();
  
      if(prevImg.length){
        currentImg.removeClass("activation").css("z-index", -10);
        prevImg.addClass("activation").css("z-index", 10);
      }
    });


    $(".jodi").hover(function(){
      $(".boxers").show();
      
    });
    $(".boxers").mouseleave(function(){
      $(".boxers").hide();
    });

    $(".london").click(function(){
      $(".london").hide();
      $(".mover").slideDown();
      $(".domoted").show();
      $(".duver").slideUp(500);
      $(".diver").slideUp(500);
      $(".donver").slideUp(500);
      $(".spain").hide();
      $(".span").hide();
      $(".spin").hide();
      $(".norway").show()
      $(".nory").show()
      $(".rooy").show()
    })

    $(".domoted").click(function(){
      $(".domoted").hide();
      $(".mover").slideUp();
      $(".london").show();
    })

    $(".norway").click(function(){
      $(".norway").hide();
      $(".diver").slideDown();
      $(".spain").show();
      $(".duver").slideUp(500);
      $(".donver").slideUp(500);
      $(".mover").slideUp(500);
      $(".domoted").hide();
      $(".span").hide();
      $(".spin").hide();
      $(".london").show()
      $(".nory").show()
      $(".rooy").show()
    })

    $(".spain").click(function(){
      $(".spain").hide();
      $(".diver").slideUp();
      $(".norway").show()
    });

    $(".nory").click(function(){
      $(".nory").hide();
      $(".duver").slideDown();
      $(".span").show();
      $(".donver").slideUp(500);
      $(".diver").slideUp(500);
      $(".mover").slideUp(500);
      $(".spain").hide();
      $(".domoted").hide();
      $(".spin").hide();
      $(".norway").show()
      $(".london").show()
      $(".rooy").show()
    })

    $(".span").click(function(){
      $(".span").hide();
      $(".duver").slideUp();
      $(".nory").show()
    });

    $(".rooy").click(function(){
      $(".rooy").hide();
      $(".donver").slideDown();
      $(".spin").show();
      $(".duver").slideUp(500);
      $(".diver").slideUp(500);
      $(".mover").slideUp(500);
      $(".spain").hide();
      $(".span").hide();
      $(".domoted").hide();
      $(".norway").show()
      $(".nory").show()
      $(".london").show()
    });

    $(".spin").click(function(){
      $(".spin").hide();
      $(".donver").slideUp();
      $(".rooy").show()
    });
    
    $(".otu").hover(function(){
      $(".otu").addClass("mentor")
    })
    $(".otu").mouseleave(function(){
      $(".ise").removeClass("mentor")
      $(".ano").removeClass("mentor")
      $(".ato").removeClass("mentor")
      $(".abou").removeClass("mentor")
      $(".otu").removeClass("mentor")
    });
    $(".abou").hover(function(){
      $(".otu").addClass("mentor")
      $(".abou").addClass("mentor")
    });
    $(".abou").mouseleave(function(){
      $(".ise").removeClass("mentor")
      $(".ano").removeClass("mentor")
      $(".ato").removeClass("mentor")
      $(".abou").removeClass("mentor")
      $(".otu").removeClass("mentor")
    });
    $(".ato").hover(function(){
      $(".otu").addClass("mentor")
      $(".abou").addClass("mentor")
      $(".ato").addClass("mentor")
    });
    $(".ato").mouseleave(function(){
      $(".ise").removeClass("mentor")
      $(".ano").removeClass("mentor")
      $(".ato").removeClass("mentor")
      $(".abou").removeClass("mentor")
      $(".otu").removeClass("mentor")
    });
    $(".ano").hover(function(){
      $(".otu").addClass("mentor")
      $(".abou").addClass("mentor")
      $(".ato").addClass("mentor")
      $(".ano").addClass("mentor")
    });
    $(".ano").mouseleave(function(){
      $(".ise").removeClass("mentor")
      $(".ano").removeClass("mentor")
      $(".ato").removeClass("mentor")
      $(".abou").removeClass("mentor")
      $(".otu").removeClass("mentor")
    });
    $(".ise").hover(function(){
      $(".otu").addClass("mentor")
      $(".abou").addClass("mentor")
      $(".ato").addClass("mentor")
      $(".ano").addClass("mentor")
      $(".ise").addClass("mentor")
    });
    $(".ise").mouseleave(function(){
      $(".ise").removeClass("mentor")
      $(".ano").removeClass("mentor")
      $(".ato").removeClass("mentor")
      $(".abou").removeClass("mentor")
      $(".otu").removeClass("mentor")
    });
    
    
});

// $("#shaw").click(function(){
//   $(".smoke").css("display", "block");
// })

// $("#maguire").click(function(){
//   $(".harry").css("display", "block");
// });

//  ,function(){
//     $(".sub-menu").hide();
// }

// $("#maguire").click(function(){
    //   let mud = $(".slider-inner img")
    //   mud.hide();
    //   $(".harry").css("display", "block");

    //   $("#prev").click(function(){
    //     $(".active").show();
    //   });

    //   $("#shaw").click(function(){
    //     $(".active").hide();
    //     $(".smoke").addClass("active").css("z-index", 10);
    //     $(".active").show();
    //     $("#prev").click(function(){
    //       $(".active").show();
    //     });
    //     });

    //   });


    // $("#nexting").click(function(){
    //   let currentImg = $("#deve");
    //   let nextImg = currentImg.next();
    //    currentImg.hide();
    //    $(".lober").show();
    

    // $("#nexting").click(function(){
    //    $(".lober").hide();
    //    $(".dober").show();
    // });

    // });

    // $("#previous").click(function(){
    //   let currentImg = $("#deve");
    //   let prevImg = currentImg.prev();
  
    //   if(prevImg.length){
    //     currentImg.removeClass("activation").css("z-index", -10);
    //     prevImg.addClass("activation").css("z-index", 10);
    //   }
    // });


    // $("#previous").click(function(){
    //   let currentImg = $("#deve");
    //   let nextImg = currentImg.next();
    //    currentImg.hide();
    //    $(".dober").show();
    

    // $("#nexting").click(function(){
    //    $(".lober").hide();
    //    $(".dober").show();
    // });


    
    // });
    