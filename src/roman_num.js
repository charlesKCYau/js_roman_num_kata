export function num2Roman(num) {
    //TODO: Arabic num to Roman numeral
    //if num undefined, throw excep
    //if isNaN, throw excep
    //if Number.isInteger, else throw excep
    //if <=0 or > 3000, throw excep

    //main coding
    //change num to string
    //  let output = "";
    //for loop (in backward) { 
    //  map the last digit 1,2,3, ...9 ->  I,II, III, ..., IX, else ""
    //  if the second to last digit exists, map 1,2,3, ...9, 0 -> X, XX, XXX, ..., XC, "" else ""
    //  if the third to last digit exists, map 1,2,3, ...9, 0 -> C, CC, CCC, ..., CM, "" else ""
    //  if the fourth to last digit exists, map 1,2,3 -> M, MM, MMM else ""
    //  output = new_mapped + output;
    //}
    //return "";
    return output;
}

export function roman2Num(roman) {
    //TODO: Roman numeral to Arabic num  
    //if roman undefined, throw excep
    //if any letter outside of I, V, X, L, C, D, M, throw excep
    //if there exists IIII, IIIII, ... (more than 3 consecutive I's), throw excep
    //if there exists more than 3 X's, 3 C's, 3 M's, throw excep
    //if there exists more than 1 occurrence V's, L's, D's, throw excep

    //Main coding
    //Introduce an unreal numeral W to replace IV, Y replaces IX,
    //K replaces XL, B replaces XC, E replaces CD, N replaces CM
    //(2943) MMCMXLIII -> MMNKIII (every adjoining characters are equal or decreasing)
    //for loop {
    // if a[i] < a[i+1] else throw excep
    //still some loophole like KX(40, 10) is invalid even thou it passes the above checking
    //if there exists WI(4,1), YI(9,1), YW(9,4), YV(9,5), 
    //KX(40,10), BX(90,10), BK(90,40), BL(90,50),
    //EC(400,100), NC(900,100), NE(900,400), ND(900,500), throw excep

    //convert transformed roman -> array of characters
    //let outnum=0
    //for loop (transformed roman) { 
    // outnum += map (I,W,V,Y,X,K,L,B,C,E,D,N,M -> 1,4,5,9,10,40,50,90,100,400,500,900,1000)
    //}

    //return 0;
    return outnum;
}