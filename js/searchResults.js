export const buildSearchResults = (resultArray) => {
    resultArray.forEach(result => {
        const resultItem = createResultItem(result);
        const resultContents = document.createElement("div");
        resultContents.classList.add("resultContents");
        if(result.img){
            const resultImage = createResultImage(result);
            resultContents.append(resultImage);
        }
        const resultText = createResultText(result);
        resultContents.append(resultText);
        resultItem.append(resultContents);
        const searchResults = document.getElementById("searchresults");
        searchResults.append(resultItem);
    })
}

const createResultItem = (result) => {
    const resultItem = document.createElement("div");
    resultItem.classList.add("resultItem");
    const resultTitle = document.createElement("div");
    resultTitle.classList.add("resultTitle");
    const link = document.createElement("a");
    link.href = `https://en.wikipedia.org/?curid=${result.id}`;
    link.textContent = result.title;
    link.target = "_blank";
    resultTitle.append(link);
    resultItem.append(resultTitle);
    return resultItem;
}

const createResultImage = (result) =>  {
    const resultImage = document.createElement("div");
    resultImage.classList.add("resultImage");
    const img = document.createElement("img");
    img.src = result.img;
    img.alt = result.title;
    resultImage.append(img);
    return resultImage;
}