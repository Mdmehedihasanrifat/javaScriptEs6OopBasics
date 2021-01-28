//KilometerToMeter

            function KilometerToMeter(kilometer) {


                if (kilometer < 0) {


                    return "Distance cannot negative"
                }
                else {
                    let meter = kilometer * 1000;


                    return meter;
                }
            }
            console.log(KilometerToMeter( 2.3));

//budgetCalculator

            function budgetCalculator(watch,phone,laptop){

                if(watch<0||phone<0||laptop<0){


                    return "Things cannot negative"
                }

                else {
                    let totalBudget = (50 * watch) + (100 * phone) + (500 * laptop);
                    return totalBudget;
                }

            }

            console.log(budgetCalculator(2,4,1));

//hotelCost

            function hotelCost(day){

                let Total;
                let extraDay;

                if(day<=0){

                    return "You must stay for cost"
                }

                else if(day<=10){
                       Total=day*100;
                       return Total;

                     }
                    else if(day<=20){
                     extraDay=day-10;

                     Total=(10*100)+(extraDay*80);
                     return Total;

                            }
                     else{
                            extraDay=day-20;
                            Total=(10*100)+(10*80)+(extraDay*50);
                        return Total;
                        }

            }
            console.log(hotelCost(0));
//megaFriend
        NameofFriend=["Rifat","sakib","Amzad"];


        function megeFirend(NameOfFriend) {
            let longest_index = NameOfFriend[0];

            if (NameOfFriend.length ===0||Array.isArray(NameOfFriend)===false) {

                return "Array is empty or not a array";
            }

            else {
                for (let i = 0; i < NameOfFriend.length; i++) {
                    if (NameOfFriend[i].length > longest_index.length) {

                        longest_index = NameOfFriend[i];
                    }
                }
                return longest_index;
            }
        }
         console.log(megeFirend(NameofFriend));
