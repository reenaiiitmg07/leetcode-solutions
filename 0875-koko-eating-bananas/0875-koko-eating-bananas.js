/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let l=1;
    let r=Math.max(...piles)
    while(l<r){
        let m=Math.floor((l+r)/2);
        let hi=0;
        for(pile of piles){
            hi=hi+Math.ceil(pile/m);
        }
        if(hi<=h){
            r=m;
        }else{
            l=m+1;
        }

    }
    return l
};