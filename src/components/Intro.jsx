import React from 'react';
import "./Intro.css"

function Intro() {


  var testimonials = document.getElementById('testimonials');
  var control1 = document.getElementById('control1');
  var control2 = document.getElementById('control2');
  var control3 = document.getElementById('control3');
  
  
  function control_1 (){
      testimonials.style.transform = "translateX(870px)";
      control1.classList.add("active");
      control2.classList.remove("active");
      control3.classList.remove("active");
  }
  
 function control_2(){
      testimonials.style.transform = "translateX(0px)";
      control1.classList.remove("active");
      control2.classList.add("active");
      control3.classList.remove("active");
  }
  
 function control_3(){
      testimonials.style.transform = "translateX(-870px)";
      control1.classList.remove("active");
      control2.classList.remove("active");
      control3.classList.add("active");
  }
  
  
  
  return (

    <div>

    <section className = "intro">
    
    <div className = "video">
    <video  src = "https://media.istockphoto.com/videos/man-using-smartphone-and-desktop-working-in-home-video-id1264167505" autoPlay loop muted />
    </div>

    <div className = "content">
    <h3>Why choose us?</h3>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>  
    </section>    
    
    




    
    {/* <div class="containers">
        <div class="veiw-box">
            <div id="testimonials">
                
                <div class="user">
                    {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAABZVBMVEX///8Tk3wVHCwREiT6tocGDhu8vcEAAADa2tsLdWHgm3EAkXi/v8R5qKHKhmEAABUAABj5sH3+8uoAABYAABsAABE2GxT6toj/vIsAAAwAACMVHSzWkmwSGSoMEyIGDhrx8fIQiXPnoHQAAB8ACyHwrH8AEihtbnYKEybr6+3Jys0ADCYAFSn5wZoMeWXh4eKUlJpBQUwnKDaFho1FSVSwsbWjpaqndVkYAAD6yqpdYGj72MG/jW0VFSkPg27g7ut0m5R+f4dyc3p/gYeLjpM3OkdUWGA8LStnSz+XbFLHi2hNOTMmHyV5V0ZdQzt5WUpANTmfcVZcU1VxX1jWqIo1MTnlqYCshW7Fk3KVcl7Pm3eEZVb85tUkAABpRjSJYEcfHCO3e1oJHyUKV0wnFBxkfmY3aVcIODZKf2abmXYPY1hfhmq7oXvdrYKynnkJKi0UTEqz185ss6Q/n4yQxLdjsJ+Ws7BjlfrjAAAPO0lEQVR4nO2cjV/aSBrHFQhBdA02mSMIUUQwvFgJ4cUuRfdAQFettrdX3Nrttba35663e9vd7t7ffzOTEJKQQCwvE/fy+3xUTALMN7/neWaYTFhY8OTJkydPnjx58uTJkydPnjx58uTJkydPnjx5euDKhapSuSmKraN2LV9UtiWLK1K5Jdbr4lG7GsqRbeBnKd+uxGMMl1bExbZLYjBUq8ssQNuyWbgtArKVZp50Q++lUFNgt7OCT69smuUiaeM2AW5Mtx4MW7BCp32OJaTpUpV0k50oWIplnWMpZoKO69FCFea+WFDxLKgUSTd9lJJtOhu/Pxd2LSaRbr29Qp3I51FhMRW3Vv8q+xlRqFPa5876eBQTxjd+pATajTWkDibEwmQ10hhD6nKfWTWMAm4jq3DTwIJyWTTWp8UFydxUQY6YqXH5hHiSNI6mGphKfqlKV0jz9BXiJq3zRgG3jEHkyfrlYcXcMW5sbU+ZyyXBmHfeMTuOWBAkTQVVcRyIgk92eGS2Q5oKjnwdGiZsUNTxCbvhzDVAvpuOO2qpsLFJUZGTFwy1ueHkePKWOTIsDt2CYr5OsPCPIzLi44+OgwwTKEWx09QZQ1GblAOT03WyXHkHY6kNlYs6T4X3AX40nkxIJ4mCtcbPs/WxYCSmwqlz5fH4cIwQLR9Jedy51+yCMOFwOLUfc0iWFkmC5WOjWyfouAA0DJKdRdT/faMHzoKcJAjWHvkxDBbDzQHYMcIKp07Z/oYxZoMQQbDuiJoYj2/osChwCrky8OdroG7eHE0WITlJkB7RNoHSCwdiJgB/pU6ACjaaLH1EjitH27fLYBcFnqEECwSi8HcYdWbjS0i2Sw7MvnYY7aLACeLKBAIBGIzhxDHrgEwQyIEF7brnjU0Lv6BhUPjRGdD22ZPFksTAqjZFcYMyiMWFHhsGgxE/PhmQ2SYaTW4qv2Z5DUKgDHYx1KmOS02z8NvYWDKaXL2XrBwz2rUJLsKYKxXQhDvq08ExNokWIwg2NNsRjxujcJPax1h6Lkx2eilvjCEj6JjFwMPMFQ8PcyGy5wVB2ImMJKPJzVUNgZk65Xfx9TNzHCrKXK77nl9cHDP9wm8FliQGZg5FQxyy1NtUYj+hrxt6skYiBXV63B+GDJcQQIxroaY4JqgrOgx+xS6UYmjNpXbVUC8o1ro4kuygUbmP7+x0/vZ81+QX826/jxWOWnL1634q/EyNRzXRhMKusFPI+rIlcmBVFjbjm78/5vmXgqHOM8/Cml12XJppqVNlIKLMXwkvG71o7+p5geSsRx5ks9/ysIX8q4J+DuDdjWaXdRhqpqnHvYhE+p6t9/ALRl8xTXJgRVruBbAjjcLAMHDSpwqnRthlMC2BTYOexQsNHu/gGwQ/tiQjPfXMX6+rYJsU89ahXQbTUm+BUkEKr3h1z5fkwBaueWhJNBDNQLB+ld8fXQxtTdtn0Wnx7bzOqE9c+44Y13druAWp1dXTHRWM0Yo8CqfRRNpupRO/wdPEu9+sribUCCYG9hi/fXgVSlA6MaZfNtBZ792cBgL6LDN6eH3T66NlFM9QNGbP0MtFo0Qtw4ZFUUNW4xgMvNANeRtv3jz5h6F6hPV2vX3y5snX/f9wpqWeMRS1i8ESeCupLHu0pgYi1MsN3H2lBtmV+QvUkxt9OCaiGid//QTt7mn78DPfwRw9wa+HD3xMCExJMRyJq2dZCHauq/HRHmr5m7cGMN1geP8N2q3jxlNzDMU+w6+Hz02UEJjOscTJ7iYFcEHsDzUUxxr6UEwkdBlmcgyTwU+fYJ+8Y/oce1WgqOOU/gMKf/rmCf3MUDwSq7oce0G/ebKvx4aDx9Qxcx4mn2NqVcyghlwX4Lk29l189LRnLPiJVd1+PnOaMfUHmdQF3chohpGrimo/BpsSjr5MbybMIyjzgCqxmtDvtejmTl6jCFD7MVIpBvVYIYtmonwDXIwayKtgq2MOQTnXfxmCI49+MCLxV/vWbTWCOR1noRckyLWQD/P9iBszflLBEuOPUrleEF04kN++4h0Q3ReM5zOXEaKXNJPp7ZdXvbGfujQwZ1zR69eFne02SbAFWRAK6zvXDsEccfGv19d3iC/OqaNlA+sOwcLjD0Fglzt49o3s2j48A+cQzGHE8pdozovsxfWFhRC69rf+rbMmO9QJAssSXpqzsC34fIUr55XRgZ6juVOO9AJ8ESbZzuU0wTIFlGIRkqshkNDyN2FnmmCNdZxihLkWcmjifkSSrdnJ7gn8BUoxwr0YEorF3Qs7y6KPbPTUjqy3TvjiWF94ZV/h2o7M7ml2YPxr1Itl3bCOuyOMsGztkc2zvrQzbBfVRBesCYZ9NIu6soY12dpTm2fZ9Nb8yY4LemdVaEWVsN6zbqnNhMwj60jkcUkku0BsIGzZ7nOb2LKORZtI7O2gQBR8yfkS2CiJl6gXXlsHo6Vldoad7brIMNUy3/orSzLLLLPOMP51QbmmPXcCGylLg+Pr1kNGi0mZx1bHBfgrnGA+xi2GaYuqCtal0ezZIxuuxjpeJuySkqhoGy9mEOw8e6yvIE8tsfoF0UUZhtRfLmZDFlj78juF7dHT6JplgvGNgrpaxCUlUVGOVZed2FQQiBZ4DBW1G/zC/FJXsJBcC2yhurqeO164cDpnZeB6pS3LipG+XceowZrMyHnv/p/OLrXvKRA40ihGhTSwDTZyz5kCvncMtKVUpG9DMiun3SC3QVGxE6srKbZcDbROrH9ett1yr3BfHS2W0MVoqsE7nWyLXsb0CxZdVeyRSlkdGFp3ZL6qZ8P17TkwrDFl3HBDrV4mMGjai8A416J85gQwlLvBDKGomHbeGM2Flrhpd4O4NRSLWV3x0FaZnjXsLzLx0avzweJ7DSxNfnrKoGp/6KED26QYcGznWvTVu8HdEjowIU4axajB/euUQSybSFmtdQ4zwHiglmSxFdIsegXBsGFqpvWiGShdGYlmwqurN5RZ/TsbSa4FHlJycIecub0xPOMI4VIpyJcKJxJ4wctNxHyg9goRF3XRlbSdYRBsEH6rA91wQ5b1X8JFwShqX91kuiEOjpU4LcNgNGYSGhhFsaZjtSwTONJXWlQ1tYpoNuz9B8o0Ray59s/ND++NBw9ulsj6yM/cQzWBHRfzcW/p+58D+ou0fEbhuvrX3t4tYwTT6ocvm3WBZ7qvbjIGIgPeLyH98OPPupoIyU6vvsc77oCRTJdmWYG4Z+UBV1wPFWM/3i1p+vePP/30M9JP//nxB23r3S0wsg1ut8r6CH8nYVt3Y63WPsD88mFvEWpppNAhS7eUvqce3LmTlYmSVXVcaoKx4Je7w0VFWyPB1GPufgEWlvnSJNdShbYHpziuhCD7cW9xoL0RXFvaUUvvATtkmY9rkQOrpA2GMczt0qJBy6MDUdPdLaNmm+47I8h11EH9nesbgPqwtWiWfTCaD4QRCYyWkRs16r+SSgAWWCPILA7du40Z70MFhKYYc7o78g/eH1o0FelwTIIZ0N4DPRipNRH5wY3rBx9tsKw927M9+ENEF4uk5hjz2hjx4IM9l4Vp1nYpWjrQJRmhb77QHBvll4o2qPt7o7DQoQeDwTAhx3Iq2MHtOC6k5S0kBwfuaZ6ly2TA1Ck3Ie6kuffQXZ8MkOrIJGzZwd10uRYXPypk5K7ZJvGXlwrT5lrcOsDjD47cFKMUiTuoHPfXLT5hXJIYGFoHcWA1iJhQOMtiJCe780CYfiRCQbA0wa9vWkAfNGcQiSgWs3HCH6G7U6+JSHcHxK+xJ7dmAXZI/kvUv1qeBdgW+atkv84EbPlX0lwLv80G7HfSXAuzwIL6RJrrq63ZgG19RRhsNinmgiSbTYpBsN8Ig80GC4ks12x6MaRlsklmTrGt6YGRTTJzitlNLjrQlgmMbJJ9MoHZTxiOlempy0R7MnOKbU0CtmUiI5lk5hQ7nADs0BTGRJPsd3MkTpBj5pNCdLhoTrGlSYqHee6EZJKZU2zkrPxYMNOTl8lxDaXYZGDuSbKhFJsMzD1JNpRik4DBZ5tejlySDaXYRGBDfhNLMnP3fDjiSqUjMHOSkeqih2vHlMFIVY8/hmrH3iSfYvaGqscfhMA+jWvZ/TRsOKHqMfQhc2mSgQe+BL9l3EIoyYY+ZE4fjEySmbvnwwnBhk8MmS46ae6eh8/4vcGGPmwm5wyVC+WDVXOK7U00osJjKnP1WK4G86G5XScr5oNQK/8dqh0TgqEXMIP9F71VMD+HBcLJUFDRyhdDtWOoXffUsOXLX6yobxdKzparGOxrxdyLWUTS/cHM1ePTivaGM3VtwBVcWTYJrQQzb7uf9mD1MG8bgM2ULD94m+AXJv0VyrztfrJ6Bd0bzvKitN6x+UgHNq9YnLdmXRlD45swC83jXpdifnw7pqt59GOKcqGV8c2ZjlbmN/JQlSzmZ0y3ki8m5ww1oIOjxunzreThCJEYk17JXDE0OSHiCRXdQTSsZC5XxJSQc2UkKdyNjoIsxZxbaUYqaSHSbfLkyZMnT548efLkyZMnT548qQr9SbVA/0m14P+TygN7aBoJxnGG/9SfhyEVrAN/ZN/gMRbb7TKy9p9Q4fxyt+N/IFLAOLHOsW0WsP4IoNsCx4AIx9DVWq3WkmhA036Opl/mabpTLhFur2OpjsXbIN5sSk26KbWOJFmSWpVaJVShaTHXlUJ5uRQKVfKlkFyar2NpXehrD9P6IzgoAe7juDT8vY1/Y6lgjOQXxRbbEus0Xd5u++lWqxsr5YtHoiTn6Xp1pUPLuRA33xRLdyutgo/z+UqszPm75VKHk1mfcARx5IjMCYKPEeti/ahb67YrzeZBu1Mud9oipwfj6vVyV6qLzRLHlAtSjBXLFS5Gb4eaUqVKd4J5AORiXp5z7ZCb5Va1W65UxZZYrZQrtWZLLJfy3dhRtym22rVyqdmp+yS6LNGSJJXL3ZpUqYkRPZg/XWv62pwsS/54HZ4Fv1TvclKrjcIv1FppSdVmKV8JxeYLBiSxLFbapdpRvSl1RKkt1cvlUlWUpUobGdFtl0pNuVYvNVutWlmEP7V6s2wE40SZk9st9APqtFiOyy/TXekowtQr21IdABiSIt2ad+mQ/ZES15Hl7RIn+ytA9pdi8D+5w5WYEueThYofZn1J9nNwvww6flmGj/wGMJxzEfiL5VAqsngTE8HbGQ49RpvnzDWJ/j9HHg9ZHthD0/8AfeaFm7qg4WwAAAAASUVORK5CYII=" alt=""/> */}
                    {/* <p>Many people feel that there is a limited amount of abundance, wealth, or chance to succeed in life. Furthermore, there is a solid beleif that if one person succeeds, another must fail.</p>
                    <h3>Riley Olie</h3>
                </div>
                
                <div class="user space">  */}
                    {/* <img src="data:image/png;base64,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" alt=""/>
                    <p>Many people feel that there is a limited amount of abundance, wealth, or chance to succeed in life. Furthermore, there is a solid beleif that if one person succeeds, another must fail.</p>
                    <h3>Steve McCurry</h3>
                </div>
                
                <div class="user">
                    {/* <img src="data:image/png;base64,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" alt=""/> */}
                    {/* <p>Many people feel that there is a limited amount of abundance, wealth, or chance to succeed in life. Furthermore, there is a solid beleif that if one person succeeds, another must fail.</p>
                    <h3>Merlin Nguyen</h3>  */}
                {/* </div>
                
                
            </div>
            
            <div class="controls">
                <span onClick="control_1" id="control1"></span>
                <span onClick="control_2" id="control2" class="active"></span>
                <span onClick="control_3" id="control3"></span>
            </div>
            
        </div>
    </div> */}
    



    </div>
    
  )
}

export default Intro
