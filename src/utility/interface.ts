export interface card {
   firstName : string,
   lastName : string,
   image : string,
   stack : string[],
   about : string,
   codeLink : string,
   liveLink : string 
}

export type projectArray = card [][];

export interface highlightedTextData{
    normalData?:string,
    highlightedPart?:string,
    endingData?:string,
}

export interface data {
    companyName:string,
    bulletPointsArray:highlightedTextData[],
}
