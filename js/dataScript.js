function relabelData(dataName, dataValue){
    //parameters
    // dataName = price, accessibility
    // dataValue = data.price, data.accessibility

    // call function = relabelData("price", data.price);

    var label = "";

    switch(dataName){
        case 'price':
            if (dataValue == 0){
                label = "Free";
            } else if (dataValue > 0 && dataValue < 0.2){
                label = "$1.00-$15.00";
            }else if (dataValue >= 0.2 && dataValue < 0.3){
                label = "$15.00-$25.00";
            }else if (dataValue >= 0.3 && dataValue < 0.5){
                label = "$25.00-$35.00";
            }else if (dataValue >= 0.5 && dataValue < 0.75){
                label = "$35.00-$45.00";
            }else if (dataValue >= 0.75 && dataValue < 1.0){
                label = "$55.00-$65.00";
            }else{
                label = "$65.00+";
            }
            break;
        case 'accessibility':
            if(dataValue >= 0 && dataValue <=0.25){
                label = "Effortless";
            }else if(dataValue > 0.25 && dataValue <=0.5){
                label = "Moderate";
            }else{
                label = "Concentrated";
            }
            break;
        default:
            label = "Renaming Error"
            console.log("data naming error");
    }

    return label;

}