let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(colorCar in statistics){
    if(colorCar.charAt(0)=='r' || statistics[colorCar]%2==1){
        console.log(statistics[colorCar]);
    }
}
