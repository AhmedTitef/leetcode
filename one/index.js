// 2114. Maximum Number of Words Found in Sentences


var mostWordsFound = function (sentences) {
    let count = 0;
    let maxCount = 0;
    let quotation = 0
    for (let i = 0; i < sentences.length; i++) {
        count = sentences[i].split(" ").length
        if (count > maxCount) {
            maxCount = count;
        }



    }
    console.log(maxCount)
    return maxCount;
};

mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])