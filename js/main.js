$("#info-cover").hide();

(function anim(i) {
     setTimeout(function () {
          if (8 - i < 5) {
               el = ` span:nth-child(${8 - i})`;
               $(`.aire${el}`).addClass("up");
          } else {
               el = ` span:nth-child(${4 - i})`;
               $(`.new${el}`).addClass("up");
          }
          if (--i) anim(i);
     }, 75);
})(8);

setTimeout(() => {
     (function anim2(i) {
          setTimeout(function () {
               if (6 - i == 3) i--;
               $(`#imgs img:nth-child(${6 - i})`).css("height", "20vw");
               if (--i) anim2(i);
          }, 250);
     })(6);
}, 2500);

var technologies = [
     "ENERGY STAR",
     "SOLAR POWER",
     "GEOTHERMAL",
     "INSULATION",
     "SMART THERMOSTAT",
];
var tech_info = [
     "ENERGY STAR is administered by the U.S. Environmental Protection Agency. Thousands of organizations—including nearly 40% of the Fortune 500®—partner with ENERGY STAR. Together with EPA, they deliver cost-saving energy efficiency solutions that protect the climate, improve air quality, and protect public health.<br><br>ENERGY STAR products typically cost the same as other products while using less energy, saving you more money on your electricity as according to the NRDC, replacing a 1980's model refrigerator with a new will save you %100 a year in total energy costs.",
     "Solar energy is a sustainable and eco-friendly form of energy that can generate electricity for households and businesses alike. It offers numerous benefits, including significant cost savings on energy bills, increased property value, and a reduced carbon footprint.<br><br>While the upfront cost of a solar panel system is typically $20,000 in the U.S., an average homeowner will save between $20,000 and $96,000 over a solar panel system's lifetime, providing significant savings on energy bills over time.",
     "Geothermal energy, a natural resource and form of energy conversion in which heat energy from within Earth is captured and harnessed for cooking, bathing, space heating, electrical power generation, and other uses. This allows a range of benefits including: reliability, sustainability, low carbon footprint, cost-effectiveness, versatility, continuous production, stable energy, and low visual impact with no emissions.<br><br>For a geothermal heating and cooling system, the average low cost is $17,000, the average middle cost is $24,500, and the average high cost is $32,300. However, geothermal energy can save you from 30% up to 80% on the cost of heating and cooling homes, providing substantial savings.",
     "Insulation can conserve energy, saving money in monthly heating and cooling bills. Insulation can also improve the health and comfort of building occupants. There are many types of insulation on the market and this webpage provides some resources to help you choose a safer and greener option.<br><br>Offering a relatively low upfront price of basic insulation material prices ranging from $0.50 to $2.80 per square foot. Insulation can help homeowners save money on heating and cooling costs by reducing the amount of energy needed to maintain a comfortable temperature, with the US Environmental Protection Agency (EPA) and the Energy Star program estimating that the average savings are 15% on heating and cooling costs and 11% on total energy costs.",
     "Smart thermostats offer a range of benefits, including energy savings, convenience and remote access, customization and personalization, enhanced comfort and zoned heating/cooling, environmental benefits, real-time alerts, improved energy efficiency, and boost indoor air quality.<br><br>While smart thermostats range from around $250 to less than $100, smart thermostats can help you save money on your energy bills. According to Nest, you can save 10% to 12% on heating and 15% on cooling using a smart thermostat, resulting in average savings of between $131 and $145 per year on your utility bills.",
];
let str = "";
let clicked = false;

$("img").on("click", function () {
     if (clicked) {
          return;
     } else {
          clicked = true;
     }
     $("#" + this.id).css("height", "40vw");
     $("#" + this.id).css("width", "25vw");
     $("#" + this.id).css("top", "6vw");
     $("#" + this.id).css("left", "17.5vw");
     $(".img, #img-2, #title").css("opacity", 0);
     $("#" + this.id).css("opacity", 1);
     $("#info").html("");
     num = parseInt(this.id.slice(-1));
     el = technologies[num];
     for (i = 0; i < el.length; i++) {
          str += `<span>${el[i]}</span>`;
     }
     setTimeout(function () {
          $("#info-cover").css("opacity", 1);
          $("#info-cover").show();
          $("#info").html(str);
          $("#long-info").html(tech_info[num]);
          $("#long-info").css("top", "14vw");
          $("#long-info").css("opacity", 0.9);
          (function anim(i) {
               setTimeout(function () {
                    $(`#info span:nth-child(${el.length - (i - 1)})`).addClass(
                         "up2"
                    );
                    if (--i) anim(i);
               }, 75);
          })(el.length);
     }, 600);
     $("#info-cover").css("opacity", 0);
     $("#info-cover").hide();
});

$(document).on("mousemove", function (evt) {

     var x = evt.pageX;
     var y = evt.pageY;

     $("#cursor").css(
          {
               left: x,
               top: y,
               opacity: 1
          }
     );
});
